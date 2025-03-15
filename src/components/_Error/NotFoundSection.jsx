import './css/NotFoundSection.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundSection = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Page Not Found</p>
      <p>{countdown}초 후 홈으로 이동합니다...</p>
    </div>
  );
};

export default NotFoundSection;
