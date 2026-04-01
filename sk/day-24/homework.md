# Lesson 24 Homework

## Continuing the Users and Posts Project

In this homework, you will continue building your existing **Users and Posts** React application.

Up to this point, your application should already:

- Use React Router for routing and navigation
- Display users and posts on the main page
- Include a user management page for creating and editing users
- Use Context for shared client state (selected user)

In Lesson 24, we introduced **server state management using TanStack Query**.

This homework asks you to refactor your application so that **all server data is managed using TanStack Query instead of manual fetching or loaders**.

## Goal

Replace your existing data-fetching approach with **TanStack Query**.

Your application must:

- fetch server data using `useQuery`
- update server data using `useMutation`
- handle loading and error states
- properly invalidate cached data after mutations

This homework focuses on:

- `useQuery`
- `useMutation`
- query keys
- cache invalidation
- server state vs client state

## Task

### Part 1: Install and Configure TanStack Query

### Requirements

1. Install TanStack Query:

```sh
npm install @tanstack/react-query
```

2. Create a `QueryClient` in `main.jsx`
3. Wrap your application with `QueryClientProvider`

### Part 2: Replace Users Fetching with useQuery

Refactor your Users list to use TanStack Query.

### Requirements

1. Remove any:
   - `useEffect` data fetching
   - loader-based fetching for users

2. Implement:

```jsx
useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers
});
```

3. Handle:
   - loading state
   - error state

### Part 3: Replace Posts Fetching with a Dynamic Query

Fetch posts based on the selected user.

### Requirements

1. Use a query key that includes the selected user id:

```jsx
['posts', selectedUserId]
```

2. Only run the query when a user is selected:

```jsx
enabled: Boolean(selectedUserId)
```

3. Remove any previous post-fetching logic

### Part 4: Replace Form Submission with useMutation

Refactor your create/update user functionality.

### Requirements

1. Replace React Router actions or manual fetch calls with `useMutation`

2. Implement:

```jsx
const mutation = useMutation({
  mutationFn: saveUser
});
```

3. On success:

- invalidate the users query
- navigate to the appropriate page if needed

### Part 5: Invalidate Queries After Mutation

Ensure your UI stays in sync after changes.

### Requirements

1. Use `queryClient.invalidateQueries`

Example:

```jsx
queryClient.invalidateQueries(['users']);
```

2. Verify that:

- the users list updates after creating or editing a user
- the UI reflects the latest data

### Part 6: Remove Old Data Fetching Logic

Clean up your application.

### Requirements

Remove:

- `useEffect` data fetching
- loader-based data fetching for users/posts
- duplicate state used to store server data

Your application should rely entirely on TanStack Query for server data.

### Part 7: Verify Application Behaviour

Ensure the application behaves correctly.

### Requirements

- Users load correctly
- Posts update when a different user is selected
- Creating or editing a user updates the UI
- No duplicate requests are made unnecessarily

## Constraints

Do **not**:

- use Context for server data
- keep old fetching logic alongside TanStack Query
- introduce additional libraries

This homework is about **server state management with TanStack Query**.

## UI Expectations

Your UI should now:

- load users using TanStack Query
- load posts dynamically based on selected user
- update immediately after mutations
- display loading and error states

## Submission Checklist

Before submitting, confirm that:

- `useQuery` is used for all server data
- `useMutation` is used for create/update operations
- query keys are used correctly
- cache invalidation works
- loading and error states are implemented
- no legacy fetching logic remains

Commit and push your updated workbook repository.

```sh
git add -A
git commit -m "Lesson 24 homework"
git push origin main
```

## Reflection

In a short paragraph, answer:

- What problem does TanStack Query solve?
- How does it differ from useEffect-based fetching?
- Why should server state not be stored in Context?

Be prepared to discuss your answer in the next class.