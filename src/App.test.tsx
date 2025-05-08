import {render, screen } from '@testing-library/react'
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { BookProvider } from './context/BookContext';

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

    expect(screen.getByText('Raw data page')).toBeInTheDocument();
  })
})