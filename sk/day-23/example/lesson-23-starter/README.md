# Lesson 23: Shared Client State with Context

## Install dependencies and run the dev server

Continue working in the same React + Tailwind + DaisyUI project from previous lessons.

1. Move into your project directory:
```sh
cd lesson-23
```
2. Install dependencies (if needed):
```sh
npm install
```
3. Start the dev server:
```sh
npm run dev
```
4. Open the provided URL in your browser

## Lesson focus

This lesson introduces **shared client state** using the React **Context API**.

We will:

- review how state works in React
- identify when state must be shared across components
- implement a Context provider
- consume shared state in multiple components
- understand when Context is appropriate and when it is not

## Connecting to prior lessons

In recent lessons, we explored:

- how applications render (CSR vs SSR)
- how data can come from the client or the server

This raises an important question:

> Where should application state live?

Some state belongs locally inside components.
Some state needs to be shared across the application.

## Phase 1: Review local component state

So far, most state has been local.

Example:

```jsx
const [count, setCount] = useState(0);
```

Local state works well when:

- only one component needs it
- it does not need to be shared

## The limitation

What happens when multiple components need the same state?

Example scenarios:

- theme (light/dark mode)
- authenticated user
- application preferences

Passing state through many layers leads to **prop drilling**.

## Phase 2: The problem of prop drilling

Prop drilling occurs when state is passed through components that do not use it.

```text
App -> Layout -> Sidebar -> Button
```

Even if only the Button needs the value, all intermediate components must pass it along.

This becomes difficult to manage as applications grow.

## Phase 3: Introducing Context

The React Context API allows us to:

- share state across the component tree
- avoid passing props through every level

Key idea:

> Context provides shared client state to any component that needs it

## Phase 4: Create a Context

Create a new file:

```text
src/context/ThemeContext.js
```

Add:

```jsx
import { createContext } from 'react';
export const ThemeContext = createContext();
```

## Phase 5: Create a Provider

Create a new file:

```text
src/context/ThemeProvider.jsx
```

```jsx
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

## Phase 6: Wrap the application

Open `main.jsx` and wrap your app:

```jsx
import { ThemeProvider } from './context/ThemeProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
```

Now the entire application has access to the theme context.

## Phase 7: Consume context in a component

In any component:

```jsx
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
```

Add a theme toggle button to the application nav bar in `Header.jsx`:

```jsx
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { NavLink } from 'react-router';

export default function Header({ tagline }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex flex-wrap items-end justify-between gap-2">
        {* existing nav links *}
        <button
          className="btn btn-sm cursor-pointer btn-ghost text-xs text-sky-700"
          onClick={toggleTheme}>
          Current theme: {theme}
        </button>
      </nav>
    </div>
  );
}
```

Update your `index.css` to support DaisyUI themes:

```css
@import "tailwindcss";
/* @plugin "daisyui"; */
@plugin "daisyui" {
   themes: dark --default, light --prefersdark;
 }
```

Now, update the `PageLayout.jsx` file to make use of the context value:

```jsx
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default function PageLayout({ header, children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div data-theme={theme} className="min-h-screen bg-base-200">
      <header className="border-b border-sky-600 bg-white px-6 py-4">
        {header}
      </header>

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 py-6 md:grid-cols-3">
        {children}
      </main>
    </div>
  );
}
```

Admittedly, because of the custom CSS overrides that have been applied, the dark styling may not look very good. But, this provides a place to start and demonstrates how to use a context.

> Visit the [themes page](https://daisyui.com/docs/themes/) for more information on using theems with daisyUI.

## Phase 8: Use context in multiple places

You may add the toggle to different parts of your app:

- header
- sidebar
- page component

Observe:

- all components share the same state
- updating in one place updates everywhere

## Phase 9: Apply theme to UI

You could use the theme value to conditionally style the app.

Example:

```jsx
<div className={theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
```

## Phase 10: When to use Context

Context is useful for:

- UI preferences (theme, layout)
- authenticated user info
- shared UI state

## When NOT to use Context

Avoid using Context for:

- frequently changing data
- large complex state trees
- server-fetched data

These cases are better handled with other tools.

## Key distinction

Client state:
- UI-related
- local or shared in the app

Server state:
- comes from APIs
- changes over time
- requires caching and synchronization

## Key Concepts Reinforced

- local state is limited to individual components
- `Context` provides shared client state
- `Context` helps avoid prop drilling
- `Context` should not be used for server data

## Student Exercise

1. Create a context for managing a user preference (e.g., layout, font-size, etc.).
2. Provide the context at the application level.
3. Consume the context in at least two different components.
4. Add a UI control that updates the shared state.

# Push to your GitHub workbook repo

1. Stage all changes:
```sh
git add -A
```
2. Commit:
```sh
git commit -m "Lesson 23 - working with context"
```
3. Push:
```sh
git push origin main
```