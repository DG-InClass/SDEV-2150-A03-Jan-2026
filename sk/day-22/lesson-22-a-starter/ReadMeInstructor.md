# Lesson 22-A Instructor Guide

## Lesson Scope

This lesson walks students through migrating a React Router v7 application from **Data Mode** to **Framework Mode** so the app can support SSR and move backend API access into server-side route code.

The student-facing guide is in [README.md](/D:/GH/ReactSSR/README.md).

## Estimated Delivery Time

For a live instructor-led session, a good estimate is:

- **75 to 90 minutes** for the full lesson with explanation, coding, and questions

A practical breakdown is:

- **10 minutes**: SSR concepts and why the migration matters
- **10 minutes**: review the starting project structure and current Data Mode setup
- **15 minutes**: package, script, and Vite/plugin updates
- **20 minutes**: Framework Mode file setup and moving route/data code
- **10 minutes**: SSR-safe hook changes and hydration discussion
- **10 to 25 minutes**: verification, troubleshooting, and student questions

If students are newer to SSR, plan closer to **90 minutes**.

If students are already comfortable with React Router Data Mode and Vite, the lesson can often fit into **60 to 75 minutes**.

## Instructor Goals

By the end of the lesson, students should understand:

- why SSR changes both runtime behavior and deployment expectations
- why React Router Framework Mode is a better fit than plain Data Mode for this use case
- how moving API logic into `.server.js` files helps keep backend endpoint details out of browser code
- why browser-only APIs such as `sessionStorage` require extra care in SSR

## Suggested Delivery Flow

### 1. Introduce the Problem

Open by framing the migration goal clearly:

- the app already uses loaders and actions
- the missing piece is the runtime model
- Data Mode alone does not give the same server-rendered framework structure as Framework Mode

Key message:

- this is mostly a **runtime and file-organization migration**, not a complete rewrite

### 2. Review the Starting Point

Before editing code, point students to:

- `frontend/src/main.jsx`
- `frontend/src/router.jsx`
- `frontend/src/pages/ResourceDirectoryPage.jsx`
- `frontend/src/pages/AdminPage.jsx`

Explain that the current app is already well-positioned for migration because:

- data loading is centralized
- mutations are centralized
- page components are already mostly presentation-focused

### 3. Emphasize What Actually Changes

Students may assume SSR means rebuilding the whole app.

Keep returning to these ideas:

- `src/router.jsx` is mostly being split into better-named Framework Mode files
- page components stay largely intact
- the biggest conceptual change is that request-time work can now happen on the server

### 4. Teach the SSR-Safe Hook Carefully

This is the part most likely to raise conceptual questions.

Important talking points:

- server render happens first
- hydration happens in the browser afterward
- the browser's first render must agree with the server-rendered HTML
- reading `sessionStorage` too early can create hydration mismatches

If time is tight, this is still the section worth slowing down for.

### 5. End with Verification

Have students verify both the architecture and the behavior:

- the app starts in Framework Mode
- the backend URL now appears only in server-side code
- the browser is no longer making direct app-level requests to the backend REST endpoints

## Recommended Prep Before Class

Before teaching, make sure:

- dependencies install cleanly in both `frontend` and `backend`
- the backend starts and responds on `http://localhost:3000`
- the student-facing `README.md` matches the current repo structure
- you have tested the migration path once yourself from the current starting point

It is also helpful to keep a completed copy of the lesson branch available in case students need a recovery point.

## Common Student Friction Points

Watch for these issues during delivery:

- forgetting to remove `@vitejs/plugin-react`
- forgetting that `@vitejs/plugin-react` should be uninstalled in Phase 3 and then removed from the Vite config in Phase 5
- forgetting to add `@react-router/dev` and `@react-router/serve`
- creating `routes.js` or `react-router.config.js` in the wrong directory
- misunderstanding that `src/router.jsx` is being split, not rewritten from scratch
- assuming browser globals are always available because the app "still uses React"
- expecting SSR to be purely a performance feature without hosting trade-offs

## Good Questions to Ask Students

Use questions like these to check understanding:

- Why is moving the API logic into a `.server.js` file useful?
- What problem can happen if you read `sessionStorage` during the initial render?
- What stays mostly unchanged in this migration?
- Why does SSR change how the frontend must be hosted?

## Teaching Notes

- Avoid overselling SSR as a universal performance fix.
- Be explicit that hiding backend URLs from the browser bundle is not the same as securing the backend.
- Reinforce that Framework Mode is not just "Data Mode with different files"; it changes the runtime model.
- If students get overwhelmed, bring the conversation back to the three biggest file-level changes:
  - `src/main.jsx` goes away
  - `src/router.jsx` gets split into `src/routes.js` and `src/lib/resource-routes.server.js`
  - `src/root.jsx` becomes the root route module

## Optional Instructor Extensions

If time remains, you can extend the lesson with:

- a route error boundary example
- an environment variable example for `RESOURCE_API_BASE_URL`
- a short discussion of when search params are better than route params
- a deployment discussion comparing static hosting and SSR hosting
