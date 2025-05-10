import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import userEvent from '@testing-library/user-event';

jest.mock('./utils/getGoogleBooksApiKey', () => ({
  getGoogleBooksApiKey: () => 'test-key',
}));

describe('App', () => {
  it('renders and navigates all pages', async () => {
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

    //Check Raw JSON component is not there
    expect(screen.queryByText('RAW JSON')).not.toBeInTheDocument();

    // Empty Pretty book page with how to guide
    userEvent.click(screen.getByText('Pretty Book'));
    expect(await screen.findByText('How to Search Books by ISBN')).toBeInTheDocument();

    // Empty Raw book page with how to guide
    userEvent.click(screen.getByText('Raw Book'));
    expect(await screen.findByText('How to Search Books by ISBN')).toBeInTheDocument();

    // Home button works
    userEvent.click(screen.getByText('Fallibilism'));
    expect(await screen.findByText(/Question/i)).toBeInTheDocument();
    expect(await screen.findByText(/How-to Guide/i)).toBeInTheDocument();
  });
});
