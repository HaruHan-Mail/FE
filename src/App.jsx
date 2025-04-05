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
import LoadingWrapper from './components/common/LoadingWrapper.jsx';
import RouteGuard from './components/common/RouteGuard.jsx';
import TeamInfo from './pages/TeamInfo.jsx';

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
      <RouteGuard >
        <Unsubscribe />
      </RouteGuard>
    ),
  },
  {
    path: '/feedback',
    element: (
      <RouteGuard >
        <Feedback />
      </RouteGuard>
    ),
  },
  {
    path: '/setting',
    element: (
      <RouteGuard >
        <Setting />
      </RouteGuard>
    ),
  },
  {
    path: '/content/mine',
    element: (
      <RouteGuard>
        <Content />
      </ RouteGuard>
    ),
  },
  {
    path: '/content/:id',
    element: (
        <ContentDetail />
  ),
  },
  {
    path: '/teamInfo',
    element: <TeamInfo />,
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
  // return <RouterProvider router={router} />;
}

export default App;
