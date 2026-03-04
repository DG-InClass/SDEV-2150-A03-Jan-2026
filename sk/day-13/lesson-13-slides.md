---
title: SDEV2150 - Lesson 13
subtitle: Lifting State and Component Communication
theme: nait-theme-test
layout: nait-main-cover
---

# SDEV2150
## Lesson 13: Lifting State and Component Communication

Coordinating behavior across React components.

---

## Lesson Objectives

By the end of this lesson, you should be able to:

- Explain the concept of lifting state and when it should be applied
- Pass state and event handlers between parent and child components
- Identify problems caused by duplicated state
- Describe the challenges of prop drilling

---

## Agenda

- Recap: Local state and events
- The problem of duplicated state
- Identifying shared state
- Lifting state to a common ancestor
- Data flow patterns in React
- Prop drilling discussion
- Exit ticket

---
layout: nait-main-cover
---

# Connecting

---

## Review from last lesson

- Components can manage local state
- State changes trigger re-renders
- Events update state

But what happens when multiple components need the same data?

---
layout: nait-main-cover
---

# The Core Problem

---

## Duplicated state leads to inconsistency

If two components store the same piece of data:

- They can fall out of sync
- UI becomes unpredictable
- Debugging becomes harder

State should exist in one place.

---
layout: nait-main-cover
---

# Identifying Shared State

---

Ask two questions:

1. Who needs this data?
2. Where is their nearest common ancestor?

The answer determines where state should live.

---
layout: nait-main-cover
---

# Lifting State Up

---

## What it means

Move shared state from child components to their nearest common parent.

The parent becomes the single source of truth.

---
layout: nait-main-cover
---

# Before and After

---

## Before lifting

- Child owns state
- Sibling components cannot access it

## After lifting

- Parent owns state
- Children receive state via props
- Children notify parent via callbacks

---
layout: nait-main-cover
---

# React Data Flow

---

## One-way data flow

Data flows down via props.

Events flow up via callbacks.

The parent coordinates updates.

---
layout: nait-main-cover
---

# Example Pattern

---

Parent component:

```js
const [value, setValue] = useState(initialValue);
```

Pass down:

```jsx
<Child value={value} onChange={setValue} />
```

Child notifies parent:

```jsx
onClick={() => onChange(newValue)}
```

---
layout: nait-main-cover
---

# Conditional Rendering

---

Render UI based on state.

Logical AND:

```jsx
{condition && <Component />}
```

Ternary:

```jsx
{condition ? <A /> : <B />}
```

UI should derive from state, not manual DOM changes.

---
layout: nait-main-cover
---

# Derived Data

---

Avoid storing data that can be calculated.

Instead of storing filtered results in state:

```js
const filtered = items.filter(...);
```

Derive it from existing state.

---
layout: nait-main-cover
---

# Prop Drilling

---

When state is lifted high in the tree, props may need to pass through multiple layers.

This can:

- Increase complexity
- Reduce readability

But it preserves explicit data flow.

---
layout: nait-main-cover
---

# When to Lift State

---

Lift state when:

- Multiple components depend on the same data
- One component’s action affects another
- You see duplicated state

Do not lift state unnecessarily.

---
layout: nait-main-cover
---

# Common Mistakes

---

- Duplicating shared state
- Storing derived data in state
- Forgetting to pass callbacks
- Mutating state directly
- Lifting state too high without reason

---
layout: nait-main-cover
---

# SRS Poll

---

Where should shared state live?

- A) In every component that uses it
- B) In the nearest common parent
- C) In a global variable
- D) In local variables only

---
layout: nait-main-cover
---

# Exit Ticket

---

Submit:

- A short explanation of lifting state
- One code example showing parent → child data flow
- One potential drawback of prop drilling

---
layout: nait-main-cover
---

# Looking Ahead

---

Next steps:

- Managing more complex shared state
- Reducing prop drilling
- Exploring additional state management patterns

Today’s lesson establishes the foundation.