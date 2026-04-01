# Lesson 23 Homework

## Continuing the Users and Posts Project

In this homework, you will continue building your existing **Users and Posts** React application.

Up to this point, your application should already:

- Use React Router data mode (router, loaders, actions)
- Display users and posts on the main page
- Include a user management page for creating and editing users
- Use dynamic route parameters for the selected user

In Lesson 23, we introduced **shared client state using the Context API**.

This homework asks you to refactor part of your application to use Context for **shared UI state**.

## Goal

Add shared client state to your application using **React Context**.

Your application must:

- create a Context for shared UI state
- provide that state at the application level
- consume the state in multiple components
- update the UI based on shared state

This homework focuses on:

- `createContext`
- `useContext`
- provider patterns
- shared client state vs local state

## Task

### Part 1: Create a Selected User Context

Currently, your application likely tracks the selected user using local state or route-based logic.

Create a Context to manage the **currently selected user**.

### Requirements

1. Create two new files:

```text
src/context/SelectedUserContext.jsx
src/context/SelectedUserProvider.jsx
```

2. In `SelectedUserContext.jsx`, create and export the context only.

3. In `SelectedUserProvider.jsx`, create and export the provider component.

4. The provider should manage:

- `selectedUser`
- `setSelectedUser`

### Part 2: Provide Context at the Application Level

Wrap your application with the new provider.

### Requirements

1. Update `main.jsx`
2. Wrap your router with the provider

Example:

```jsx
import { SelectedUserProvider } from './context/SelectedUserProvider';

<SelectedUserProvider>
  <RouterProvider router={router} />
</SelectedUserProvider>
```

### Part 3: Update the Users List to Use Context

Refactor your users list so that selecting a user updates the shared state.

### Requirements

1. When a user is clicked:
   - update `selectedUser` in context
2. Remove any local state previously used for tracking the selected user

### Part 4: Highlight the Selected User

Use the shared context to visually indicate the selected user.

### Requirements

1. Read `selectedUser` from context
2. Apply conditional styling to the active user

Example ideas:

- background color
- border highlight
- bold text

### Part 5: Use Context in Multiple Components

Demonstrate that the state is shared across the app.

### Requirements

Use `selectedUser` in at least two different components, such as:

- Users list
- Posts display
- Header or sidebar

Example:

- display the selected user's name in a header
- filter posts based on the selected user

### Part 6: Add a Reset Control

Add a way to clear the selected user.

### Requirements

1. Add a button such as:

```text
Clear Selection
```

2. Clicking it should:

- set `selectedUser` to `null`
- update all dependent UI

### Part 7: Reflect on State Ownership

Review your application and ensure:

- shared UI state is managed in Context
- local state is still used where appropriate

Do not move everything into Context.

## Constraints

Do **not**:

- replace route-based data loading with Context
- use Context for server-fetched data (users/posts)
- introduce external state libraries
- break existing functionality

This homework is about **shared client state only**.

## UI Expectations

Your UI should now:

- allow selecting a user
- highlight the selected user
- share that selection across multiple components
- update dynamically when the selection changes

## Submission Checklist

Before submitting, confirm that:

- A Context and Provider are implemented
- The provider wraps the application
- At least two components consume the context
- The selected user updates correctly
- The UI reflects the selected state
- Existing functionality still works

Commit and push your updated workbook repository.

```sh
git add -A
git commit -m "Lesson 23 homework"
git push origin main
```

## Reflection

In a short paragraph, answer:

- What problem does Context solve?
- Why is Context better than prop drilling in this case?
- Why should Context not be used for server data?

Be prepared to discuss your answer in the next class.