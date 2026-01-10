---
title: SDEV2150 - Lesson 02
subtitle: Web Components and Composition
theme: nait-theme-test
layout: nait-main-cover
---

# SDEV2150
## Lesson 02: Web Components and Composition

Building interfaces by assembling focused, reusable components.

---
layout: nait-main-cover
---

# Lesson Objectives

---

## By the end of this lesson, students will:

- Describe the core features of Web Components
- Explain composition as a UI design principle
- Refactor a monolithic HTML page into multiple components
- Evaluate when composition improves maintainability

---
layout: nait-main-cover
---

# Agenda

---

## Today’s plan

- Quick review of Web Components
- Introduce composition
- Instructor-led refactor demo
- Student hands-on practice
- Reflection and discussion

---
layout: nait-main-cover
---

# Review: Web Components

---

## What you already know

From SDEV1150:

- Custom elements
- Shadow DOM
- Templates

Today we focus less on *syntax* and more on *structure*.

---
layout: nait-main-cover
---

# Why Composition?

---

## The problem with large components

- One file does everything
- Hard to reason about
- Difficult to reuse
- Changes ripple everywhere

Composition is about reducing this friction.

---
layout: nait-main-cover
---

# What Is Composition?

---

## Composition in UI design

- Break the UI into focused pieces
- Each piece owns one responsibility
- Build the page by assembling components

No inheritance chains. No giant base classes.

---
layout: nait-main-cover
---

# Starting Point

---

## Plain HTML first

We begin with:

- A single HTML document
- Clear visual sections
- No components yet

This makes boundaries visible before abstraction.

---
layout: nait-main-cover
---

# Extracting Components

---

## From regions to components

Examples from today’s demo:

- Header
- Filters
- Results
- Details

Each region becomes a custom element.

---
layout: nait-main-cover
---

# The Composition Moment

---

## This is the key shift

Before:
- One large HTML file
- UI details everywhere

After:
- `index.html` mostly contains custom tags
- Components own markup and logic

The page now describes *assembly*, not behaviour.

---
layout: nait-main-cover
---

# Why This Matters

---

## Benefits of composition

- Clearer structure
- Easier maintenance
- Better reuse
- Scales to larger apps

This same idea appears in React, Vue, and other frameworks.

---
layout: nait-main-cover
---

# Design Still Matters

---

## Components follow user intent

- Controls should live near what they affect
- Boundaries are design decisions
- Architecture serves usability

Good composition starts with good UX.

---
layout: nait-main-cover
---

# What We Are *Not* Doing Yet

---

## Deliberate scope

- No complex state management
- No heavy inter-component communication
- No frameworks

Today is about structure first.

---
layout: nait-main-cover
---

# Hands-On Practice

---

## Your task

- Refactor the provided HTML
- Extract at least three components
- Reassemble the page using custom elements

Focus on boundaries and clarity.

---
layout: nait-main-cover
---

# Reflection

---

## Think about

- What became easier after refactoring?
- What became harder?
- Where did composition help most?

There are no perfect answers.

---
layout: nait-main-cover
---

# Looking Ahead

---

## What’s next

- Component communication
- Custom events
- Coordinating behaviour across components

Same structure, more interaction.

---
layout: nait-main-cover
---

## Exit Ticket

- One benefit of composition
- One situation where composition might add complexity