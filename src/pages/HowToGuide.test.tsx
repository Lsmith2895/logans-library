import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BookProvider } from '../context/BookContext';
import userEvent from '@testing-library/user-event';
import App from '../App';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  multipleBooksResponse,
  noBooksResponse,
  singleBookResponse,
  noThumbnailResponse,
} from '../__mocks__/mockGoogleApiResponses';

const mock: MockAdapter = new MockAdapter(axios);

jest.mock('../utils/getGoogleBooksApiKey', () => ({
  getGoogleBooksApiKey: () => 'test-key',
}));

describe('How To Guide', () => {
  beforeEach(async () => {
    mock.reset();
    render(
      <MemoryRouter>
        <BookProvider>
          <App />
        </BookProvider>
      </MemoryRouter>
    );

    await userEvent.click(screen.getByRole('link', { name: /raw book/i }));

    expect(screen.getByText(/Get a physical book from your library/)).toBeInTheDocument();
  });

  it('Opens single book display', async () => {
    mock
      .onGet('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: 'isbn:9781501184161',
          key: 'test-key',
        },
      })
      .reply(200, singleBookResponse);

    const singleBookButton = screen.getByTestId('single-book-button');
    //click button
    await userEvent.click(singleBookButton);
    //check books on screen
    await expect(screen.getByText(/The Right Kind of Crazy/)).toBeInTheDocument();
  });

  it('Opens multiple books display', async () => {
    mock
      .onGet('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: 'isbn:1111111111',
          key: 'test-key',
        },
      })
      .reply(200, multipleBooksResponse);

    const multipleBooksButton = screen.getByTestId('multiple-books-button');

    //click button
    await userEvent.click(multipleBooksButton);

    //check books on screen
    await expect(screen.getByText(/A Nature Wooing at Ormond by the Sea/)).toBeInTheDocument();
    await expect(screen.getByText(/Affrilachia/)).toBeInTheDocument();
  });

  it('Opens no thumbnail display', async () => {
    //
    mock
      .onGet('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: 'isbn:0671708635',
          key: 'test-key',
        },
      })
      .reply(200, noThumbnailResponse);

    //go to styled book page to ensure the default image show when no thumbnail available
    await userEvent.click(screen.getByRole('link', { name: /styled book/i }));

    const noThumbnailButton = screen.getByTestId('no-thumbnail-book-button');

    //click button
    await userEvent.click(noThumbnailButton);

    // check that the no-image.svg is on the page
    const imgs = screen.getAllByRole('img');
    const hasNoImage = imgs.some(img => img.getAttribute('src')?.includes('no-image.svg'));
    expect(hasNoImage).toBe(true);
  });

  it('Opens no books found display', async () => {
    mock
      .onGet('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: 'isbn:11112111111',
          key: 'test-key',
        },
      })
      .reply(200, noBooksResponse);

    const noBooksButton = screen.getByTestId('no-books-found-button');

    //click button
    await userEvent.click(noBooksButton);

    //check no items on screen
    await expect(screen.getByText(/"totalItems": 0/)).toBeInTheDocument();
  });
});
