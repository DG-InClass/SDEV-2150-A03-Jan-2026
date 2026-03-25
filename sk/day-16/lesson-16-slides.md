---
title: SDEV2150 - Lesson 16
subtitle: Component Lifecycle and useEffect
theme: default
marp: true
layout: nait-main-cover
---

# SDEV2150
## Lesson 16: Component Lifecycle in React

Understanding side effects and timing in functional components.

---

## Lesson Objectives

In this lesson, students will:

- Explain the lifecycle of a functional component
- Use `useEffect` to manage side effects
- Control effect execution using dependency arrays
- Implement cleanup logic correctly

---

## Agenda

- Review: State-driven rendering
- Lifecycle mental model
- What is a side effect?
- `useEffect` syntax and patterns
- Cleanup functions
- Common mistakes
- Exit ticket

---

# Connecting

## Review

- Components re-render when state changes
- Rendering should be pure
- Custom hooks encapsulate logic

Question:

What kinds of tasks happen outside of rendering?

---

# Lifecycle Mental Model

React function components follow a simple loop:

1. **Render** – React calls your function
2. **Commit** – React updates the DOM
3. **Effect** – React runs `useEffect`

Rendering computes UI.
Effects synchronize with the outside world.

---

# Mount, Update, Unmount

- **Mount** – Component appears in the DOM
- **Update** – State or props change
- **Unmount** – Component is removed

Effects allow us to respond to each phase.

---

# What Is a Side Effect?

A side effect is any code that:

- Reaches outside the component
- Performs asynchronous work
- Mutates something external

Examples:

- Fetching data
- Setting timers
- Subscribing to events
- Writing to storage

---

# Introducing useEffect

Basic structure:

```js
useEffect(() => {
  // side effect logic
}, [dependencies]);
```

- Runs after rendering
- Dependency array controls when it re-runs

---

# Dependency Array Patterns

Run once (on mount):

```js
useEffect(() => {
  // run once
}, []);
```

Run when value changes:

```js
useEffect(() => {
  // run when count changes
}, [count]);
```

Run every render:

```js
useEffect(() => {
  // no dependency array
});
```

---

# Demo Walkthrough...

*Instructor start [**here**](https://dg-inclass.github.io/sdev-2150/lessons/16/#phase-5-create-useresources)*

---

# Example: Timer Component

```js
useEffect(() => {
  const id = setInterval(() => {
    setSeconds(prev => prev + 1);
  }, 1000);

  return () => {
    clearInterval(id);
  };
}, []);
```

Setup on mount.
Cleanup on unmount.

---

# Cleanup Functions

If your effect:

- Creates a subscription
- Starts a timer
- Registers an event listener

You **must** clean it up.

```js
return () => {
  // cleanup logic
};
```

---

# Fetching Data with useEffect

Fetching is a side effect because:

- It happens over time
- It updates state when complete

Pattern:

```js
useEffect(() => {
  async function fetchData() {
    const res = await fetch('/api');
    const data = await res.json();
    setData(data);
  }

  fetchData();
}, []);
```

---

# Why Effects Must Be Predictable

Common mistakes:

- Missing dependencies
- Adding unnecessary dependencies
- Causing infinite loops

Example infinite loop:

```js
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

---

# Stale Data Problem

If dependencies are incorrect:

- Effects may use outdated values
- UI can become inconsistent

Always include every external value used inside the effect.

---

# Strict Mode Note

In development, React may run effects twice.

This is intentional.

It helps detect unsafe side effects.

Do not remove Strict Mode to “fix” it.

---

# SRS Poll


When does `useEffect` run if the dependency array is empty?

- A) On every render
- B) Only on mount
- C) Only on unmount
- D) Never

---

# Exit Ticket

Write a short code snippet that:

- Fetches data on mount
- Cleans up a timer on unmount

Explain why cleanup is necessary.

---

# Looking Ahead


Next:

- Refining data flows
- Managing complex side effects
- Preparing for scalable data patterns

Understanding timing makes React predictable.
