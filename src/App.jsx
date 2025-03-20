import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Policy from './pages/Policy.jsx';
import Unsubscribe from './pages/Unsubscribe.jsx';
import Feedback from './pages/Feedback.jsx';
import Setting from './pages/Setting.jsx';
import Archive from './pages/Archive.jsx'; // 추가된 아카이브 페이지
import LoadingWrapper from './components/common/LoadingWrapper.jsx';

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
    path: '/archive', // 아카이브 페이지 라우트 추가
    element: <Archive />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
