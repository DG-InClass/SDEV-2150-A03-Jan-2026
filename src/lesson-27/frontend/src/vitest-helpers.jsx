// ~/src/vitest-helpers.jsx

import { ThemeContext } from "./context/ThemeContext";
import { render } from '@testing-library/react';

// mock theme context value
const mockThemeContextValue = {
    theme: 'light',
    toggleTheme: () => { } // a no-op function
};

export function renderWithProviders(ui, options) {
    return render(
        <ThemeContext.Provider value={mockThemeContextValue}>
            {ui}
        </ThemeContext.Provider>
        , { ...options }
    );
}