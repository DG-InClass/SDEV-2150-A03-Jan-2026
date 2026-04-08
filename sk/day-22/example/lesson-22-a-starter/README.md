# Lesson 22-A: SSR and React Router 7 Framework Mode

## Learning Outcome Guide

*At the end of this class, you should be able to…*

- Explain the principles of server-side rendering and how it differs from client rendering.
- Describe the benefits and trade-offs of SSR in terms of performance, SEO, and complexity.
- Explore how React Router v7 implements SSR and hybrid rendering.

## Lesson Goal

In the previous lesson, this project was converted to use **React Router Data Mode**. As a result, the app now uses route `loader` and `action` functions, but it still runs as a client-rendered Vite app through `createBrowserRouter()` and `RouterProvider`.

In this lesson, you will switch the frontend from **Data Mode** to **Framework Mode** so that:

- the app can render on the server
- the browser no longer calls the backend REST API directly
- backend requests are handled by server-side route code instead of client-side JavaScript

This is the key architectural idea:

- In **Data Mode**, your frontend bundle contains the route configuration and can contain direct `fetch()` calls to `http://localhost:3000`.
- In **Framework Mode**, your route modules can call the backend on the server, and the browser only talks to the React Router app.

Important note:

- This change helps hide backend URLs from the client bundle and normal browser app code.
- It is **not** a security boundary by itself. If your backend server is publicly reachable, a user can still call the REST API endpoints directly unless you add proper authentication and authorization.

## Project Starting Point

Before you begin, the frontend currently has these important files:

- `frontend/src/main.jsx`
- `frontend/src/router.jsx`
- `frontend/src/App.jsx`
- `frontend/src/pages/ResourceDirectoryPage.jsx`
- `frontend/src/pages/AdminPage.jsx`
- `frontend/src/hooks/useSelectedResource.js`

Your current API calls are centralized in `frontend/src/router.jsx`, which is good news. It means the SSR retrofit can be done with relatively small code changes.

## Phase 1: Install Dependencies and Run the Existing App

Open one terminal for the backend and one terminal for the frontend.

## Terminal Commands

```ps title="Backend - install and start the REST API"
cd backend
npm install
npm start
```

## Terminal Commands

```ps title="Frontend - install current dependencies and start the existing app"
cd frontend
npm install
npm run dev
```

At this point, the backend API should still be running on:

- `http://localhost:3000`

## Phase 2: Migration Guidance

> If `frontend/src/hooks/useResources.js` still exists in your project, delete it. The hook is not used anymore and keeping old client-side API code around makes the SSR lesson harder to follow.

Framework Mode also means you must think about SSR safety. Any code that touches browser-only globals such as `window`, `document`, `localStorage`, or `sessionStorage` must be protected.

In this project, `frontend/src/hooks/useSelectedResource.js` currently reads `sessionStorage` during render, so it must be updated before SSR will work reliably.

## Phase 3: Install React Router Framework Mode Tooling

You are going to replace the Vite-only React entry with React Router's framework tooling.

In this phase, you are installing the new Framework Mode packages and removing the old React Vite plugin package.

This matters because uninstalling `@vitejs/plugin-react` here will also update:

- `frontend/package.json`
- the lock file
- `node_modules`

You will still update `frontend/vite.config.js` in Phase 5 so the code no longer imports or uses that plugin.

## Terminal Commands

```ps title="Frontend - install React Router framework-mode tooling"
cd frontend
npm install @react-router/serve
npm install -D @react-router/dev
npm uninstall -D @vitejs/plugin-react
```

## Phase 4: Update `package.json` Scripts

Open `frontend/package.json` and update the `scripts` object exactly as follows:

- Replace `"dev": "vite"` with `"dev": "react-router dev"`
  This starts the React Router Framework Mode development server instead of the plain Vite dev server.
- Replace `"build": "vite build"` with `"build": "react-router build"`
  This creates both the client build and the server build required for SSR.
- Remove `"preview": "vite preview"`
  Framework Mode does not use Vite preview as its production-like runtime.
- Add `"start": "react-router-serve build/server/index.js"`
  This runs the built server output after `npm run build`.
- Keep `"lint": "eslint ."` unchanged
  Linting does not need to change for this migration.

While you are editing the same file:

- add `@react-router/serve` to `dependencies`
- add `@react-router/dev` to `devDependencies`

