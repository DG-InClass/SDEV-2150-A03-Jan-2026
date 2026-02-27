---
title: SDEV2150 - Lesson 12
subtitle: Event Handling and State in React
theme: nait-theme-test
layout: nait-main-cover
---

# SDEV2150
## Lesson 12: Event Handling and State in React

From static UI to interactive UI.

---

## Lesson Objectives

In this lesson, students will:

- Implement event handling for user interactions in React components
- Use the `useState` hook to manage and update component state
- Build interactive UI components that respond to user input

---

## Agenda

- Recap: DaisyUI integration from Lesson 11
- React events and the `useState` mental model
- Demo: Counter component (Hello World of state)
- Controlled inputs and form submission
- Practice: FeedbackForm + peer review
- Exit ticket

---
layout: nait-main-cover
---

# Connecting

---

## What changed since Lesson 11

- We have reusable components
- Styling is consistent with DaisyUI
- Layout is responsive

What we do not have yet is UI that responds to user input.

---
layout: nait-main-cover
---

# Reactivity

---

## The idea behind React

State changes.

React re-renders.

UI updates.

Your job is to manage state and let React handle the UI.

---
layout: nait-main-cover
---

# SRS Poll

---

What's an example of a user interaction that requires state to update the UI?

- A) Selecting a category
- B) Typing into a search box
- C) Toggling a checkbox
- D) All of the above

---
layout: nait-main-cover
---

# React Events

---

## Events in JSX

```jsx
<button onClick={handleClick}>Click</button>
```

- Declarative, attached in markup
- Bubble like DOM events
- Wrapped by React (synthetic events)

---
layout: nait-main-cover
---

# `useState`

---

## The pattern

```js
const [value, setValue] = useState(initialValue);
```

- `value` is the current state
- `setValue` schedules an update
- Updating state triggers a re-render

---
layout: nait-main-cover
---

# Demo: Counter Component

---

## Why we start here

- Smallest complete example of state
- Click event updates state
- Render reflects state immediately

Goal: build intuition before applying it to the project.

---
layout: nait-main-cover
---

# Counter Demo

---

```jsx
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  Incremented {count} times.
</button>
```

Discussion prompts:

- What causes the re-render?
- What happens if we click fast?

---
layout: nait-main-cover
---

# Controlled Inputs

---

## Controlled means state owns the value

```jsx
<input
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
```

- Input reflects state
- Typing triggers events
- Events update state

---
layout: nait-main-cover
---

# Checkboxes and Booleans

---

## `checked` not `value`

```jsx
<input
  type="checkbox"
  checked={openNowOnly}
  onChange={(e) => setOpenNowOnly(e.target.checked)}
/>
```

---
layout: nait-main-cover
---

# Multi-Select State

---

## Arrays in state

```js
const [selectedCategories, setSelectedCategories] = useState([]);
```

Toggle pattern:

```js
setSelectedCategories((prev) =>
  prev.includes(category)
    ? prev.filter((c) => c !== category)
    : [...prev, category]
);
```

---
layout: nait-main-cover
---

# Form Submission

---

## Override default browser behavior

```jsx
function handleSubmit(e) {
  e.preventDefault();
  console.log('Filters submitted');
}

<form onSubmit={handleSubmit}>
```

Same concept as before, now attached declaratively.

---
layout: nait-main-cover
---

# Practice: FeedbackForm

---

## What you'll build

A small component that:

- Tracks input changes with `useState`
- Shows a live preview
- Uses DaisyUI inputs and buttons

This is about event handling, not styling perfection.

---
layout: nait-main-cover
---

# Peer Review

---

## What to test

- Does typing update the preview immediately?
- Are inputs controlled (value comes from state)?
- Do handlers avoid direct DOM manipulation?

---
layout: nait-main-cover
---

# Guided Discussion

---

## What happens on state updates?

- State update schedules a render
- React batches updates for efficiency
- Rendering is recalculating UI from state

If something looks wrong, inspect state first.

---
layout: nait-main-cover
---

# Common Mistakes

---

- Forgetting `value` on controlled inputs
- Reading `e.target.value` for checkboxes
- Mutating arrays instead of creating new arrays
- Expecting state to update instantly in the same line
- Trying to update the DOM manually

---
layout: nait-main-cover
---

# Exit Ticket

---

Submit:

- A short explanation of one component that updates UI using `useState`
- A small code snippet showing the event handler and state update

Be ready to explain:

- The event
- The state
- The UI change

---
