# Lesson 27 Homework

## Continuing the Users and Posts Project

In this homework, you will extend your existing **Users and Posts** React application by adding **unit tests** using Vitest (browser mode) and React Testing Library.

Up to this point, your application should already:

- Use React Router for navigation
- Use Context where appropriate for shared client state
- Use TanStack Query for server data
- Display users and posts from an API

This homework focuses on **writing tests for real components in your app**.

## Goal

Write meaningful unit tests that verify **what the user sees and does**.

You will:

- render components in tests
- query the UI
- simulate user interaction
- verify expected behaviour

## Task

### Part 1: Setup Verification

Ensure your project is configured for testing:

- Vitest installed
- Browser mode configured with Playwright
- React Testing Library installed

Run:

```sh
npm run test
```

### Part 2: Test the Users List

Create a test file for your Users list component.

### Requirements

- Render the component with a mock list of users
- Verify that each user is displayed

Example checks:

- user names appear
- correct number of users rendered

### Part 3: Test User Selection

Write a test for selecting a user.

### Requirements

- Provide a mock handler function (e.g., `onSelectUser`)
- Simulate clicking a user
- Verify that the handler is called with the correct value

### Part 4: Test Posts Rendering

Create a test for the Posts component.

### Requirements

- Render with a mock list of posts
- Verify that post titles appear

### Part 5: Test Conditional UI

Add a test for a conditional state.

### Requirements

- When no user is selected → show placeholder message
- When a user is selected → show posts

Verify that the correct UI appears in each case.

### Part 6: Test a Form Component

Create a test for your create/edit user form.

### Requirements

- Enter values into input fields
- Submit the form
- Verify that the submit handler is called

### Part 7: Improve Test Quality

Choose one test and improve it:

- use a clearer test name
- ensure it tests only one behaviour
- improve readability

## Constraints

Do **not**:

- test internal state directly
- rely on implementation details
- copy tests directly from the walkthrough without adapting them

Focus on **user behaviour**.

## UI Expectations

Your application UI should remain unchanged.

This homework focuses on adding tests, not modifying features.

## Submission Checklist

Before submitting, confirm that:

- multiple components have tests
- interaction is tested (clicks, form submission)
- conditional rendering is tested
- tests are readable and focused
- all tests pass

Commit and push your work:

```sh
git add -A
git commit -m "Lesson 27 homework"
git push origin main
```

## Reflection

In a short paragraph, answer:

- What does it mean to test behaviour instead of implementation?
- Which test was the most challenging to write?
- How do tests improve your confidence in your code?
