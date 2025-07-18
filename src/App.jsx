import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css';
import RouteGuard from './components/common/RouteGuard.jsx';
import AdminRouteGuard from './components/common/AdminRouteGuard.jsx';
import LoadingSpinner from './components/common/LoadingSpinner.jsx';
import Home from './pages/Home.jsx';

const queryClient = new QueryClient();

const NotFound = lazy(() => import('./pages/NotFound.jsx'));
const Policy = lazy(() => import('./pages/Policy.jsx'));
const Unsubscribe = lazy(() => import('./pages/Unsubscribe.jsx'));
const Feedback = lazy(() => import('./pages/Feedback.jsx'));
const Setting = lazy(() => import('./pages/Setting.jsx'));
const Content = lazy(() => import('./pages/Content.jsx'));
const ContentDetail = lazy(() => import('./pages/ContentDetail.jsx'));
const TeamInfo = lazy(() => import('./pages/TeamInfo.jsx'));
const Admin = lazy(() => import('./pages/Admin.jsx'));


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/policy',
    element: <Policy />,
  },
  {
    path: '/unsubscribe',
    element: (
      <RouteGuard>
        <Unsubscribe />
      </RouteGuard>
    ),
  },
  {
    path: '/feedback',
    element: (
      <RouteGuard>
        <Feedback />
      </RouteGuard>
    ),
  },
  {
    path: '/setting',
    element: (
      <RouteGuard>
        <Setting />
      </RouteGuard>
    ),
  },
  {
    path: '/content/mine',
    element: (
      <RouteGuard>
        <Content />
      </RouteGuard>
    ),
  },
  {
    path: '/content/:contentId',
    element: (
        <ContentDetail />
    ),
  },
  {
    path: '/teamInfo',
    element: <TeamInfo />,
  },
  {
    path: '/admin',
    element: (
      <AdminRouteGuard>
        <Admin />
      </AdminRouteGuard>
    )
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
