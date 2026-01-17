---
title: SDEV2150 - Lesson 04
subtitle: Reactive Filtering and Multi-Component State
theme: nait-theme-test
layout: nait-main-cover
---

# SDEV2150
## Lesson 04: Reactive Filtering

Using custom events to coordinate state across components.

---


## Lesson Objectives

In this lesson, students will:

- Explain how custom events enable reactive UI updates
- Describe how filter state can drive rendered results
- Implement event-driven communication between multiple components
- Trace data flow through a reactive, multi-component UI

---

## Agenda

- Review reactive patterns from Lesson 03
- Introduce filter-driven reactivity
- Instructor demo
- Hands-on practice
- Reflection

---
layout: nait-main-cover
---

# Where We Are

---

## Building on Lesson 03

- Lesson 03 introduced event-driven selection
- One component reacted to another
- State changes triggered re-renders

Lesson 04 extends the same idea to shared state.

---
layout: nait-main-cover
---

# The New Problem

---

## When one change affects many things 

- Users change filters
- Results must update
- Selection must still work

We need components to react to changing state, not just clicks.

---
layout: nait-main-cover
---

# Reactive Filtering

---

## Filter state as input

- Filters describe *what the user wants*
- Results derive *what should be shown*
- UI updates when state changes

This is still the same reactive loop.

---
layout: nait-main-cover
---

# The Reactive Loop

---

## One pattern, repeated

1. User submits filters
2. Filters emit state
3. Results update internal state
4. Results re-render

No direct DOM manipulation across components.

---
layout: nait-main-cover
---

# Events as the Glue

---

## Why events still work here

- Filters do not know about results
- Results do not know about filters
- Events describe *what changed*

Loose coupling keeps components reusable.

---
layout: nait-main-cover
---

# Event Contract

---

## Being explicit matters

An event contract defines:

- Who emits the event
- What it is called
- What data it carries
- Who reacts to it

This keeps event-driven systems understandable.

---
layout: nait-main-cover
---

# Shadow DOM Reminder

---

## Encapsulation and communication

- Components use Shadow DOM
- Styles are scoped
- Events still travel upward

Shadow DOM changes styling, not data flow.

---
layout: nait-main-cover
---

# What We Are Practicing

---

## Key ideas today

- Shared state drives UI
- Components own their own data
- Rendering is a result of state

This is the foundation of modern frameworks.

---
layout: nait-main-cover
---

# Hands-On Practice

---

## Your task

- Dispatch filter state from `<resource-filters>`
- Update `<resource-results>` reactively
- Keep selection behaviour working

Focus on clarity and data flow.

---
layout: nait-main-cover
---

# Stretch Thinking

---

## What else could react?

- Result count in the header
- Empty state messages
- Analytics or logging

One event can have many listeners.

---
layout: nait-main-cover
---

# Looking Ahead

---

## What’s next

- Multiple reactions to one event
- More complex state coordination
- Frameworks that formalize these patterns

Same ideas, more structure.

---
layout: nait-main-cover
---

# Exit Ticket

---

- What makes filter-driven updates reactive?
- Why use events instead of direct method calls?