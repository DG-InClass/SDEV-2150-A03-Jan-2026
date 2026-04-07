import { ThemeContext } from './context/ThemeContext';
import { render } from '@testing-library/react';

const mockThemeContextValue = {
  theme: 'light',
  toggleTheme: () => { },
};

export function renderWithProviders(ui, options) {

  // Also wrap with a MemoryRouter if your components use React Router
  return render(
    <ThemeContext.Provider value={mockThemeContextValue}>
      {ui}
    </ThemeContext.Provider>, { ...options }
  );
}
