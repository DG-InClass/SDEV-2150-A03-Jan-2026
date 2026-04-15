---
title: SDEV2150 - Lesson 25
marp: true
---

# SDEV2150
## Lesson 25: State Management Strategies

Choosing the right tool for the right type of state.

---

## Lesson Objectives

In this lesson, students will:

- Identify different types of state
- Map tools to state types
- Explain when to use each approach
- Recognize common state management mistakes
- Apply a decision framework to real scenarios

---

## Agenda

- State recap
- Types of state
- Tool mapping
- Applying to our app
- Common mistakes
- Decision framework

---

## What have we learned?

- useState -> local state
- Context -> shared client state
- TanStack Query -> server state
- React Router -> navigation

---

## The problem

We now have multiple tools.

Which one do we use?


## Key question

Where should this state live?

> It depends on the type of data...

---

## Local UI State

- belongs to one component
- short-lived

Examples:
* form inputs
* toggles

---

## Shared Client State

- shared across components
- UI-related

Examples:
* theme
* selected item

---

## Server State

- comes from an API
- changes outside your app

Examples:
* resources list
* selected resource data

---

# Tool Mapping

## Which tool for which state?

- useState -> local UI state
- Context -> shared client state
- TanStack Query -> server state
- React Router -> navigation and params

## Key idea

Different problems require different tools.

---

# Where Should Data Live?


## Decision Questions

1. From an API?
-> TanStack Query

2. Shared UI state?
-> Context

3. Local only?
-> useState

4. Navigation?
-> React Router

---

# Common Mistakes

1. Storing server data in Context
2. Overusing Context
3. Duplicating server state locally
4. Mixing multiple data patterns

## Key idea

One source of truth per type of data

---

# Architecture Overview

## Clean Structure

React Router:
- navigation

TanStack Query:
- server data

Context:
- shared UI state

useState:
- local state

---

## Key takeaway

Separate responsibilities clearly

---

# Example Decisions

- Theme toggle
  * -> Context
- Resource list
  * -> TanStack Query
- Selected item
  * -> useState or Context
- Form input
  * -> useState

---

# SRS Poll

Which tool should manage API data?

- A) useState
- B) Context
- C) TanStack Query
- D) React Router

---

# Exit Ticket

Explain:

1. The three types of state
2. Which tool manages server state
3. One common mistake
4. How to decide which tool to use
