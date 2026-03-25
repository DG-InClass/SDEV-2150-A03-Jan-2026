---
title: SDEV2150 - Lesson 19
subtitle: React Router Data Mode
layout: nait-main-cover
theme: nait-theme-test
---

# SDEV2150
## Lesson 19: React Router Data Mode

Moving data loading and mutations into the router.

---

## Lesson Objectives

In this lesson, students will:

- Understand the purpose of React Router data mode
- Configure a router using `createBrowserRouter`
- Load route data using **loader functions**
- Access loaded data using `useLoaderData()`
- Handle form submissions using **route actions**
- Use React Router's `<Form>` component

---

## Agenda

- Limitations of component‑based routing
- What React Router data mode solves
- Router configuration using a router object
- Route loaders
- Route actions
- Router forms
- Application architecture changes

---
layout: nait-main-cover
---

# Connecting

---

## How we previously loaded data

In earlier lessons, components typically handled their own data:

1. Component renders
2. `useEffect` runs
3. `fetch()` loads data
4. State updates
5. Component re-renders

This approach works, but data logic becomes scattered across components.

---

## Problems with component‑based data loading

Common issues include:

- Duplicate fetch logic
- Data loading tightly coupled to UI
- Harder to coordinate data across routes
- Extra loading states scattered throughout components

As applications grow, this pattern becomes difficult to maintain.

---

## The idea behind data mode

React Router introduces **data mode** to move data work into the router.

Routes can now define:

- what component renders
- how data loads
- how mutations occur

The router becomes responsible for **navigation and data flow**.

---
layout: nait-main-cover
---

# Router Architecture

---

## Component routing

Earlier we configured routes using JSX:

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</BrowserRouter>
```

This structure focuses only on **component rendering**.

---

## Data mode routing

Data mode uses a **router object** instead:

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
]);
```

The router object allows routes to define:

- components
- loaders
- actions

---

## RouterProvider

The application renders the router using:

```jsx
<RouterProvider router={router} />
```

The router now controls:

- navigation
- data loading
- form submissions

---
layout: nait-main-cover
---

# Route Loaders

---

## What is a loader?

A **loader** is a function that fetches data for a route.

Loaders run **before the route renders**.

This means the component receives data immediately.

---

## Example loader

```jsx
export async function loader() {
  const res = await fetch("/api/resources");
  return res.json();
}
```

The loader prepares the data for the route.

---

## Accessing loader data

Components read loader data using:

```jsx
const data = useLoaderData();
```

The router automatically provides the result of the loader.

---

## Loader lifecycle

```
User navigates to route
        │
        ▼
Router runs loader
        │
        ▼
Data resolves
        │
        ▼
Component renders
```

The component receives the data immediately when it renders.

---
layout: nait-main-cover
---

# Route Actions

---

## What is an action?

An **action** handles data mutations for a route.

Examples include:

- creating data
- updating data
- deleting data

Actions are triggered by form submissions.

---

## Example action

```jsx
export async function action({ request }) {
  const formData = await request.formData();

  await fetch("/api/resources", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData))
  });
}
```

The router runs the action when the form is submitted.

---

## Router Forms

React Router provides a `<Form>` component.

```jsx
<Form method="post">
  <input name="title" />
  <button type="submit">Save</button>
</Form>
```

Submitting the form automatically calls the route's action.

---

## Why router forms are useful

Router forms:

- simplify form submission logic
- connect directly to route actions
- remove manual `fetch()` calls from components

This keeps components focused on rendering.

---
layout: nait-main-cover
---

# Architectural Impact

---

## Before data mode

Components handled:

- rendering
- fetching data
- form submission
- mutation logic

This created large, complex components.

---

## After data mode

Responsibilities become clearer.

Router:

- navigation
- data loading
- data mutation

Components:

- display UI
- render data
- provide user interaction

---

## Benefits of data mode

Advantages include:

- centralized data loading
- clearer application structure
- easier coordination between routes
- simpler components

This pattern is common in production React applications.

---
layout: nait-main-cover
---

# SRS Poll

---

Which feature allows a route to fetch data before rendering?

- A) `useEffect`
- B) `loader`
- C) `action`
- D) `RouterProvider`

---
layout: nait-main-cover
---

# Exit Ticket

---

Explain:

1. What problem React Router data mode solves
2. What a **loader** does
3. What an **action** does
4. Why `<Form>` is useful in data mode