You are removing the old client-only runtime scripts and replacing them with scripts that understand React Router's server-rendered app structure.

## Code Changes

Sometimes we'll be creating new code files. Other times, we're just editing existing files. For the code samples where editing is taking place, note the following about the `diff` formatting:

- deleted lines begin with `- `
- added lines begin with `+ `
- unchanged context lines begin with two spaces

When editing an existing file, make sure you are performing actual *changes* (rather than just attempting to copy/paste the entire code sample contents).

### Incremental Code Changes

```diff lang="json" title="frontend/package.json"
  {
    "name": "lesson-12-complete",
    "private": true,
    "version": "0.0.0",
    "type": "module",
    "scripts": {
-     "dev": "vite",
-     "build": "vite build",
-     "lint": "eslint .",
-     "preview": "vite preview"
+     "dev": "react-router dev",
+     "build": "react-router build",
+     "start": "react-router-serve build/server/index.js",
+     "lint": "eslint ."
    },
    "dependencies": {
+     "@react-router/serve": "^7.13.1",
      "react": "^19.2.0",
      "react-dom": "^19.2.0",
      "react-router": "^7.13.1"
    },
    "devDependencies": {
      "@eslint/js": "^9.39.1",
+     "@react-router/dev": "^7.13.1",
      "@tailwindcss/vite": "^4.1.18",
      "@types/react": "^19.2.5",
      "@types/react-dom": "^19.2.3",
      "daisyui": "^5.5.18",
      "eslint": "^9.39.1",
      "eslint-plugin-react-hooks": "^7.0.1",
      "eslint-plugin-react-refresh": "^0.4.24",
      "globals": "^16.5.0",
      "tailwindcss": "^4.1.18",
      "vite": "^7.2.4"
    }
  }
```

## Phase 5: Swap the Vite Plugin

Framework Mode still uses Vite under the hood, but the plugin changes.

Open `frontend/vite.config.js` and make these exact changes:

- keep `defineConfig` imported from `vite`
- keep `tailwindcss` imported from `@tailwindcss/vite`
- remove the `@vitejs/plugin-react` import
- add `reactRouter` from `@react-router/dev/vite`
- replace `react()` inside the `plugins` array with `reactRouter()`

After this edit, your Vite config is no longer bootstrapping a plain React SPA. Instead, it is enabling React Router's Framework Mode build pipeline, which is what gives you:

- SSR support
- route-module conventions such as `root.jsx` and `routes.js`
- client and server builds from the same app

This is why removing `@vitejs/plugin-react` is important. The React Router Vite plugin now becomes the main integration point between your app and Vite.

## Code Changes

### Incremental Code Changes

```diff lang="js" title="frontend/vite.config.js"
  import { defineConfig } from 'vite';
- import react from '@vitejs/plugin-react';
+ import { reactRouter } from '@react-router/dev/vite';
  import tailwindcss from '@tailwindcss/vite';
  
- // https://vite.dev/config/
  export default defineConfig({
-   plugins: [react(), tailwindcss()],
+   plugins: [reactRouter(), tailwindcss()],
  });
```

## Phase 6: Add the React Router Framework Config

Use `src` as the app directory so you do **not** have to move the whole frontend into an `app/` folder.

This is a key minimal-change decision for *this* project.

## Code Changes

### New Code Files

```js title="frontend/react-router.config.js"
export default {
  appDirectory: 'src',
  ssr: true,
};
```

## Phase 7: Add the Root Route Module

Framework Mode requires a root route module. Keep `App.jsx` and reuse it as your layout component so you do not have to rewrite the page structure.

## Code Changes

### New Code Files

```js title="frontend/src/root.jsx"
import { Links, Meta, Scripts, ScrollRestoration } from 'react-router';

import './index.css';
import App from './App';

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <App />;
}
```

## Phase 8: Define Routes with `routes.js`

Instead of `createBrowserRouter()`, Framework Mode uses a route config file.

## Code Changes

### New Code Files

```js title="frontend/src/routes.js"
import { index, route } from '@react-router/dev/routes';

export default [
  index('./routes/home.jsx'),
  route('admin', './routes/admin.jsx'),
  route('admin/:resourceId', './routes/admin.$resourceId.jsx'),
];
```

## Phase 9: Move Backend Calls into a Server-Only Module

This is the most important change in the lesson.

In this project, this step is mostly a **better file name and better file location** change.

