import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminVerification from './AdminVerification';

const AdminRouteGuard = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkCode = async () => {
      const result = await AdminVerification();
      console.log(result);
      if (result) {
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
        navigate('/');
      }
    };

    checkCode();
  }, [navigate]);

  // 인증되지 않은 경우, 관리자 페이지 내용 접근 차단
  if (isAuthorized === null || !isAuthorized) return null;

  return children;
};

export default AdminRouteGuard;
