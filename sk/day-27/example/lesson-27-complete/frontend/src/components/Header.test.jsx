import { MemoryRouter } from 'react-router';
import { test, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../vitest-helpers';
import Header from './Header';

test('renders the application title', () => {
  renderWithProviders(
    <MemoryRouter>
      <Header />
    </MemoryRouter>);

  expect(screen.getByText(/NAIT Resource Directory/i)).toBeTruthy();
});

test('calls handler when button is clicked', async () => {
  let clicked = false;

  renderWithProviders(<button onClick={() => (clicked = true)}>Click</button>);

  await screen.getByText('Click').click();

  expect(clicked).toBe(true);
});