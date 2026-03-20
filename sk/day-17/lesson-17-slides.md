---
title: SDEV2150 - Lesson 17
subtitle: Static Routing with React Router 7
theme: nait-theme-test
layout: nait-main-cover
---

# SDEV2150
## Lesson 17: Static Routing with React Router 7

Organizing a React application into multiple pages.

---

## Lesson Objectives

In this lesson, students will:

- Configure React Router 7 in a React application
- Define static routes using `BrowserRouter`, `Routes`, and `Route`
- Use `Link` and `NavLink` for navigation
- Implement a layout route using `Outlet`

---

## Agenda

- What routing solves
- Single page applications vs multi page apps
- React Router basics
- Static route configuration
- Layout routes and `Outlet`
- Adding navigation with `NavLink`
- Applying routing to our project

---
layout: nait-main-cover
---

# Connecting

---

## How traditional web navigation works

In a traditional web application:

1. User clicks a link
2. Browser requests a new HTML page
3. Server returns a full document
4. The entire page reloads

This is known as **multi page navigation**.

---

## How React applications navigate

In a React application:

1. The application loads once
2. JavaScript controls what is rendered
3. Navigation changes the visible component
4. The page does not fully reload

This is **client side routing**.

---

## Why routing matters

Without routing:

- Applications become one very large component
- Navigation logic becomes messy
- Features are difficult to separate

Routing helps us:

- Organize screens
- Manage navigation
- Structure applications

---
layout: nait-main-cover
---

# React Router Basics

---

## Installing React Router

```bash
npm install react-router
```

React Router provides tools that allow React apps to behave like multi page applications.

---

## Core Router Components

React Router commonly uses three components:

- `BrowserRouter`
- `Routes`
- `Route`

Together they define the **route structure** of the application.

---

## BrowserRouter

`BrowserRouter` connects React Router to the browser's navigation system.

It listens for:

- URL changes
- back and forward navigation

and updates the React application accordingly.

---

## Routes and Route

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

Each `Route` maps a **URL path** to a **React component**.

---

## Static Routes

Static routes have fixed paths.

Examples:

- `/`
- `/admin`
- `/contact`

No dynamic parameters yet.

---
layout: nait-main-cover
---

# Layout Routes

---

## Shared UI across pages

Most applications share parts of the interface:

- header
- navigation
- layout

We do not want to duplicate that code in every page.

---

## Layout Component Pattern

We place shared UI in a layout component.

Example responsibilities:

- page header
- navigation
- layout structure

Page specific content appears inside the layout.

---

## The Outlet Component

`Outlet` is where nested routes render.

Example:

```jsx
<PageLayout>
  <Outlet />
</PageLayout>
```

The router decides which component appears in the `Outlet`.

---

## Layout Route Structure

```jsx
<Route path="/" element={<App />}>
  <Route index element={<Home />} />
  <Route path="admin" element={<Admin />} />
</Route>
```

`App` acts as the **router layout**.

---

## Nested Route Rendering

The route structure forms a component tree.

```
URL: /admin

BrowserRouter
      │
      ▼
    Routes
      │
      ▼
     App
      │
      ▼
   PageLayout
      │
      ▼
    Outlet
      │
      ▼
   AdminPage
```

Steps:

1. Router matches the URL (`/admin`)
2. The layout route (`App`) renders
3. Shared UI renders (header, layout, navigation)
4. The matching page component renders inside `Outlet`

This allows multiple pages to share the same layout while changing only the content area.

---
layout: nait-main-cover
---

# Navigation

---

## Why not use normal anchor tags?

Using `<a>` causes:

- full page reload
- loss of React state

React Router provides navigation components instead.

---

## The Link Component

`Link` behaves like an anchor tag but keeps navigation inside the React app.

Example:

```jsx
<Link to="/admin">Admin</Link>
```

---

## The NavLink Component

`NavLink` is similar to `Link`, but it knows when the current route is active.

This allows us to change styling for the active page.

---

## Example NavLink

```jsx
<NavLink
  to="/admin"
  className={({ isActive }) =>
    isActive ? "btn btn-primary" : "btn btn-ghost"
  }
>
  Admin
</NavLink>
```

`isActive` tells us if the link matches the current route.

---
layout: nait-main-cover
---

# SRS Poll

---

Which component determines where nested route content renders?

- A) Route
- B) BrowserRouter
- C) Outlet
- D) NavLink

---
layout: nait-main-cover
---

# Exit Ticket

---

Explain:

1. What problem routing solves in a React app
2. What `Outlet` does in a layout route
3. The difference between `Link` and `NavLink`
