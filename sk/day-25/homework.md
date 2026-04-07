# Lesson 25 Homework

## Continuing the Users and Posts Project

In this homework, you will continue building your existing **Users and Posts** React application.

Up to this point, your application should already:

- Use React Router for routing and navigation
- Use Context for shared client state where appropriate
- Use TanStack Query for server data and mutations
- Display users and posts from an API

In Lesson 25, we consolidated the different types of state used in an application and introduced a **decision framework** for choosing the correct tool.

This homework asks you to audit your application's state and refactor any incorrect implementations.

## Goal

Apply a **state management strategy audit** to your Users and Posts application.

You will:

- identify all major state used in the app
- categorize each type of state
- confirm that the correct tool is being used
- refactor any incorrect or unnecessary state management patterns

This homework focuses on:

- local UI state
- shared client state
- server state
- routing state
- choosing the correct tool for each

## Task

### Part 1: Create a State Analysis File

Create a new file in the root of your project:

```text
STATE_ANALYSIS.md
```

In this file, document the major pieces of state currently used in your Users and Posts app.

Examples may include:

- selected user id
- users list
- posts list
- form input values
- route parameters
- loading or error state

### Part 2: Categorize Each Piece of State

For each item in your analysis file, identify the correct category:

- Local UI state
- Shared client state
- Server state
- Routing state

A simple table format is recommended.

Example:

```md
| State | Category | Current Tool |
|------|----------|--------------|
| selected user id | Shared client state | Context |
| users list | Server state | TanStack Query |
| posts list | Server state | TanStack Query |
| userId param | Routing state | React Router |
```

### Part 3: Validate the Current Implementation

Review your application and determine whether each piece of state is managed with the correct tool.

Expected mappings:

- Local UI state -> `useState`
- Shared client state -> Context or local state when appropriate
- Server state -> TanStack Query
- Routing state -> React Router

### Part 4: Refactor Incorrect Usage

Identify and fix any incorrect or unnecessary implementations.

Examples of problems to look for:

- server data stored in Context
- server data duplicated in local state
- multiple sources of truth for the same data
- shared UI state being lifted unnecessarily when Context would be clearer
- route-related state being duplicated outside React Router without a clear reason

Refactor the application so that each type of state is managed in the most appropriate place.

### Part 5: Explain Three State Decisions

In `STATE_ANALYSIS.md`, choose at least **three** state examples and explain:

- what category the state belongs to
- which tool manages it
- why that tool is appropriate

Example:

```md
### Users List
- Category: Server state
- Tool: TanStack Query
- Reason: The data comes from an API, can change outside the app, and benefits from caching and invalidation.
```

### Part 6: Verify Application Behavior

After your audit and refactor, test the application and confirm that:

- user selection still works correctly
- users still load correctly
- posts still load and update correctly
- create/update flows still work correctly, if implemented
- no duplicated or stale state remains in the UI

## Constraints

Do **not**:

- reintroduce `useEffect` for server data fetching
- store server data in Context
- use multiple tools to manage the same data without a clear reason
- break existing application behavior

This homework is about **choosing the correct state management strategy**.

## UI Expectations

Your UI should continue to function correctly, while your internal architecture becomes clearer and more consistent.

You are not required to add new features. The focus is on **correct classification and management of state**.

## Submission Checklist

Before submitting, confirm that:

- `STATE_ANALYSIS.md` is included
- all major pieces of state have been categorized
- at least three state decisions are explained
- incorrect state management patterns have been refactored
- the application still works as expected

Commit and push your updated workbook repository.

```sh
git add -A
git commit -m "Lesson 25 homework"
git push origin main
```

## Reflection

In a short paragraph, answer:

- How do you decide which state management tool to use?
- What was the most common mistake you found in your application?
- How did your application improve after the refactor?
