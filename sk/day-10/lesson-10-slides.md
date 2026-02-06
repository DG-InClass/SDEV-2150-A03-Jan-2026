---
title: SDEV2150 - Lesson 10
subtitle: Styling Components with Tailwind CSS
theme: nait-theme-test
layout: nait-main-cover
---

# SDEV2150
## Lesson 10: Styling Components in React

Making intentional layout and styling decisions with Tailwind CSS.

---
layout: nait-main-cover
---

## Lesson Objectives

In this lesson, students will:

- Apply Tailwind utility classes to style React components
- Use responsive breakpoints (`sm`, `md`, `lg`) intentionally
- Implement responsive layouts that adapt across screen sizes
- Organize Tailwind classes for readability and maintainability

---

## Agenda

- Recap: composition and layout responsibilities
- Utility-first styling with Tailwind
- Responsive design and breakpoints
- Instructor walkthrough: responsive layout
- Practice and peer review
- Exit ticket

---
layout: nait-main-cover
---

# Connecting

---

## Where we are coming from

- Lesson 09: component composition and separation of concerns
- Layout responsibilities isolated in layout components

Today we focus on **how layouts are styled and adapted responsively**.

---
layout: nait-main-cover
---

# Quick Poll

---

## Which part of responsive styling do you find most challenging?

- A) Choosing breakpoints
- B) Managing layout changes
- C) Keeping class lists readable
- D) Knowing when styling is “good enough”

---
layout: nait-main-cover
---

# Utility-First Styling

---

## How Tailwind encourages consistency

- Small, composable utility classes
- Styling lives with the markup
- Fewer one-off CSS rules

The goal is **clarity and consistency**, not decoration.

---
layout: nait-main-cover
---

# Responsive Design with Tailwind

---

## Breakpoints as rules

- Mobile-first by default
- Breakpoint prefixes add or override rules

Examples:

- `grid-cols-1 md:grid-cols-3`
- `gap-4 md:gap-6`

Think in terms of *layout rules*, not devices.

---
layout: nait-main-cover
---

# Designing for Multiple Layout Modes

---

## A common real-world pattern

- Mobile: stacked content
- Tablet: emphasis + supporting content
- Desktop: full horizontal layout

This lesson focuses on implementing these modes intentionally.

---
layout: nait-main-cover
---

# Layout Responsibility Review

---

## Who controls what?

- Layout components define grids and structure
- Parent components control spans and composition
- Feature components focus on content

Clear responsibilities make responsive changes easier.

---
layout: nait-main-cover
---

# Instructor Walkthrough

---

## What we'll change

- Grid columns at different breakpoints
- Column spans at `md` and `lg`
- Spacing for readability

All changes use Tailwind utility classes only.

---
layout: nait-main-cover
---

# Reading Tailwind Classes

---

## Keeping class lists readable

- Group related utilities together
- Keep breakpoint usage consistent
- Prefer explicitness over cleverness

Readable class lists are easier to maintain.

---
layout: nait-main-cover
---

# Hands-on practice

---

## Your task

- Implement a three-mode responsive layout
- Verify behavior at each breakpoint
- Refine spacing and readability
- Focus on intentional styling decisions.

---
layout: nait-main-cover
---

# Exit Ticket

---

Submit one of the following:

- A screenshot showing the layout at two breakpoints
- A snippet demonstrating intentional responsive styling