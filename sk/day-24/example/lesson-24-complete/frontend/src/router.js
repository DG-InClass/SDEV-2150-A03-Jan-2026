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
