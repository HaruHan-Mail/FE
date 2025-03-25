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
<<<<<<< HEAD
import ContentDetail from './pages/ContentDetail.jsx';
=======
import Archive from './pages/Archive.jsx'; // 추가된 아카이브 페이지
>>>>>>> origin/feature-total-content
import LoadingWrapper from './components/common/LoadingWrapper.jsx';

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
    element: <Unsubscribe />,
  },
  {
    path: '/feedback',
    element: <Feedback />,
  },
  {
    path: '/setting',
    element: <Setting />,
  },
  {
<<<<<<< HEAD
    path: '/content',
    element: <ContentDetail />,
=======
    path: '/archive', // 아카이브 페이지 라우트 추가
    element: <Archive />,
>>>>>>> origin/feature-total-content
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