You are taking the existing `loader` and `action` support code that currently lives in `frontend/src/router.jsx` and moving that logic into a server-only file named `frontend/src/lib/resource-routes.server.js`.

That means:

- the `fetchResources()` helper is not being reinvented
- the `fetchResourceById()` helper is not being reinvented
- the `resourceDirectoryLoader()` function is not being reinvented
- the `adminLoader()` function is not being reinvented
- the `adminAction()` function is not being reinvented

The real changes in this step are:

- the file gets a better name
- the file moves to a server-only location
- the backend URL is now clearly isolated in server code

Files ending in `.server.js` are for server-side code only. That is exactly where your backend REST calls should live.

## Code Changes

### New Code Files

```js title="frontend/src/lib/resource-routes.server.js"
import { redirect } from 'react-router';

const API_BASE_URL = process.env.RESOURCE_API_BASE_URL ?? 'http://localhost:3000';

async function fetchResources() {
  const res = await fetch(`${API_BASE_URL}/resources`);

  if (!res.ok) {
    throw new Error(`Could not load resources: ${res.status}`);
  }

  return res.json();
}

async function fetchResourceById(resourceId) {
  const res = await fetch(`${API_BASE_URL}/resources/${resourceId}`);

  if (!res.ok) {
    throw new Error(`Could not load resource: ${res.status}`);
  }

  return res.json();
}

export async function resourceDirectoryLoader() {
  const resources = await fetchResources();
  return { resources };
}

export async function adminLoader({ params }) {
  const resources = await fetchResources();

  if (!params.resourceId) {
    return {
      resources,
      resourceId: null,
      selectedResource: null,
    };
  }

  const selectedResource = await fetchResourceById(params.resourceId);

  return {
    resources,
    resourceId: params.resourceId,
    selectedResource,
  };
}

export async function adminAction({ request, params }) {
  const formData = await request.formData();

  const payload = {
    title: formData.get('title'),
    category: formData.get('category'),
    summary: formData.get('summary'),
    location: formData.get('location'),
    hours: formData.get('hours'),
    contact: formData.get('contact'),
    virtual: formData.get('virtual') === 'on',
    openNow: formData.get('openNow') === 'on',
  };

  const isEditing = Boolean(params.resourceId);
  const url = isEditing
    ? `${API_BASE_URL}/resources/${params.resourceId}`
    : `${API_BASE_URL}/resources`;
  const method = isEditing ? 'PUT' : 'POST';

  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Could not ${isEditing ? 'update' : 'create'} resource`);
  }

  const savedResource = await res.json();

  return redirect(`/admin/${savedResource.id}`);
}
```

## Phase 10: Add Route Modules That Reuse Your Existing Pages

Notice what happens here: you do **not** rewrite `ResourceDirectoryPage.jsx` or `AdminPage.jsx`. Instead, you wrap them with small route modules.

That is how you keep the migration small.

## Code Changes

### New Code Files

```js title="frontend/src/routes/home.jsx"
import ResourceDirectoryPage from '../pages/ResourceDirectoryPage';
import { resourceDirectoryLoader } from '../lib/resource-routes.server';

export const loader = resourceDirectoryLoader;

export default function HomeRoute() {
  return <ResourceDirectoryPage />;
}
```

### New Code Files

```js title="frontend/src/routes/admin.jsx"
import AdminPage from '../pages/AdminPage';
import { adminAction, adminLoader } from '../lib/resource-routes.server';

export const loader = adminLoader;
export const action = adminAction;

export default function AdminRoute() {
  return <AdminPage />;
}
```

### New Code Files

```js title="frontend/src/routes/admin.$resourceId.jsx"
import AdminPage from '../pages/AdminPage';
import { adminAction, adminLoader } from '../lib/resource-routes.server';

export const loader = adminLoader;
export const action = adminAction;

