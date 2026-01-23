---
title: SDEV2150 - Lesson 05
subtitle: Fetch, Async, and Data Over Time
theme: nait-theme-test
layout: nait-main-cover
---

# SDEV2150
## Lesson 05: Asynchronous Data

Fetching resources and coordinating async state.

---

## Lesson Objectives

In this lesson, students will:

- Explain how JavaScript handles asynchronous operations
- Use `fetch` with `async` / `await` to load data
- Describe how async data flows through an application
- Compare two approaches to coordinating fetched data

___

## Agenda

In this lesson, students will:

- Review synchronous vs asynchronous execution
- Review `fetch` and async data loading
- Instructor demo: fetch in `main.js`
- Refactor: component-driven fetching
- Practice and reflection

---
layout: nait-main-cover
---

# Connecting

---

## Why async matters

- Network requests take time
- JavaScript must stay responsive
- Data often arrives *after* UI renders

Async code lets the app keep moving.

---
layout: nait-main-cover
---

# Mental Model

---

## JavaScript does not block

- Long operations move off the call stack
- Results come back later
- Code reacts when data arrives

This lesson focuses on *reacting to data over time*.

---
layout: nait-main-cover
---

# Stage 1: Fetch coordination

---

## Starting simple

- Application loads
- The app container/shell fetches resources
- Data is passed into components

Everything is explicit and easy to trace.

---
layout: nait-main-cover
---

# Fetching Data

---

## Using fetch with async/await

```js
const response = await fetch(url);
const data = await response.json();
```

- Await pauses this function
- The app keeps running
- Data arrives later

---
layout: nait-main-cover
---

# Coordinating Data

---

## App shell as coordinator

- Owns the fetch
- Handles success and failure
- Pushes data into components

Components stay focused on rendering.

---
layout: nait-main-cover
---

# Async States

---

## What we're not solving yet

- Loading indicators
- Error messages
- Retry logic

We note these now and add them later.

---
layout: nait-main-cover
---

# Stage 2: Component Fetching

---

## Making components reusable

Instead of fetching in `main.js`, we let the component load its own data.

---
layout: nait-main-cover
---

# Passing the endpoint

---

## Attribute-driven data

```html
<resource-results source="http://localhost:3000/resources"></resource-results>
```

- Attribute defines *where data comes from*
- Component decides *how to fetch and render*

---
layout: nait-main-cover
---

# Reactive Attribute Changes

---

## A new reactive pattern

- Attribute changes
- Async side effect runs
- Component updates state
- UI re-renders

This mirrors how frameworks behave.

---
layout: nait-main-cover
---

# Comparing the Approaches

---

## Fetch in main.js

- Clear and explicit
- Easy to debug
- Centralized coordination

But `main.js` can grow quickly.

---
layout: nait-main-cover
---

## Fetch in the component

- Reusable and portable
- Encapsulated async logic
- Cleaner app bootstrap

But more complex component code.

---
layout: nait-main-cover
---

# Real-World Perspective

---

## You'll see both patterns

- App shells fetching data
- Components loading their own resources
- Shared data services

The best choice depends on *context*.

---
layout: nait-main-cover
---

# Hands-On Practice

---

- Fetch resources from the backend API
- Render results when data arrives
- Keep filtering and selection working

Focus on data flow, not polish.

---
layout: nait-main-cover
---

# Exit Ticket

---

- Where does async work actually happen?
- When would you fetch in a component instead of main.js?