---
title: SDEV2150 - Lesson 11
subtitle: UI Framework Integration with DaisyUI
theme: nait-theme-test
layout: nait-main-cover
---

# SDEV2150
## Lesson 11: UI Frameworks with DaisyUI

Accelerating UI development with component libraries.

---

## Lesson Objectives

In this lesson, students will:

- Install and configure DaisyUI in a React + Tailwind project
- Use DaisyUI prebuilt components to accelerate UI development
- Customize themes and integrate DaisyUI components into existing layouts

---

## Agenda

- Recap: Tailwind styling from Lesson 10
- UI frameworks and design systems
- DaisyUI components and themes
- Instructor code-along
- Guided exploration
- Coding exercise and peer review
- Exit ticket and Q and A

---
layout: nait-main-cover
---

# Connecting

---

## From Tailwind utilities to design systems

- Tailwind gives flexibility, but can lead to repeated patterns
- UI frameworks provide consistent defaults and faster assembly

Today: we'll layer DaisyUI on top of Tailwind, and talk about when that trade-off is worth it.

---
layout: nait-main-cover
---

# Quick Poll

---

What are the trade-offs between custom CSS and prebuilt frameworks?

- A) Speed vs control
- B) Consistency vs uniqueness
- C) Learning curve vs long-term maintainability
- D) All of the above

---
layout: nait-main-cover
---

# What Is DaisyUI?

---

## A Tailwind-based UI component library

- Built on top of Tailwind CSS
- Adds semantic component classes (btn, card, navbar, etc.)
- Includes themes out of the box

DaisyUI doesn't replace Tailwind. It builds on it.

---
layout: nait-main-cover
---

# Why Use a UI Framework?

---

## Common benefits

- Faster prototyping
- Consistent look and feel
- Fewer styling decisions per component
- Solid accessibility baselines (when used correctly)

---
layout: nait-main-cover
---

# Trade-Offs to Consider

---

## What you give up

- Less granular control by default
- You inherit the framework's opinions
- Risk of "samey" UI if you don't customize

The skill is choosing when to use it.

---
layout: nait-main-cover
---

# Component Categories

---

## What to look for in the docs

- Layout and navigation (navbar, menu)
- Containers (card, collapse)
- Inputs (input, select, checkbox)
- Feedback (alert, badge)

Pick components that replace repeated markup.

---
layout: nait-main-cover
---

# Themes

---

## Theme-driven styling

- Themes affect colors and component appearance
- Switch theme values to quickly compare options
- Applied via a `data-theme` attribute

In our project, we set the theme from React (layout wrapper).

---
layout: nait-main-cover
---

# Guided Exploration

---

Find three DaisyUI components that could improve your current app.

For each, answer:

- What problem does this solve?
- Which existing markup could it replace?
- What would you still need Tailwind utilities for?

---
layout: nait-main-cover
---

# Hands-on practice

---

## Your task

- Update at least one existing component to use DaisyUI components
- Apply a theme and confirm it changes the UI

Optional (if time):
- Add a simple theme toggle (we'll formalize state soon)

---
layout: nait-main-cover
---

# Exit Ticket

---

Submit:

- One screenshot or snippet showing DaisyUI component integration
- One screenshot or snippet showing theme customization

Be ready to share:

- One benefit of DaisyUI
- One drawback compared to custom Tailwind styling