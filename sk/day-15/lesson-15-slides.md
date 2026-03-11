---
title: SDEV2150 - Lesson 15
subtitle: Understanding React Hooks and Custom Hooks
theme: nait-theme-test
marp: true
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

# Connecting

## Review

- Functional components are just functions
- `useState` allows them to remember values
- State updates trigger re-renders

Question: How does React remember which state belongs to which call?

---

# Why Hooks Exist

Before hooks:

- Class components managed state
- Lifecycle methods handled side effects

Hooks allow:

- State in functional components
- Logic reuse without classes
- Cleaner separation of concerns

---

# The Rules of Hooks


1. [Only call hooks at the top level](./Takeaways.md#only-call-hooks-at-the-top-level)
2. Only call hooks inside React functions

Why?

React relies on call order consistency.

---

# How React Tracks Hooks


React does not track hooks by name.

It tracks them by order.

```js
useState()
useEffect()
useState()
```

Change the order and React associates state [incorrectly](./Takeaways.md#changing-the-order-of-react-hook-calls).

---

# What Breaks Hooks

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

# Built-in vs Custom Hooks


Built-in hooks:

- `useState`
- `useEffect`
- `useRef`
- etc.

Custom hooks:

- Regular functions
- [Start with `use`](./Takeaways.md#naming-custom-hooks)
- Call other hooks
- Encapsulate reusable logic

---

# Custom Hook Pattern

Basic structure:

```js
function useSomething() {
  const [value, setValue] = useState(null);
  return [value, setValue];
}
```

A custom hook is just a ***composition*** of hooks.

---

# Example: `useToggle`


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

# Applying a Custom Hook


```js
const [isOpen, toggleOpen] = useToggle(false);
```

Component stays clean.

Logic lives elsewhere

- (even in a separate file, if your plan is for the hook to be *re-usable* across components).

---

# Demo Walkthrough...

---

# Our Project Example

We extracted:

- Selected resource state
- Session storage persistence

Into a custom hook:

```js
useSelectedResource()
```

Encapsulation improves clarity.

---

# Lazy Initialization

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

# Why This Matters

Custom hooks allow:

- Reusable logic
- Separation of concerns
- Cleaner components
- Easier testing

They do not create new state types.

---

# Common Mistakes

- Calling hooks conditionally
- Forgetting the `use` prefix
- Returning inconsistent shapes
- Mixing UI logic and reusable logic

---

# SRS Poll

Why must hooks be called unconditionally?

- A) For performance
- B) To preserve call order
- C) To avoid re-renders
- D) Because React requires it randomly

---

# Exit Ticket

Explain:

1. Why hook order matters
2. What makes a function a custom hook
3. One benefit of extracting logic into a hook

---

# Looking Ahead

Next lesson:

- Component lifecycle mental model
- Side effects
- `useEffect`

Today was about structure.
Next is about timing.
