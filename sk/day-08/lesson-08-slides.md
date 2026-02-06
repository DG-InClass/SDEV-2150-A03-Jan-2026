---
title: SDEV2150 - Lesson 08
subtitle: Props, Children, and Simple Composition
theme: nait-theme-test
layout: nait-main-cover
---

# SDEV2150
## Lesson 08: Building Components in React

Making components reusable with props and children.

---

## Lesson Objectives

In this lesson, students will:

- Use props to pass data into a component
- Use `children` to “slot” optional content into a component
- Compose a UI from smaller components (Results → ResultsItem)
- Apply Tailwind utilities for consistent, readable UI styling

---

## Agenda

- Recap: static React components (Lesson 07)
- Props as component inputs
- `children` as a simple content slot
- Composition with a ResultsItem sub-component
- Tailwind coherence (spacing, layout, typography)
- Practice and exit ticket

---
layout: nait-main-cover
---

# Connecting

---

## Where we are coming from

- Lesson 07: React + Tailwind project scaffold
- Static components and basic layout

Today we keep the same UI, but make one part of it more reusable.

The focus is on reinforcing concepts from lesson 7.

---
layout: nait-main-cover
---

# Quick Poll

---

Which change most improves maintainability in a growing UI?

- A) More CSS classes
- B) Copy/paste markup carefully
- C) Extract repeated markup into a component
- D) Put everything in one file so it's easier to find

---
layout: nait-main-cover
---

# Props

---

## Props are component inputs

- Data flows **into** a component
- Props are read-only
- Props let one component reuse the same structure for many items

---
layout: nait-main-cover
---

# Children

---

## Children is a simple slot

- A component renders `{children}` where it wants extra content
- The parent decides what to insert

---
layout: nait-main-cover
---

# Composition

---

## Build the UI from smaller parts

Instead of one large component:

- `Results` renders the list
- `ResultsItem` renders each list item

This reduces repetition and makes changes easier.

---
layout: nait-main-cover
---

# The Demo Target

---

## Results → ResultsItem

- `Results` maps over a `resources` array
- Each resource becomes a `ResultsItem`
- Props carry the data
- Children carry optional UI

---
layout: nait-main-cover
---

# Conditional Rendering

---

## Only render when needed

In React, you'll commonly see patterns like:

```jsx
{condition && <Thing />}
```

We'll use it to show the open now badge only when `openNow` is true.

---
layout: nait-main-cover
---

# Tailwind Coherence

---

## Small rules, consistent UI

Focus on:

- consistent spacing (`p-4`, `gap-3`, `mt-1`)
- consistent typography (`text-sm`, `text-xs`, `font-semibold`)
- consistent structure (list, dividers, subtle hover)

Not pixel-perfect parity with Bootstrap.

---
layout: nait-main-cover
---

# Compare and Contrast

---

## Web Components vs React (so far)

- Web Components: attributes, custom events, DOM APIs
- React: props, children, JSX composition

Same goal. Different tooling and mental model.

---
layout: nait-main-cover
---

# Hands-On Practice

---

## Your task

- Add a `resources` array (hard-coded)
- Create `ResultsItem.jsx`
- Refactor `Results.jsx` to use `ResultsItem`
- Use children for the **Open now** badge

---
layout: nait-main-cover
---

# Exit Ticket

Submit a snippet that demonstrates:

- a component using props
- a `{children}` slot
- one example of conditional rendering
- one Tailwind utility class applied