# Lesson 24: Server State with TanStack Query

## Install dependencies and run the dev server

Continue working in the same React + Tailwind + DaisyUI NAIT resources project from previous lessons.

1. Move into your project directory:
```sh
cd lesson-23
```
2. Install dependencies (if needed):
```sh
npm install
```
3. Install TanStack Query:
```sh
npm install @tanstack/react-query
```
4. Start the dev server:
```sh
npm run dev
```
5. Open the provided URL in your browser

---

## Lesson focus

This lesson introduces **server state management** using **TanStack Query**.

We will:

- distinguish client state vs server state
- replace manual data fetching with TanStack Query
- implement queries for fetching data
- handle loading and error states
- introduce caching and refetching behaviour

---

## Connecting to prior lessons

In Lesson 23, we used Context to manage **shared client state**.

In the NAIT resources example, we have also been working with route-driven navigation, resource data, and selected-resource interactions. This lesson keeps that same example and changes how the resource data is fetched and managed.

Now we shift focus to a different type of state:

> Server state

Server state:

- comes from an API
- can change independently of the UI
- needs to be fetched, cached, and kept in sync

---

## Phase 1: The problem with manual data fetching

So far, data has been loaded using:

- route loaders and actions

This approach requires:

- managing loading state
- managing error state
- handling refetching
- avoiding duplicate requests

---

## Phase 2: What is TanStack Query?

TanStack Query is a library for managing **server state**.

It provides:

- data fetching
- caching
- background updates
- loading and error handling

Key idea:

> TanStack Query manages server data over time

---

## Phase 3: Setup QueryClient

Create a QueryClient and provider.

Open `main.jsx` and update:

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import './index.css';
import { router } from './router';
import { ThemeProvider } from './context/ThemeProvider';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
```

---

## Phase 4: Create a query for resources

Replace manual fetching with `useQuery`.

```jsx
import { useQuery } from '@tanstack/react-query';

function fetchResources() {
  return fetch('http://localhost:3000/resources')
    .then((res) => res.json());
}

const { data, isLoading, isError } = useQuery({
  queryKey: ['resources'],
  queryFn: fetchResources,
});
```

---

## Phase 5: Handle loading and error states

```jsx
if (isLoading) return <p>Loading resources...</p>;
if (isError) return <p>Error loading resources</p>;
```

Then render:

```jsx
<ul>
  {data.map((resource) => (
    <li key={resource.id}>{resource.title}</li>
  ))}
</ul>
```

---

## Phase 6: Replace existing resource fetch logic

Update your Results or resource-list component:

- remove `useEffect`
- remove loaders and actions
- remove local `resources` state
- rely entirely on `useQuery`

Remove all loaders and actions from `router.js`:

```js
import App from './App';
import RouteErrorBoundary from './components/layout/RouteErrorBoundary';
import ResourceDirectoryPage from './pages/ResourceDirectoryPage';
import AdminPage from './pages/AdminPage';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: ResourceDirectoryPage,
        ErrorBoundary: RouteErrorBoundary,
      },
      {
        path: 'admin',
        Component: AdminPage,
        ErrorBoundary: RouteErrorBoundary,
      },
      {
        path: 'admin/:resourceId',
        Component: AdminPage,
        ErrorBoundary: RouteErrorBoundary,
      },
    ],
  },
]);
```

Export API fetch functions from a new src/api/resources.js file:

```js
const API_BASE_URL = 'http://localhost:3000';

export async function fetchResources() {
  const res = await fetch(`${API_BASE_URL}/resources`);

  if (!res.ok) {
    throw new Error(`Could not load resources: ${res.status}`);
  }

  return res.json();
}

export async function fetchResourceById(resourceId) {
  const res = await fetch(`${API_BASE_URL}/resources/${resourceId}`);

  if (!res.ok) {
    throw new Error(`Could not load resource: ${res.status}`);
  }

  return res.json();
}
```

Key idea:

> TanStack Query owns the server data

---

## Phase 7: Stop using loader data for server state

If your pages currently use `useLoaderData()` to access resources, remove that usage for server data.

Instead:

- fetch resource data with `useQuery`
- keep React Router for routing and params only

Update `ResourceDirectoryPage.tsx` to make use of TanStack Query:

> The `...` represent existing code that will remain in the component.

```jsx
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
...
export default function ResourceDirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  ...
  const [virtualOnly, setVirtualOnly] = useState(false);

  const {
    data: resources = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['resources'],
    queryFn: fetchResources,
  });

  const selectedResourceId = selectedResource?.id ?? null;

  const {
    data: selectedResourceData,
  } = useQuery({
    queryKey: ['resource', selectedResourceId],
    queryFn: () => fetchResourceById(selectedResourceId),
    enabled: Boolean(selectedResourceId),
  });

  const displayedResource = selectedResourceData ?? selectedResource;

  if (isLoading) {
    return <p>Loading resources...</p>;
  }

  if (isError) {
    return <p>Error loading resources: {error.message}</p>;
  }

  return (
    <>
      ...
      <aside className="md:col-span-1 lg:col-span-1">
        {displayedResource ? (
          <Details resource={displayedResource} />
        ) : (
          <div className="text-sm text-base-content/70">
            Select a resource to view details.
          </div>
        )}
      </aside>
    </>
  );
