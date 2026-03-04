---
title: SDEV2150 - Lesson 15
subtitle: Understanding React Hooks and Custom Hooks
theme: nait-theme-test
layout: nait-main-cover
---

# SDEV2150
## Lesson 15: Understanding React Hooks

How hooks work and how to build your own.

---

## Lesson Objectives

In this lesson, students will:

- Explain how React tracks hooks internally
- Describe and apply the Rules of Hooks
- Differentiate built-in hooks from custom hooks
- Build a reusable custom hook

---

## Agenda

- Review: Functional components and state
- Why hooks exist
- Rules of Hooks
- How React tracks hook calls
- Building a custom hook
- Applying a custom hook in our project
- Exit ticket

---
layout: nait-main-cover
---

# Connecting

---

## Review

- Functional components are just functions
- `useState` allows them to remember values
- State updates trigger re-renders

Question: How does React remember which state belongs to which call?

---
layout: nait-main-cover
---

# Why Hooks Exist

---

Before hooks:

- Class components managed state
- Lifecycle methods handled side effects

Hooks allow:

- State in functional components
- Logic reuse without classes
- Cleaner separation of concerns

---
layout: nait-main-cover
---

# The Rules of Hooks

---

1. Only call hooks at the top level
2. Only call hooks inside React functions

Why?

React relies on call order consistency.

---
layout: nait-main-cover
---

# How React Tracks Hooks

---

React does not track hooks by name.

It tracks them by order.

```js
useState()
useEffect()
useState()
```

Change the order and React associates state incorrectly.

---
layout: nait-main-cover
---

# What Breaks Hooks

---

Calling hooks inside:

- Conditionals
- Loops
- Nested functions

Breaks consistent call order.

Example:

```js
if (condition) {
  useState(); // ❌
}
```

---
layout: nait-main-cover
---

# Built-in vs Custom Hooks

---

Built-in hooks:

- `useState`
- `useEffect`
- `useRef`
- etc.

Custom hooks:

- Regular functions
- Start with `use`
- Call other hooks
- Encapsulate reusable logic

---
layout: nait-main-cover
---

# Custom Hook Pattern

---

Basic structure:

```js
function useSomething() {
  const [value, setValue] = useState(null);
  return [value, setValue];
}
```

A custom hook is just composition of hooks.

---
layout: nait-main-cover
---

# Example: useToggle

---

```js
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);

  function toggle() {
    setValue(prev => !prev);
  }

  return [value, toggle];
}
```

Reusable across multiple components.

---
layout: nait-main-cover
---

# Applying a Custom Hook

---

```js
const [isOpen, toggleOpen] = useToggle(false);
```

Component stays clean.

Logic lives elsewhere.

---
layout: nait-main-cover
---

# Our Project Example

---

We extracted:

- Selected resource state
- Session storage persistence

Into a custom hook:

```js
useSelectedResource()
```

Encapsulation improves clarity.

---
layout: nait-main-cover
---

# Lazy Initialization

---

```js
useState(() => {
  return computeInitialValue();
});
```

The function runs only on initial render.

Useful for:

- Reading from storage
- Expensive computations

---
layout: nait-main-cover
---

# Why This Matters

---

Custom hooks allow:

- Reusable logic
- Separation of concerns
- Cleaner components
- Easier testing

They do not create new state types.

---
layout: nait-main-cover
---

# Common Mistakes

---

- Calling hooks conditionally
- Forgetting the `use` prefix
- Returning inconsistent shapes
- Mixing UI logic and reusable logic

---
layout: nait-main-cover
---

# SRS Poll

---

Why must hooks be called unconditionally?

- A) For performance
- B) To preserve call order
- C) To avoid re-renders
- D) Because React requires it randomly

---
layout: nait-main-cover
---

# Exit Ticket

---

Explain:

1. Why hook order matters
2. What makes a function a custom hook
3. One benefit of extracting logic into a hook

---
layout: nait-main-cover
---

# Looking Ahead

---

Next lesson:

- Component lifecycle mental model
- Side effects
- `useEffect`

Today was about structure.
Next is about timing.