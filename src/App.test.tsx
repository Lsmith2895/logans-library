import {render, screen } from '@testing-library/react'
import App from './App';


test('renders heading', () => {
    render(<App />);
    const testHeading = screen.getByText('TAILWINDS TEST');
    expect(testHeading).toBeDefined();
  });