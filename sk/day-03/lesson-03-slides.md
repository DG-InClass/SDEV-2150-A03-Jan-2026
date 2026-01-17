---
title: SDEV2150 - Lesson 03
subtitle: Reactive Patterns and Component Communication
theme: nait-theme-test
layout: nait-main-cover
---

# SDEV2150
## Lesson 03: Reactive Patterns

Making components respond to user actions through events.

---

## Lesson Objectives

In this lesson, students will:

- Explain what makes a UI interaction reactive
- Describe how custom events enable component communication
- Implement a simple reactive pattern using Web Components
- Trace how data flows through an event-driven UI

---

## Agenda

- Review composition from Lesson 02  
- Introduce reactive thinking  
- Events and component communication  
- Instructor demo: selecting a resource  
- Hands-on practice  
- Reflection and preview of Lesson 04

---
layout: nait-main-cover
---

# Where We Are

---

## Building on Lesson 02

- Lesson 02 focused on **composition**
- We assembled the UI from multiple components
- Components were mostly isolated

Now we need those components to **work together**.

---
layout: nait-main-cover
---

# The Problem

---

## Static components aren't enough

- Users interact with the UI
- Data changes over time
- One component's action affects another

We need a way for components to react.

---
layout: nait-main-cover
---

# Reactive Thinking

---

## The reactive mental model

1. Something happens
2. An event is emitted
3. Other code reacts
4. The UI updates

This loop drives modern front-end applications.

---
layout: nait-main-cover
---

# Events as Signals

---

## Events are messages

- They describe *what* happened
- They do not dictate *what should happen*
- Any interested listener can react

This keeps components loosely coupled.

---
layout: nait-main-cover
---

# Custom Events

---

## Beyond built-in events

- `click`, `input`, and `change` describe user actions
- Custom events describe **application meaning**

Example meanings:
- "A resource was selected"
- "Filters changed"

---
layout: nait-main-cover
---

# Today's Interaction

---

## Selecting a resource

- User clicks a result item
- Results component emits an event
- Details component updates

A small interaction with big implications.

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

This prevents hidden dependencies.

---

## Event: resource-selected

**Contract summary**
- Emitted by `<resource-results>`
- Fired when a result is activated
- Payload includes the selected resource
- Event bubbles through the DOM

No direct component references required.

---
layout: nait-main-cover
---

# Shadow DOM Reminder

---

## Components are encapsulated

- Each component uses Shadow DOM
- Styles are included per component
- Events still cross component boundaries

Shadow DOM changes *how* we style, not *how we communicate*.

---
layout: nait-main-cover
---

# Where to Listen

---

## Coordinating components

For this lesson:

- Events are listened for in `main.js`
- `main.js` acts as a simple coordinator

Later, this role can move into a parent component.

---
layout: nait-main-cover
---

# Reactive UI Update

---

## What makes this reactive?

- Data changes (selected resource)
- Component state updates
- UI re-renders automatically

The UI reflects current state.

---
layout: nait-main-cover
---

# What We Are Not Doing Yet

---

## Intentional scope

- No global state management
- No framework abstractions
- No complex event graphs

We're building the mental model first.

---
layout: nait-main-cover
---

# Hands-On Practice

---

## Your task

- Render results from an array
- Emit a custom event on selection
- Update the details component reactively

Focus on clarity over cleverness.

---
layout: nait-main-cover
---

# Looking Ahead

---

## Lesson 04 preview

- Filters emit state changes
- Results react by re-filtering
- Multiple components respond to one change

The reactive pattern expands.

---
layout: nait-main-cover
---

# Exit Ticket

---

- What makes this interaction reactive?
- Why use a custom event instead of a direct method call?