export default function AdminResourceRoute() {
  return <AdminPage />;
}
```

## Phase 11: Remove the Old Data Mode Entry Files

Once Framework Mode is in place, you no longer need:

- `frontend/src/main.jsx`
- `frontend/src/router.jsx`

Delete both files after creating the new Framework Mode files above.

This does **not** mean all of the old `router.jsx` logic disappears.

Instead, the old file is being split by responsibility:

- the route configuration part moves into `frontend/src/routes.js`
- the backend-facing loader and action code moves into `frontend/src/lib/resource-routes.server.js`

So for this migration, `frontend/src/router.jsx` is mostly being replaced by **better-named Framework Mode files**, not rewritten from scratch.

At this point, deleting the old files is just cleanup:

- delete `frontend/src/main.jsx` because Framework Mode no longer uses a manual `RouterProvider` entry
- delete `frontend/src/router.jsx` because its responsibilities have already been moved into `src/routes.js` and `src/lib/resource-routes.server.js`

## Phase 12: Make the `sessionStorage` Hook SSR-Safe

This step is required because the server cannot read `sessionStorage`.

On the server:

- `window` does not exist
- `sessionStorage` does not exist

Guard the hook so it only touches browser storage when running in the browser.

There is one more detail that matters for SSR correctness:

- do **not** read `sessionStorage` inside the initial `useState(() => ...)` call

If you do that, the server render will start with `null`, but the browser hydration render may start with a stored resource object. That can create a hydration mismatch because the server HTML and the browser's first render no longer agree.

Instead:

- start with `null`
- read `sessionStorage` in a browser-only effect after hydration
- skip the first persistence pass so you do not accidentally erase a stored value before reading it

It is important to understand **why** this guard is needed:

- During SSR, React renders the component tree on the server to produce the initial HTML.
- During hydration, React runs the component again in the browser and connects it to the server-rendered markup.

That means this hook can participate in both environments:

- the `useState(() => ...)` initializer can run during the server render, so it must not assume that `window` or `sessionStorage` exist
- the `useEffect(...)` callback only runs in the browser after hydration, but keeping the guard there is still a clear and safe pattern

So the short version is:

- server render: browser globals do not exist
- browser hydration: browser globals do exist

Your hook must be safe in both situations.

## Code Changes

### Incremental Code Changes

```diff lang="js" title="frontend/src/hooks/useSelectedResource.js"
- import { useEffect, useState } from 'react';
+ import { useEffect, useRef, useState } from 'react';
  
  const STORAGE_KEY = 'selectedResource';
  
  export function useSelectedResource() {
-   const [selectedResource, setSelectedResource] = useState(() => {
-     const stored = sessionStorage.getItem(STORAGE_KEY);
-
-     if (stored) {
-       try {
-         return JSON.parse(stored);
-       } catch {
-         return null;
-       }
-     }
-     
-     return null;
-   });
+   const [selectedResource, setSelectedResource] = useState(null);
+   const hasLoadedFromStorage = useRef(false);
+
+   useEffect(() => {
+     if (typeof window === 'undefined') {
+       return;
+     }
+
+     const stored = sessionStorage.getItem(STORAGE_KEY);
+
+     if (!stored) {
+       hasLoadedFromStorage.current = true;
+       return;
+     }
+
+     try {
+       setSelectedResource(JSON.parse(stored));
+     } catch {
+       sessionStorage.removeItem(STORAGE_KEY);
+     } finally {
+       hasLoadedFromStorage.current = true;
+     }
+   }, []);
  
    useEffect(() => {
-     if (selectedResource === null) {
+     if (typeof window === 'undefined' || !hasLoadedFromStorage.current) {
+       return;
+     }
+
+     if (selectedResource === null) {
        sessionStorage.removeItem(STORAGE_KEY);
        return;
      }
  
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(selectedResource));
    }, [selectedResource]);
  
    return [selectedResource, setSelectedResource];
  }
```

## Phase 13: Provide a Server Runtime

At this point, the project is very close to working, but there is one more SSR requirement.

When you run `npm run dev`, React Router needs to know which server runtime to use for SSR. In some setups, it can infer Node automatically. In other setups, you may see an error like this:

> Error: Could not determine server runtime. Please install `@react-router/node`, or provide a custom `entry.server.tsx/jsx` file in your app directory.

For this project, you have two valid ways to complete the SSR retrofit.

### Option A: Write a Custom `entry.server.jsx`

Choose this option if you want to see and control the server entry file directly.

This is useful when you want to:

- make the SSR entry point explicit
- understand how the server turns a request into an HTML response
- customize SSR behavior later

Because this project uses `src` as the React Router app directory, the file must be created here:

- `frontend/src/entry.server.jsx`

## Code Changes

### New Code Files

```js title="frontend/src/entry.server.jsx"
import { ServerRouter } from 'react-router';
import { renderToReadableStream } from 'react-dom/server';

