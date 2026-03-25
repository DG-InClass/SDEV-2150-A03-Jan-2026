---
title: SDEV2150 - Lesson 21
subtitle: Rendering Strategies (Client-Side Rendering)
layout: nait-main-cover
theme: nait-theme-test
---

# SDEV2150
## Lesson 21: Rendering Strategies

Understanding how React applications render in the browser.

---

## Lesson Objectives

In this lesson, students will:

- Explain what a rendering strategy is
- Describe how client-side rendering (CSR) works
- Trace the flow from URL to UI in a React app
- Compare CSR with traditional server rendering
- Identify advantages and tradeoffs of CSR

---

## Agenda

- What is rendering?
- Traditional vs client-side rendering
- How React renders in the browser
- Routing and data loading in CSR
- Observing CSR in DevTools
- Advantages and tradeoffs
- Preview of SSR

---
layout: nait-main-cover
---

# Connecting

---

## Where does the UI come from?

When you visit a website:

- Where does the HTML come from?
- When is it created?
- What role does JavaScript play?

---

## Traditional web applications

Typical flow:

1. Browser requests a URL
2. Server generates HTML
3. Browser renders the page
4. Navigation causes full page reloads

The server is responsible for rendering.

---

## React applications (CSR)

Typical flow:

1. Browser requests a URL
2. Server returns minimal HTML + JavaScript
3. JavaScript loads
4. React renders the UI
5. Navigation happens without full reloads

The browser is responsible for rendering.

---
layout: nait-main-cover
---

# How CSR Works

---

## Initial HTML

React apps often start with a minimal HTML shell:

```html
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```

There is no visible UI yet.

---

## Rendering flow

```
User visits page
    ↓
HTML loads (empty shell)
    ↓
JavaScript loads
    ↓
React renders UI
    ↓
Data loads
    ↓
UI updates
```

---

## Key idea

Client-Side Rendering means:

- the browser builds the UI
- JavaScript is required before the app appears

---
layout: nait-main-cover
---

# React + Routing Flow

---

## What happens after JavaScript loads?

1. React initializes
2. The router determines the route
3. Route loaders fetch data (if used)
4. Components render
5. UI becomes visible

---

## Navigation in CSR

After the first load:

- navigation is handled by the client
- no full page reload
- only data may be fetched

This creates a smoother user experience.

---

## Important distinction

Even with route loaders:

- rendering still happens in the browser
- data loading is still initiated from the client

This is still CSR.

---
layout: nait-main-cover
---

# Observing CSR

---

## DevTools: Network tab

Reload the application and observe:

- HTML document
- JavaScript files
- CSS files
- API requests

---

## What loads first?

Typical pattern:

1. HTML shell
2. JavaScript bundles
3. React starts
4. API requests
5. UI updates

---

## Navigation behavior

When clicking links:

- URL changes
- UI updates
- no full document reload

---

## Disable JavaScript

What happens if JavaScript is disabled?

- HTML still loads
- UI does not render properly

CSR depends heavily on JavaScript.

---
layout: nait-main-cover
---

# Advantages of CSR

---

## Strengths

- Smooth in-app navigation
- Rich interactivity
- Strong component model
- Can be deployed as static assets
- Excellent for dynamic applications

---
layout: nait-main-cover
---

# Tradeoffs of CSR

---

## Limitations

- Slower initial load
- Requires JavaScript to render
- Can delay meaningful content
- More work on the client device

---

## Important perspective

CSR is not better or worse.

It is one rendering strategy with specific tradeoffs.

---
layout: nait-main-cover
---

# Comparing Rendering Strategies

---

## Client-Side Rendering (CSR)

- Browser renders UI
- Minimal initial HTML
- Requires JavaScript to display content

---

## Server-Side Rendering (SSR)

- Server renders HTML
- Browser receives ready-to-display content
- JavaScript enhances interactivity after load

---

## Key difference

CSR:
- UI built in browser

SSR:
- UI built on server first

---
layout: nait-main-cover
---

# SRS Poll

---

What happens first in a CSR React app?

- A) Full HTML page is rendered by the server
- B) JavaScript runs and builds the UI
- C) Data is fetched before HTML loads
- D) React components render on the server

---
layout: nait-main-cover
---

# Exit Ticket

---

Explain:

1. What client-side rendering is
2. What the browser receives on initial load
3. One advantage of CSR
4. One tradeoff of CSR

---
