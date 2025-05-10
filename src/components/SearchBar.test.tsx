import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BookProvider } from '../context/BookContext';
import App from '../App';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { singleBookResponse } from '../__mocks__/mockGoogleApiResponses';

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

  //full happy path
  it('fetches and displays book JSON with real ISBN', async () => {
    const mockData = singleBookResponse;

    mock
      .onGet('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: 'isbn:9781501184161',
          key: 'test-key',
        },
      })
      .reply(200, mockData);

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
});
