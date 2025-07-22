import { useLocation } from 'react-router-dom';
import AccessDenied from '@features/error/AccessDenied';

const ALLOWED_PATHS = ['/', '/policy', '/content/mine'];
const EMAIL_REQUIRED_PATHS = ['/content', '/setting', '/feedback', '/unsubscribe'];

const RouteGuard = ({ children }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  if (EMAIL_REQUIRED_PATHS.includes(location.pathname)) {
    if (!params.has('email')) {
      return <AccessDenied />;
    }
    return children;
  }

  if (!ALLOWED_PATHS.includes(location.pathname)) {
    return <AccessDenied />;
  }

  return children;
};

export default RouteGuard;
