---
title: SDEV2150 - Lesson 09
subtitle: Designing scalable interfaces through component composition.
theme: nait-theme-test
layout: nait-main-cover
---

# SDEV2150
## Lesson 09: Component Composition

Building scalable UIs from small, focused pieces.

---

## Lesson Objectives

In this lesson, students will:

- Explain the principles of component composition in React
- Differentiate between presentational and container components
- Build complex UIs by composing multiple smaller components together

---

## Agenda

- Recap: components as building blocks
- Composition vs inheritance
- Presentational vs container components
- Composition at different levels (feature, page)
- Practice and peer review
- Exit ticket

---
layout: nait-main-cover
---

# Connecting

---

## Recap and shift

- Prior lessons: props, children, and small-scale component reuse
- Today: composition as a strategy for building maintainable UIs

Today we zoom out and focus on how components fit together.

---
layout: nait-main-cover
---

# Quick Poll

---

Have you ever reused a UI element in multiple contexts?

- A) Yes, I copied/pasted it
- B) Yes, I made it reusable
- C) Not yet
- D) Not sure

---
layout: nait-main-cover
---

# What Is Composition?

---

## Building a UI from pieces

- Build small, focused components
- Combine them to create larger UI structures
- Prefer clarity and reuse over big monolithic components

Composition is about assembly.

---
layout: nait-main-cover
---

# Composition Over Inheritance

---

## Why React prefers composition

- Inheritance creates rigid hierarchies
- Composition stays flexible
- Reuse comes from assembling components, not subclassing them

---
layout: nait-main-cover
---

# Presentational Components

---

## Focus on how things look

- Receive data via props
- Render markup and styles
- No knowledge of where data comes from

Examples:

- List items
- Cards or panels
- Headers and footers

---
layout: nait-main-cover
---

# Container Components

---

## Focus on how things are assembled

- Decide what renders
- Coordinate multiple components
- Pass data down through props

Examples:

- Feature-level components
- Page-level components

---
layout: nait-main-cover
---

# Component Roles Review

---

## Know your role

**Layout components** decide *where things go*, **container** components decide *what things exist*, and **presentational** components decide *how things look*.

---
layout: nait-main-cover
---

# Brief Mention

---

## Other composition patterns

- Higher-Order Components (HOCs)
- Render props

You'll see them in older codebases.
Our primary focus is modern component composition.

---
layout: nait-main-cover
---

# Hands-on practice

---

## Your task

- Identify repeated layout or structure
- Extract a reusable presentational component
- Refactor feature components to use it
- Simplify top-level component structure

---
layout: nait-main-cover
---

# Exit Ticket

---

- One advantage of composition over inheritance
- Provide a short example of composition from your code