import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Policy from './pages/Policy.jsx';
import Unsubscribe from './pages/Unsubscribe.jsx';
import Feedback from './pages/Feedback.jsx';
import Setting from './pages/Setting.jsx';
import ContentDetail from './pages/ContentDetail.jsx';
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
    path: '/content',
    element: <ContentDetail />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
