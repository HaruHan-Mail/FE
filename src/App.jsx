import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Policy from './pages/Policy.jsx';
import Unsubscribe from './pages/Unsubscribe.jsx';
import Feedback from './pages/Feedback.jsx';
import Setting from './pages/Setting.jsx';
import Content from './pages/Content.jsx';
import ContentDetail from './pages/ContentDetail.jsx';
import RouteGuard from './components/common/RouteGuard.jsx';
import TeamInfo from './pages/TeamInfo.jsx';
import Admin from './pages/Admin.jsx';
import AdminRouteGuard from './components/common/AdminRouteGuard.jsx';


const queryClient = new QueryClient();


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
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