```

Key idea:

> React Router handles navigation, TanStack Query handles server data

---

## Phase 8: Query keys and caching

Query keys identify cached data.

```jsx
queryKey: ['resources']
```

TanStack Query will:

- cache results
- reuse data across components
- avoid duplicate requests

---

## Phase 9: Fetch a selected resource with a dynamic query

Use query keys with parameters for resource-specific data. In the resource directory page, we used the following:

```jsx
const {
    data: selectedResourceData,
  } = useQuery({
    queryKey: ['resource', selectedResourceId],
    queryFn: () => fetchResourceById(selectedResourceId),
    enabled: Boolean(selectedResourceId),
  });
```

Make an update to set a "stale time", which creates a unique cache entry per resource.

```jsx
const {
    data: selectedResourceData,
  } = useQuery({
    // cache the resource for some time
    staleTime: 5 * 60 * 1000, // 5 minutes
    queryKey: ['resource', selectedResourceId],
    queryFn: () => fetchResourceById(selectedResourceId),
    enabled: Boolean(selectedResourceId),
  });
```

Now, inspect the Network tab in DevTools and move back and forth between displayed results. You should note that there are no additional requests being sent after the initial request for each uniqe resource.

---

## Phase 10: Mutations with useMutation

Replace form actions with TanStack Query mutations.

Let's update the AdminPage to make use of TanStack Query as well.

First, create the necessary API function in src/api/resources.js:

```js
const API_BASE_URL = 'http://localhost:3000';

// API Helper functions for data creation and updates
export async function createResource(payload) {
  const res = await fetch(`${API_BASE_URL}/resources`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Could not create resource: ${res.status}`);
  }

  return res.json();
}

export async function updateResource(resourceId, payload) {
  const res = await fetch(`${API_BASE_URL}/resources/${resourceId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Could not update resource: ${res.status}`);
  }

  return res.json();
}
...
```

Now, we can put them to use in `AdminPage.jsx`:

```jsx
import { NavLink, useNavigate, useParams } from 'react-router';
import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import Card from '../components/ui/Card';
...

export default function AdminPage() {
  // const navigation = useNavigation();
  // const isSubmitting = navigation.state === 'submitting';
  const { resourceId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: resources = [],
    isLoading: isLoadingResources,
    isError: isResourcesError,
    error: resourcesError,
  } = useQuery({
    queryKey: ['resources'],
    queryFn: fetchResources,
  });

  const {
    data: selectedResource,
    isLoading: isLoadingSelectedResource,
    isError: isSelectedResourceError,
    error: selectedResourceError,
  } = useQuery({
    queryKey: ['resource', resourceId],
    queryFn: () => fetchResourceById(resourceId),
    enabled: Boolean(resourceId),
  });

  const saveResourceMutation = useMutation({
    mutationFn: ({ payload, resourceId: currentResourceId }) => {
      return currentResourceId
        ? updateResource(currentResourceId, payload)
        : createResource(payload);
    },
    onSuccess: async (savedResource) => {
      await queryClient.invalidateQueries({ queryKey: ['resources'] });
      await queryClient.invalidateQueries({ queryKey: ['resource', savedResource.id] });
      navigate(`/admin/${savedResource.id}`);
    },
  });

  const isSubmitting = saveResourceMutation.isPending;

  const initialFormData = selectedResource
    ? {
      ...
    };
  
  function handleSubmitResource(formData) {
    saveResourceMutation.mutate({
      payload: formData,
      resourceId,
    });
  }

  if (isLoadingResources) {
    return <p>Loading resources...</p>;
  }

  if (isResourcesError) {
    return <p>Error loading resources: {resourcesError.message}</p>;
  }

  if (resourceId && isLoadingSelectedResource) {
    return <p>Loading selected resource...</p>;
  }

  if (resourceId && isSelectedResourceError) {
    return <p>Error loading selected resource: {selectedResourceError.message}</p>;
  }

  return (
    <>
      ...
      <Card title="Resource Form">
          <div className="card-body">
            {saveResourceMutation.isError && (
              <p className="text-sm text-red-600">
                Error saving resource: {saveResourceMutation.error.message}
              </p>
            )}
            
            <ResourceForm
              key={resourceId ?? 'new'}
              initialData={initialFormData}
              isEditing={Boolean(resourceId)}
              isSubmitting={isSubmitting}
              onSubmit={handleSubmitResource}
            />
            ...
}

```

Key idea:

> Mutations update server data and refresh cached queries

---

## Phase 11: Refetching behaviour

TanStack Query automatically:

- refetches on window focus
- keeps data fresh

You can configure this if needed.

---

## Phase 12: Key distinction from Context

Context:

- for shared client state
- UI preferences
- simple shared values

TanStack Query:

- for server data
- async operations
- caching and synchronization

---

## Key Concepts Reinforced

- TanStack Query replaces loaders and actions for server data
- server state is different from client state
- TanStack Query manages fetching and caching
- queries replace manual `useEffect` data fetching
- query keys control caching behaviour

---

## Student Exercise

1. Update the useSelectedResource hook to only store the id of the selected resource. TanStack Query should be responsible for all data fetching, which will ensure that the freshest representation of the data is alwasys displayed.

---

# Push to your GitHub workbook repo

1. Stage all changes:
```sh
git add -A
```
2. Commit:
```sh
git commit -m "Lesson 24 - tanstack query walkthrough"
```
3. Push:
```sh
git push origin main
```