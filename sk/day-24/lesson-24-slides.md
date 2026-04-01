---
title: SDEV2150 - Lesson 24
subtitle: Server State with TanStack Query
layout: nait-main-cover
theme: nait-theme-test
---

# SDEV2150
## Lesson 24: Server State

Managing server data with TanStack Query.

---

## Lesson Objectives

In this lesson, students will:

- Distinguish client state from server state
- Explain why server state needs special handling
- Use TanStack Query to fetch data
- Handle loading and error states
- Use mutations to update server data

---

## Agenda

- Client vs server state recap
- Problems with manual data fetching
- What is TanStack Query?
- Queries (useQuery)
- Mutations (useMutation)
- Caching and invalidation

---
layout: nait-main-cover
---

# Connecting

---

## Where we are now

Lesson 23:
- Shared client state with Context

---

## The next question

Where does API data belong?

---

## Types of state

- Local state
- Shared client state (Context)
- Server state

---

## Key idea

Server state behaves differently than UI state.

---
layout: nait-main-cover
---

# Server State

---

## What is server state?

Data that:

- comes from an API
- can change outside your app
- must be fetched and kept up to date

---

## Examples

- resources list
- selected resource details
- user data

---

## Why it's different

You don't own this data.

---
layout: nait-main-cover
---

# The Problem

---

## Manual fetching

```jsx
useEffect(() => {
  fetch('/api/resources')
    .then(res => res.json())
    .then(setResources);
}, []);
```

---

## What you must handle

- loading state
- error state
- refetching
- caching
- duplicate requests

**This does not scale well**

---
layout: nait-main-cover
---

# Introducing TanStack Query

---

## What is it?

A library for managing server state.

---

## What it provides

- data fetching
- caching
- background updates
- synchronization

---

## Key idea

It manages server data over time.

---
layout: nait-main-cover
---

# Queries

---

## useQuery

```jsx
const { data, isLoading, isError } = useQuery({
  queryKey: ['resources'],
  queryFn: fetchResources
});
```

---

## What it does

- fetches data
- caches it
- tracks loading and errors

---

## Replace useEffect

Queries replace manual fetching logic.

---
layout: nait-main-cover
---

# Query Keys

---

## What are query keys?

Unique identifiers for cached data.

---

## Example

```jsx
['resources']
['resource', resourceId]
```

---

## Why they matter

- control caching
- control refetching
- distinguish data

---
layout: nait-main-cover
---

# Dynamic Queries

---

## Fetching by ID

```jsx
useQuery({
  queryKey: ['resource', resourceId],
  queryFn: () => fetchResource(resourceId),
  enabled: Boolean(resourceId)
});
```

---

## Key idea

Different inputs create different cached data.

---
layout: nait-main-cover
---

# Mutations

---

## useMutation

```jsx
const mutation = useMutation({
  mutationFn: createResource
});
```

---

## What mutations do

- create
- update
- delete

---

## Key idea

Mutations change server data.

---
layout: nait-main-cover
---

# Cache Invalidation

---

## After a mutation

```jsx
queryClient.invalidateQueries(['resources']);
```

---

## Why?

To refetch updated data.

---

## Key idea

Invalidate -> refetch -> UI updates

---
layout: nait-main-cover
---

# React Router vs TanStack Query

---

## Responsibilities

React Router:
- navigation
- route params

TanStack Query:
- server data
- caching
- synchronization

---

## Key takeaway

Routing and data are separate concerns.

---
layout: nait-main-cover
---

# Advantages

---

## Benefits of TanStack Query

- less boilerplate
- automatic caching
- background updates
- cleaner components

---
layout: nait-main-cover
---

# SRS Poll

---

What does TanStack Query manage?

- A) UI state
- B) Server state
- C) Routing
- D) Styling

---
layout: nait-main-cover
---

# Exit Ticket

---

Explain:

1. What server state is
2. What useQuery does
3. What useMutation does
4. Why caching matters