export default async function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  routerContext,
) {
  let didError = false;

  const body = await renderToReadableStream(
    <ServerRouter context={routerContext} url={request.url} />,
    {
      signal: request.signal,
      onError(error) {
        didError = true;
        console.error(error);
      },
    },
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response(body, {
    headers: responseHeaders,
    status: didError ? 500 : responseStatusCode,
  });
}
```

Notes about this option:

- this is a simple, explicit server entry
- it keeps the server rendering logic visible in your project
- for a Node deployment, React's `renderToPipeableStream()` is generally the more Node-native streaming API, but `renderToReadableStream()` is a straightforward option for a project like this

### Option B: Install `@react-router/node`

Choose this option if you want the simplest completion path for a Node-based project.

This is useful when you want to:

- keep the setup shorter
- avoid introducing a custom server entry file right away
- let React Router use its default Node server entry behavior

## Terminal Commands

```ps title="Frontend - install the React Router Node runtime adapter"
cd frontend
npm install @react-router/node
```

Notes about this option:

- this is usually the simpler option for a Node-based project
- it satisfies the runtime detection error without adding another source file
- you can still introduce a custom `entry.server.jsx` later if you want to learn more about SSR internals

### Which Option Should You Choose?

For most projects, **Option B** is the easier path because it adds one package and keeps the migration moving.

Choose **Option A** if you specifically want to understand that SSR needs a real server entry point and you want to see how `ServerRouter` becomes a streamed HTML response.

## Phase 14: Start the App in Framework Mode

At this point:

- the backend stays on port `3000`
- the frontend is now served by React Router Framework Mode
- your route `loader` and `action` functions can call the backend from the server

## Terminal Commands

```ps title="Frontend - start the React Router framework-mode dev server"
cd frontend
npm run dev
```

## Terminal Commands

```ps title="Backend - make sure the REST API is still running"
cd backend
npm start
```

## Phase 15: Verify That the Browser Is No Longer Calling the Backend Directly

Open your browser developer tools and test:

1. Load `/`
2. Navigate to `/admin`
3. Open `/admin/:resourceId`
4. Submit the admin form to create a resource
5. Submit the admin form to update a resource

What you want to see:

- the browser should no longer show direct application `fetch()` calls to `http://localhost:3000/resources`
- the frontend bundle should no longer contain route code that directly references the backend API URL
- backend calls should live in `frontend/src/lib/resource-routes.server.js`

You can also verify the source tree from the terminal:

## Terminal Commands

```ps title="Frontend - verify where the backend API URL appears in the source tree"
cd frontend
rg -n "http://localhost:3000|API_BASE_URL" src
```

After the migration, the only frontend source file that should contain the backend base URL is:

- `src/lib/resource-routes.server.js`

That is exactly what you want.

## Phase 16: What Stayed the Same

To keep the migration small, these files should remain mostly or completely unchanged:

- `frontend/src/App.jsx`
- `frontend/src/pages/ResourceDirectoryPage.jsx`
- `frontend/src/pages/AdminPage.jsx`
- `frontend/src/components/*`

That is the main benefit of this retrofit strategy:

- you keep your presentational React code
- you keep your route-level data model
- you move the runtime from client-only Data Mode to SSR-capable Framework Mode

## Summary of the Architecture Change

Before this lesson:

- `createBrowserRouter()` lived in `src/router.jsx`
- `RouterProvider` lived in `src/main.jsx`
- the frontend source contained direct backend REST URLs

After this lesson:

- route configuration lives in `src/routes.js`
- the document shell lives in `src/root.jsx`
- route modules live in `src/routes/*`
- backend calls live in `src/lib/resource-routes.server.js`
- the frontend can render through SSR
- the browser no longer needs to know your backend REST endpoints

## Assessment Checklist

- The app runs with `react-router dev`
- `src/main.jsx` has been removed
- `src/router.jsx` has been removed
- `src/routes.js` defines the route map
- `src/root.jsx` defines the root route module
- API calls live in a `.server.js` file
- `useSelectedResource()` is SSR-safe
- The browser no longer directly calls `http://localhost:3000/resources` during normal app navigation and form submission

## Recommended Refactorings

After the migration is working, it is reasonable to do a second pass to improve code maintainability.

These refactorings are **recommended follow-up work**, not part of the required migration steps.

Areas to review include:

- simplifying control flow to avoid unnecessary or hard-to-follow multiple `return` statements
- extracting helper functions when a block of logic is starting to become deeply nested
- separating routing concerns from data-access concerns as clearly as possible
- reviewing SSR guard code to see whether small helper functions would make the intent easier to read

Some likely places to review after the migration include:

- `frontend/src/hooks/useSelectedResource.js`
- `frontend/src/lib/resource-routes.server.js`
- `frontend/src/routes/admin.jsx`
- `frontend/src/routes/admin.$resourceId.jsx`

The goal of this follow-up pass is not to change behavior. The goal is to make the new Framework Mode structure easier to read, explain, test, and maintain.

## Optional Follow-Up Exercises

1. Add a route error boundary for loader and action failures.
2. Move `RESOURCE_API_BASE_URL` into environment configuration instead of using the localhost fallback.
3. Add validation to the admin action and return field errors.
4. Replace the `sessionStorage`-based selected resource behavior with a route param or search param so the selected state is fully URL-driven.
   - Route param example: `/resources/tutoring`
   - Search param example: `/?selected=tutoring`
   - Use a route param when the selected resource is the main thing being viewed on that page and should feel like its own address.
   - Use a search param when the selection is more like UI state layered onto the current page, similar to a filter, sort choice, or temporary selection.

## Reference Reading

- React Router framework adoption from `RouterProvider`
- React Router framework routing
- React Router `root.jsx`
- React Router `react-router.config.js`
- React Router `.server` modules

## Appendix

These notes are supplementary. They are here to help you understand the broader implications of moving from a fully client-rendered frontend to an SSR-capable application.

### 1. Reasons to Switch to SSR

Server-side rendering can be a good fit when you want to improve the experience of the **initial page load**.

Common reasons to adopt SSR include:

- faster first paint for users because the server can send meaningful HTML instead of a mostly empty shell
- better perceived performance because users can see page structure and content sooner
- improved support for crawlers, link previews, and other tools that benefit from server-rendered HTML
- a cleaner place to run server-only code such as backend API requests, secrets-aware integration code, or request-time logic
- a simpler mental model for hiding backend endpoint details from the browser bundle

SSR does **not** automatically make every interaction faster.

After hydration, your app still behaves like a React application in the browser. The biggest SSR benefit is usually the first render and the ability to move certain work to the server.

### 2. Hosting Implications When Moving to SSR

Moving from a static site to SSR changes how the frontend must be deployed.

With a static frontend:

- you can often host only HTML, CSS, and JavaScript files
- a CDN or static hosting provider may be enough
- there is no frontend server process running your React code at request time

With SSR:

- your application now needs a server runtime for request-time rendering
- the host must be able to run the built server output
- deployment usually becomes more like hosting an application server than hosting a simple static site

That means you should now think about:

- where the server-rendered app will run
- what port or process manager it will use
- how environment variables such as `RESOURCE_API_BASE_URL` will be provided
- how frontend and backend services will communicate in development and production
- how logs, crashes, and restarts will be monitored

In other words, SSR adds capability, but it also adds operational responsibility.

### 3. Hydration Considerations and Other "Gotchas"

Hydration is the process where React takes the HTML produced by the server and attaches the client-side application behavior to it in the browser.

For hydration to work cleanly, the browser's first render must match the server-rendered HTML closely enough that React can attach to it without confusion.

Common gotchas include:

- reading browser-only globals such as `window`, `document`, `localStorage`, or `sessionStorage` during render
- generating different output on the server and the client for the first render
- depending on unstable values such as random numbers, timestamps, or browser-only state during the initial render
- assuming `useEffect()` runs on the server when it only runs in the browser after hydration
- placing backend request logic in shared client code instead of in server-only modules

In this lesson, `frontend/src/hooks/useSelectedResource.js` is a good example of an SSR-sensitive file. A hook like this must be careful not to let the server render one UI state while the browser immediately renders a different one during hydration.

When debugging SSR problems, ask these questions:

- Does this code run during render, or only after render?
- Does this code assume a browser environment?
- Could the first client render produce different output than the server render?
- Should this logic live in a `.server.js` file instead?

A good rule of thumb is:

- if code depends on the browser, delay it until after hydration
- if code depends on the server, isolate it in server-only modules
- if code affects the initial HTML, make sure the server and browser agree on that initial result
