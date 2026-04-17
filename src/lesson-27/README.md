# Lesson 27: Unit Testing with Vitest

## Install dependencies and run the dev server

Continue working in the same NAIT resources project from previous lessons.

1. Move into your project frontend directory:
```sh
cd lesson-25/frontend
```
2. Install dependencies (if needed):
```sh
npm install
```
3. Install testing dependencies:
```sh
npm install -D vitest @vitest/browser-playwright playwright @testing-library/react
```

4. Perform initial testing browser setup:
```sh
npx playwright install chromium
```

5. Start the dev server:
```sh
npm run dev
```

## Lesson focus

This lesson introduces **unit testing** using Vitest and React Testing Library.

We will:

- understand why testing is important
- set up a testing environment
- write our first test
- test component rendering and behaviour
- apply testing to existing components

## Connecting to prior lessons

So far, we have focused on building features.

Now we ask:

> How do we verify that our application works correctly?

## Phase 1: Why test?

Testing helps us:

- prevent bugs
- verify behaviour
- refactor safely

Key idea:

> Tests give us confidence when changing code

## Phase 2: Testing philosophy

We focus on:

- what the user sees
- what the user does

We avoid:

- testing implementation details
- testing internal state directly

Key idea:

> Test behaviour, not implementation

## Phase 3: Configure Vitest

Add a test script to your `package.json`:

```json
"scripts": {
  "test": "vitest"
}
```

Create a config file `vitest.config.js` if needed:

```js
import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
    },
  },
});
```

## Phase 4: First test

Create a new test file:

```text
src/components/Header.test.jsx
```

Add:

```js
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders the application title', () => {
  render(<Header />);

  expect(screen.getByText(/NAIT Resource Directory/i)).toBeTruthy();
});
```

Run tests:

```sh
npm run test
```

You will receive an error that React is not defined.

> Remember, React is not a native browser object, we need to ensure that the environment is configured to make use of it.

To enable React support in our tests, install the vite React plugin:

```sh
npm i -D @vitejs/plugin-react
```

Then, update your vitest config file:

```js
import react from '@vitejs/plugin-react'; // import the package
import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  plugins: [react()], // configure the plugin
  test: {
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
    },
  },
});
```

Run the test again:

```sh
npm test
```

Close, but no we are running into another issue, reliance on higher dependencies. In this case, because the Header requires a `ThemeContext`, the test fails becasue we are rendering the Header without first wrapping it in the necessary `Provider`. To fix this, and keep our tests localized to this unit only, we need to include a ThemeProvider for the test.

The fix here is to create our own custom render function, one that will ensure any external requirements the component we're testing are present.

In the src/ directory, create a `vitest-helpers.jsx` file:

```js
import { ThemeContext } from './context/ThemeContext';
import { render } from '@testing-library/react';

// mock theme context value
const mockThemeContextValue = {
  theme: 'light',
  toggleTheme: () => { },
};

export function renderWithProviders(ui, options) {
  return render(
    <ThemeContext.Provider value={mockThemeContextValue}>
      {ui}
    </ThemeContext.Provider>, { ...options }
  );
}

```

Now, we have a place to add any additional environment setup required to test our components.

Back in Header.test.jsx, let's put the new render function to work:

```jsx
import { test, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../vitest-helpers'; // import the new render function
import Header from './Header';

test('renders the application title', () => {
  renderWithProviders(<Header />); // using our new render function

  expect(screen.getByText(/NAIT Resource Directory/i)).toBeTruthy();
});
```
At this point, we are still going to run into one issue. Any idea why? Take a look in the Header.jsx file. What else do you see that could cause problems? If you run the test script, you will get a hint: `Error: useLocation() may be used only in the context of a <Router> component.`. Yup, the React Router dependency also needs to be accounted for. In this case, we can create a temporary MemoryRouter to quickly satisfy the testing environent requirements. Update `Header.test.jsx` once again:

```jsx
import { MemoryRouter } from 'react-router'; // import the package
import { test, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../vitest-helpers';
import Header from './Header';

test('renders the application title', () => {
  // wrap the Header in the necessary router
  renderWithProviders(
    <MemoryRouter>
      <Header />
    </MemoryRouter>);

  expect(screen.getByText(/NAIT Resource Directory/i)).toBeTruthy();
});
```

The test should now run successfully.

> Note: for testing components that require route params, you can modify the [MemoryRouter](https://reactrouter.com/api/declarative-routers/MemoryRouter)'s `initialEntries` prop and use a `<Route>` to work params into your tests.

## Phase 5: Testing behaviour

You can make use of the `screen` object to [query for elements](https://testing-library.com/docs/queries/about) and, where supported, use HTMLElement functions to trigger events (e.g., click()), or you can [fire events](https://testing-library.com/docs/dom-testing-library/api-events) using TestingLibrary:

```js
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

test('calls handler when button is clicked', async () => {
  let clicked = false;

  render(<button onClick={() => (clicked = true)}>Click</button>);

  await screen.getByText('Click').click(); // HTMLElement.click()

  expect(clicked).toBe(true);
});
```

## Phase 6: Testing props

Any component that requires props can easily be tested as well. Create a `src/components/Details.test.jsx` test file for the `Details` component:

```js
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Details from './Details';

test('displays resource details', () => {
  const resource = {
    title: 'Math Help Centre',
    category: 'Academic Support'
  };

  render(<Details resource={resource} />);

  expect(screen.getByText('Math Help Centre')).toBeTruthy();
});
```

> Note: Since the Details component doesn't rely on any providers, we can use the default render function here.

## Phase 7: Conditional rendering

Test conditional rendering by putting your component into an expected state and then run your assertions:

```js
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Details from './Details';

...

test('shows placeholder when no resource is selected', () => {
  render(<Details resource={null} />); // no resource should render a message

  expect(screen.getByText(/select a resource/i)).toBeTruthy();
});
```

## Phase 8: Key concepts

- Tests should be simple and focused
- Each test verifies one behaviour
- Use queries that match how users interact

## Student Exercise

1. Create a new test file for the Results component.
   - Verify that a list of resources renders correctly when provided as props.
2. Write a test that verifies clicking a resource in the Results list triggers the expected selection behaviour.
   - You may need to pass a mock handler function and assert that it was called.
3. Add a test for a component that includes conditional UI (e.g., empty state, loading state, or fallback message).
   - Verify that the correct message is displayed when no data is available.
4. Create a test for a form component (e.g., ResourceForm).
   - Verify that input values can be entered.
   - Verify that submitting the form triggers the expected handler.
5. Refactor one of your tests to improve readability.
   - Use clearer test names.
   - Ensure each test focuses on a single behaviour.

# Push to your GitHub workbook repo

```sh
git add -A
git commit -m "Lesson 27 - unit testing walkthrough"
git push origin main
```
