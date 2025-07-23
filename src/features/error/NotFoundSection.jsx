import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const FullScreen = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
`;

const Card = styled(motion.div)`
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`;

const Code = styled.h1`
  font-size: 6rem;
  margin: 0;
  letter-spacing: 0.1em;
`;

const Message = styled.p`
  font-size: 1.25rem;
  margin: 1rem 0;
`;

const Countdown = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  display: block;
  margin: 1.5rem 0;
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 999px;
  background: var(--primary);
  color: #fff;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const NotFoundSection = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <FullScreen initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <Card
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 15 }}
      >
        <Code>404</Code>
        <Message>페이지를 찾을 수 없습니다.</Message>
        <Countdown>{count}초 후 홈으로 이동합니다...</Countdown>
        <Button onClick={() => navigate('/')}>홈으로 가기</Button>
      </Card>
    </FullScreen>
  );
};

export default NotFoundSection;
