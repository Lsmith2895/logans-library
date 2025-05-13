import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BookProvider } from '../context/BookContext';
import App from '../App';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  multipleBooksResponse,
  noBooksResponse,
  singleBookResponse,
} from '../__mocks__/mockGoogleApiResponses';

const mock: MockAdapter = new MockAdapter(axios);

jest.mock('../utils/getGoogleBooksApiKey', () => ({
  getGoogleBooksApiKey: () => 'test-key',
}));

describe('SearchBar', () => {
  let searchInputBox: HTMLInputElement;
  let submitButton: HTMLElement;

  beforeEach(() => {
    mock.reset();
    render(
      <MemoryRouter initialEntries={['/']}>
        <BookProvider>
          <App />
        </BookProvider>
      </MemoryRouter>
    );

    searchInputBox = screen.getByPlaceholderText('Search For Books by ISBN');
    submitButton = screen.getByRole('button', { name: 'Find Books By ISBN' });
  });

  afterEach(async () => {
    await userEvent.clear(searchInputBox);
  });

  it('displays validation errors when non digits are input', async () => {
    await userEvent.type(searchInputBox, 'NonDigitInput');
    await userEvent.click(submitButton);

    expect(searchInputBox.checkValidity()).toBe(false);
    expect(searchInputBox.validationMessage).toBe('Please enter a 10 or 13 digit ISBN');
  });

  it('does not fetch book when input is empty', async () => {
    await userEvent.click(submitButton);

    expect(searchInputBox.checkValidity()).toBe(false);
  });

  it('fetches and displays single book', async () => {
    mock
      .onGet('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: 'isbn:9781501184161',
          key: 'test-key',
        },
      })
      .reply(200, singleBookResponse);

    // Enter a valid ISBN and submit
    await userEvent.click(screen.getByRole('link', { name: /raw book/i }));
    await userEvent.type(searchInputBox, '9781501184161');
    await userEvent.click(submitButton);

    // Check that the raw book data is on the page
    await waitFor(() => {
      // Title
      expect(screen.getByText(/The Right Kind of Crazy/i)).toBeInTheDocument();
      // Author
      expect(screen.getByText(/Clint Emerson/i)).toBeInTheDocument();
    });
  });

  it('fetches and displays multiple books', async () => {
    mock
      .onGet('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: 'isbn:1111111111',
          key: 'test-key',
        },
      })
      .reply(200, multipleBooksResponse);

    // Enter a valid ISBN and submit
    await userEvent.click(screen.getByRole('link', { name: /styled book/i }));
    await userEvent.type(searchInputBox, '1111111111');
    await userEvent.click(submitButton);

    // Check that the raw book data is on the page
    await waitFor(() => {
      //Book 1
      // Title
      expect(screen.getByText(/A Nature Wooing at Ormond by the Sea/i)).toBeInTheDocument();
      // Author
      expect(screen.getByText(/Willis Stanley Blatchley/i)).toBeInTheDocument();

      //Book 2
      // Title
      expect(screen.getAllByText(/Microéconomie/i).length).toBeGreaterThan(0);
      // Author
      expect(screen.getAllByText(/Franck Bien/i).length).toBeGreaterThan(0);
    });
  });

  it('fetches and displays no books with valid response', async () => {
    mock
      .onGet('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: 'isbn:11112111111',
          key: 'test-key',
        },
      })
      .reply(200, noBooksResponse);

    // Enter a valid ISBN and submit
    await userEvent.click(screen.getByRole('link', { name: /raw book/i }));
    await userEvent.type(searchInputBox, '11112111111');
    await userEvent.click(submitButton);

    // Check that the raw book data is on the page
    await waitFor(() => {
      // No books
      expect(screen.getByText(/"totalItems": 0/i)).toBeInTheDocument();
    });
  });
});
