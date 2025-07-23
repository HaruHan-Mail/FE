import { Link } from 'react-router-dom';
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
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 3rem;
  max-width: 360px;
  width: 100%;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0.5rem 0;
`;

const Content = styled.p`
  font-size: 1.125rem;
  margin: 1rem 0 2rem;
`;

const HomeLink = styled(Link)`
  display: inline-block;
  padding: 0.75rem 2rem;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 12px;
  text-decoration: none;
  font-size: 1rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const AccessDeniedSection = () => {
  return (
    <FullScreen initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Card
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 12 }}
      >
        <Title>접근 제한</Title>
        <Content>구독한 사용자만 접근 가능합니다.</Content>
        <HomeLink to="/">메인으로 돌아가기</HomeLink>
      </Card>
    </FullScreen>
  );
};

export default AccessDeniedSection;
