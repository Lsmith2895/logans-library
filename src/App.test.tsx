import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import userEvent from '@testing-library/user-event';

jest.mock('./utils/getGoogleBooksApiKey', () => ({
  getGoogleBooksApiKey: () => 'test-key',
}));

describe('App', () => {
  it('renders navigation and pages with no book', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <BookProvider>
          <App />
        </BookProvider>
      </MemoryRouter>
    );
    // Check navbar exists
    expect(screen.getByText('Raw Book')).toBeInTheDocument();
    expect(screen.getByText('Pretty Book')).toBeInTheDocument();

    // Check searchbar exists
    expect(screen.getByPlaceholderText('Search For Books by ISBN')).toBeInTheDocument();

    //Check Raw JSON is not there
    expect(screen.queryByText('RAW JSON')).not.toBeInTheDocument();

    // Navigate to library page
    userEvent.click(screen.getByText('Pretty Book'));
    expect(await screen.findByText('How to Search Books by ISBN')).toBeInTheDocument();
  });
});
