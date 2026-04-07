# Lesson 25: State Management Strategies

## Install dependencies and run the dev server

Continue working in the same React + Tailwind + DaisyUI NAIT resources project from previous lessons.

1. Move into your project directory:
```sh
cd lesson-24
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

This lesson consolidates everything we've learned about state and introduces a **decision framework** for choosing the right tool.

We will:

- review types of state
- map tools to state types
- analyze the NAIT resources application
- identify common mistakes
- apply a decision framework to real scenarios

## Connecting to prior lessons

So far, we have used multiple approaches to manage state:

- `useState` for local UI state
- Context for shared client state
- TanStack Query for server state
- React Router for navigation and route parameters

This leads to an important question:

> Which tool should we use for a given problem?

## Phase 1: Types of state

### Local UI state

- owned by a single component
- short-lived
- example: form inputs, toggles

### Shared client state

- shared across multiple components
- UI-related
- example: theme, selected item

### Server state

- comes from an API
- can change outside your app
- requires fetching, caching, synchronization

## Phase 2: Tool mapping

Map each state type to a tool:

- `useState` -> local UI state
- Context -> shared client state
- TanStack Query -> server state
- React Router -> navigation and route params

Key idea:

> Different problems require different tools

## Phase 3: Apply to the NAIT resources app

Let's categorize state in the existing application.

### Local state

- filters (e.g., virtualOnly toggle)

### Shared client state

- theme options (if shared across components)

### Server state

- resource list
- selected resource details

### Routing state

- current route
- resourceId parameter

## Phase 4: Where should data live?

Ask these questions:

1. Does this data come from an API?
   -> Use TanStack Query

2. Is this shared UI state?
   -> Use Context

3. Is this local to a component?
   -> Use `useState`

4. Is this part of navigation?
   -> Use React Router

## Phase 5: Common mistakes

### Mistake 1: Storing server data in Context

- duplicates data
- becomes stale
- breaks caching

### Mistake 2: Overusing Context

- unnecessary complexity
- performance issues

### Mistake 3: Duplicating server state locally

- multiple sources of truth

### Mistake 4: Mixing patterns

- loaders + queries + local state for the same data

Key idea:

> One source of truth per type of data

## Phase 6: Clean architecture for this project

Your application should now follow this structure:

- React Router
  - handles routes and params

- TanStack Query
  - handles all server data (queries and mutations)

- Context
  - handles shared UI state only

- useState
  - handles local component state

## Phase 7: Example decisions

### Example 1: Theme toggle

- shared UI state
- solution: Context

### Example 2: Resource list

- server data
- solution: TanStack Query

### Example 3: Selected resource id

- local or shared UI state
- solution: `useState` or Context

### Example 4: Form input

- local state
- solution: `useState`

## Phase 8: Guided scenarios

For each scenario, choose the correct tool.

1. A search input field
2. A logged-in user profile (UI only)
3. A list of resources from an API
4. A selected item in a list
5. Data that must stay in sync with a server

Discuss your answers with a partner.

## Key Concepts Reinforced

- State has different categories
- Each category requires a different tool
- TanStack Query owns server data
- Context owns shared UI state
- Avoid multiple sources of truth

## Student Exercise

For the NAIT resources application:

1. Identify all state used in the app.
2. Categorize each as:
   - local state
   - shared client state
   - server state
3. Confirm that each uses the correct tool.
4. Refactor any incorrect usage.
