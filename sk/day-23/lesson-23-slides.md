---
title: SDEV2150 - Lesson 23
subtitle: Shared Client State with Context
layout: nait-main-cover
theme: nait-theme-test
---

# SDEV2150
## Lesson 23: Shared Client State

Using Context to share state across components.

---

## Lesson Objectives

In this lesson, students will:

- Explain the difference between local and shared state
- Identify when state needs to be shared across components
- Understand how the Context API works
- Use a provider to share state
- Consume shared state in multiple components

---

## Agenda

- Local state review
- The problem of prop drilling
- What is Context?
- Creating and providing context
- Consuming context
- When to use Context
- When not to use Context

---
layout: nait-main-cover
---

# Connecting

---

## Where should state live?

From previous lessons:

- rendering can happen on the client or server
- data can come from different sources

Now the question becomes:

*Where should application state live?*

---

## Types of state

- Local component state
- Shared client state
- Server state (coming next lesson)

---
layout: nait-main-cover
---

# Local State

---

## Example

```jsx
const [count, setCount] = useState(0);
```

---

## When local state works well

- Used by a single component
- Not needed elsewhere
- Simple and isolated

---

## Limitation

What if multiple components need the same state?

---
layout: nait-main-cover
---

# Prop Drilling

---

## The problem

Passing state through components that don’t use it:

```
App -> Layout -> Sidebar -> Button
```

---

## Issues

- Hard to maintain
- Tight coupling between components
- Scales poorly

---
layout: nait-main-cover
---

# Introducing Context

---

## What is Context?

Context allows us to:

- share state across the component tree
- avoid passing props through every level

---

## Key idea

Context provides shared client state to any component that needs it.

---
layout: nait-main-cover
---

# Creating Context

---

## Step 1: Create a context

```jsx
import { createContext } from 'react';

export const ThemeContext = createContext();
```

---

## Step 2: Create a provider

```jsx
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

---
layout: nait-main-cover
---

# Providing Context

---

## Wrap the application

```jsx
<ThemeProvider>
  <App />
</ThemeProvider>
```

---

## Result

All components inside can access the shared state.

---
layout: nait-main-cover
---

# Consuming Context

---

## Using useContext

```jsx
const { theme, toggleTheme } = useContext(ThemeContext);
```

---

## Example

```jsx
<button onClick={toggleTheme}>
  Current theme: {theme}
</button>
```

---
layout: nait-main-cover
---

# Shared State in Action

---

## Key behaviour

- Multiple components use the same state
- Updating in one place updates everywhere

---

## Example locations

- Header
- Sidebar
- Page content

---
layout: nait-main-cover
---

# When to Use Context

---

## Good use cases

- Theme / UI preferences
- Authenticated user
- Shared UI state

---
layout: nait-main-cover
---

# When NOT to Use Context

---

## Avoid Context for

- Frequently changing data
- Complex state logic
- Server-fetched data

---

## Why?

Context does not handle:

- caching
- async state
- background updates

---
layout: nait-main-cover
---

# Client vs Server State

---

## Client state

- UI-related
- local or shared

---

## Server state

- comes from APIs
- changes over time
- needs synchronization

---

## Key idea

    Different types of state require different tools.

---
layout: nait-main-cover
---

# SRS Poll

---

When should you use Context?

- A) For API data fetching
- B) For shared UI state
- C) For caching server data
- D) For all application state

---
layout: nait-main-cover
---

# Exit Ticket

---

Explain:

1. What Context is
2. When to use Context
3. One limitation of Context
4. How Context differs from local state
