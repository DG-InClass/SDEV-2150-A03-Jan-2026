---
title: SDEV2150 - Lesson 22
subtitle: Server-Side Rendering (SSR)
layout: nait-main-cover
theme: nait-theme-test
---

# SDEV2150
## Lesson 22: Server-Side Rendering

Moving rendering from the browser to the server.

---

## Lesson Objectives

In this lesson, students will:

- Explain what server-side rendering (SSR) is
- Compare CSR and SSR rendering flows
- Describe how hydration works
- Identify advantages and tradeoffs of SSR
- Recognize when SSR is appropriate

---

## Agenda

- CSR recap and limitations
- What is SSR?
- SSR rendering flow
- Hydration
- Observing SSR in the browser
- Hybrid rendering
- Frameworks and SSR

---
layout: nait-main-cover
---

# Connecting

---

## Recap: Client-Side Rendering

In CSR:

- HTML is minimal
- JavaScript loads
- React builds the UI

---

## The problem

CSR can result in:

- delayed first content
- blank screens during load
- reliance on JavaScript

---

## Key question

What if the server sent a fully rendered page first?

---
layout: nait-main-cover
---

# What is SSR?

---

## Server-Side Rendering

SSR means:

- server generates HTML for the route
- browser receives ready-to-display content
- JavaScript enables interactivity after load

---

## SSR flow

```
User requests page
    |
Server renders HTML
    |
Browser displays content
    |
JavaScript loads
    |
React hydrates
```

---

## Key idea

SSR improves time to first content.

---
layout: nait-main-cover
---

# CSR vs SSR

---

## CSR flow

```
HTML → JS → React renders → UI
```

---

## SSR flow

```
HTML (ready) → UI visible → JS → hydration
```

---

## Key difference

CSR:
- UI built in browser

SSR:
- UI built on server first

---
layout: nait-main-cover
---

# Hydration

---

## What is hydration?

Hydration is:

> React attaching behaviour to server-rendered HTML

---

## Hydration flow

```
Server -> HTML
Client -> JS loads
React -> attaches events
UI -> interactive
```

---

## Important distinction

- SSR provides content early
- hydration enables interactivity

---
layout: nait-main-cover
---

# Observing SSR

---

## DevTools: Network tab

Reload the page and inspect:

- HTML response
- JavaScript files

---

## What you should see

- HTML contains actual content
- content appears immediately
- JavaScript loads afterward

---

## Compare with CSR

CSR:
- empty HTML shell

SSR:
- pre-rendered content

---
layout: nait-main-cover
---

# Hybrid Rendering

---

## Modern approach

Applications often mix strategies:

- SSR for initial load
- CSR for navigation
- Pre-rendering for static content

---

## Example

- marketing site → SSR
- dashboard → CSR
- blog → pre-rendered

---

## Key idea

Rendering strategy is a design decision.

---
layout: nait-main-cover
---

# Frameworks and SSR

---

## Modern frameworks

Examples:

- React Router (framework mode)
- Next.js
- Remix

---

## What frameworks do

- render on server
- manage routing and data
- hydrate on client

---

## Important point

Frameworks handle SSR complexity.

---
layout: nait-main-cover
---

# Advantages of SSR

---

## Strengths

- faster initial content
- better perceived performance
- improved SEO
- better on slower devices

---
layout: nait-main-cover
---

# Tradeoffs of SSR

---

## Limitations

- more complex architecture
- requires server environment
- harder to debug
- hydration still required

---

## Important perspective

SSR is one tool, not a replacement for CSR.

---
layout: nait-main-cover
---

# SRS Poll

---

What is the main benefit of SSR?

- A) Faster interactivity
- B) Faster initial content display
- C) Less JavaScript required overall
- D) No need for hydration

---
layout: nait-main-cover
---

# Exit Ticket

---

Explain:

1. What server-side rendering is
2. What hydration is
3. One advantage of SSR
4. One tradeoff of SSR
