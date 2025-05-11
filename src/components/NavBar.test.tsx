import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { BookProvider } from '../context/BookContext';
import App from '../App';

jest.mock('../utils/getGoogleBooksApiKey', () => ({
  getGoogleBooksApiKey: () => 'test-key',
}));

/* Much of the navbar functionality is tested in 
   searchBar.test.tsx EXCEPT the mobile menu  */

describe('NavBar', () => {
  beforeAll(() => {
    // make the screen size mobile
    window.innerWidth = 375;
    window.dispatchEvent(new Event('resize'));
  });

  it('checks the mobile menu shows and hides', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <BookProvider>
          <App />
        </BookProvider>
      </MemoryRouter>
    );

    const menuButton = screen.getByTestId('hamburger-button');

    // Check menu button exists
    expect(menuButton).toBeInTheDocument();

    // Check the menu is closed
    expect(screen.queryByTestId('hamburger-raw-book')).not.toBeInTheDocument();

    // Click the Menu
    await userEvent.click(menuButton);

    // Check the menu is open
    expect(screen.queryByTestId('hamburger-raw-book')).toBeInTheDocument();

    // Close Menu
    await userEvent.click(screen.getByAltText('logo'));

    // Check Menu is closed
    expect(screen.queryByTestId('hamburger-raw-book')).not.toBeInTheDocument();
  });
});
