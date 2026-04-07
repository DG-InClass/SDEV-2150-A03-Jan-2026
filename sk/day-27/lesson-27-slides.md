---
title: SDEV2150 - Lesson 27
subtitle: Unit Testing with Vitest
layout: nait-main-cover
theme: nait-theme-test
---

# SDEV2150
## Lesson 27: Unit Testing

Testing React applications with Vitest and React Testing Library.

---

## Lesson Objectives

In this lesson, students will:

- Explain why testing is important
- Understand behavior-focused testing
- Configure Vitest for browser testing
- Write basic unit tests
- Test component rendering and interaction

---

## Agenda

- Why testing matters
- Testing philosophy
- Test setup overview
- Writing your first test
- Testing interactions
- Key testing principles

---
layout: nait-main-cover
---

# Connecting

---

## So far...

- Built components
- Managed state
- Fetched data
- Created full applications

---

## The new question

How do we know our app works?

---

## Key idea

We need confidence when changing code.

---
layout: nait-main-cover
---

# Why Test?

---

## Testing helps us:

- Prevent bugs
- Verify behavior
- Refactor safely

---

## Without tests

- Changes are risky
- Bugs go unnoticed
- Confidence is low

---

## With tests

- Safer changes
- Faster development
- Better quality

---
layout: nait-main-cover
---

# Testing Philosophy

---

## Focus on behavior

- What the user sees
- What the user does

---

## Avoid testing

- Internal state
- Implementation details

---

## Key idea

Test outcomes, not code structure

---
layout: nait-main-cover
---

# Testing Tools

---

## Our stack

- Vitest (test runner)
- Playwright (browser environment)
- React Testing Library (render + queries)

---

## What each does

- Vitest -> runs tests
- Playwright -> real browser
- Testing Library -> interact with UI

---

## Key idea

We test in a real browser environment

---
layout: nait-main-cover
---

# First Test

---

## What are we doing?

- Render a component
- Find an element
- Assert it exists

---

## Example flow

1. render component
2. query the UI
3. make an assertion

---

## Mental model

Render -> Find -> Assert

---
layout: nait-main-cover
---

# Testing Rendering

---

## Example

- Render Header
- Verify title appears

---

## What we check

- Text is visible
- UI matches expectation

---

## Key idea

Test what users see

---
layout: nait-main-cover
---

# Testing Interaction

---

## Example

- Click a button
- Verify behavior

---

## What we check

- Event handlers run
- UI responds correctly

---

## Key idea

Simulate real user actions

---
layout: nait-main-cover
---

# Testing Props

---

## Example

- Pass data into a component
- Verify it renders correctly

---

## What we check

- Correct values appear
- UI updates based on props

---

## Key idea

Props drive UI output

---
layout: nait-main-cover
---

# Conditional Rendering

---

## Example

- No data -> show placeholder
- Data present -> show content

---

## What we check

- Correct UI for each state

---

## Key idea

Test different UI states

---
layout: nait-main-cover
---

# Good Tests

---

## Characteristics

- Small
- Focused
- Easy to read

---

## Each test should:

- Verify one behavior
- Be clearly named

---

## Key idea

Simple tests are better tests

---
layout: nait-main-cover
---

# Common Mistakes

---

## Mistake 1

Testing implementation details

---

## Mistake 2

Testing too much at once

---

## Mistake 3

Unclear test names

---

## Key idea

Clarity over complexity

---
layout: nait-main-cover
---

# SRS Poll

---

What should tests focus on?

- A) Internal state
- B) Implementation details
- C) User behavior
- D) Code structure

---
layout: nait-main-cover
---

# Exit Ticket

---

Explain:

1. Why testing is important
2. What behavior-based testing means
3. One example of a good test
4. One common mistake to avoid

---

# Next Lesson

---

## Test-Driven Development (TDD)

Next, we will:

- write tests before code
- follow Red -> Green -> Refactor
- build features using tests
