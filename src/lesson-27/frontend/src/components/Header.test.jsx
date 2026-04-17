// ~/src/components/Header.test.jsx

import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router'; // Replacement for react-router dependencies in <Header />
import { renderWithProviders } from '../vitest-helpers'; // Supplies a "mock" theme provider

test('Header renders the application title', () => {
    // Arrange - Whatever "setup" we need for our test
    renderWithProviders(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );
    
    // Act - "run"/"use" the part/thing we're testing
    const actual = screen.getByText(/NAIT Resource Directory/i);
    //                              \__ regular expression __/
    //                              "NAIT Resource Directory"

    // Assert - Check to see if it works as expected
    expect(actual).toBeInTheDocument();
});
