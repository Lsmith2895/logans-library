import {render, screen } from '@testing-library/react'
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import userEvent from '@testing-library/user-event'

jest.mock('./utils/getGoogleBooksApiKey', () => ({
  getGoogleBooksApiKey: () => 'test-key',
}));

describe("App", () => {
  it('renders navigation and pages', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <BookProvider>
          <App />
        </BookProvider>
      </MemoryRouter>
    );
    // check navbar exists
    expect(screen.getByText('Raw data page')).toBeInTheDocument();
    expect(screen.getByText('Library Page')).toBeInTheDocument();

    //check searchbar exists
    expect(screen.getByPlaceholderText('Search For Books by ISBN')).toBeInTheDocument();

    //navigate to library page
    userEvent.click(screen.getByText('Library Page'))
    expect(await screen.findByText('Library Page header')).toBeInTheDocument()
  })
})