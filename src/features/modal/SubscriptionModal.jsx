import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';
import Subscription from './Subscription';
import Verification from './Verification';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  box-sizing: border-box;

  /* 애니메이션 효과 */
  opacity: 0;
  animation: fadeIn 0.2s ease-out forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  /* 모바일 최적화 */
  @media (max-width: 768px) {
    padding: 0.5rem;
    padding-top: 5vh;
  }
`;

// 2025 트렌드: 더 세련된 모달 컨테이너
const ModalContainer = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  background: transparent;
  border-radius: 1.25rem;
  overflow: hidden;

  /* 애니메이션 효과 */
  transform: scale(0.95) translateY(20px);
  animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  @keyframes slideUp {
    to {
      transform: scale(1) translateY(0);
    }
  }

  @media (max-width: 768px) {
    border-radius: 1rem;
    width: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1.5px solid rgba(232, 105, 18, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  font-size: 1.25rem;
  color: #666;
  font-weight: 300;

  @media (max-width: 768px) {
    top: 0.75rem;
    right: 0.75rem;
    width: 2.25rem;
    height: 2.25rem;
    font-size: 1.125rem;
  }

  &:hover {
    background: rgba(232, 105, 18, 0.1);
    border-color: rgba(232, 105, 18, 0.2);
    color: var(--primary);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(232, 105, 18, 0.2);
  }
`;

const SubscriptionModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState('subscription');
  const [email, setEmail] = useState('');
  const [preferedTime, setPreferedTime] = useState('');
  const [isDaily, setIsDaily] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubscriptionSuccess = (email, preferedTime, isDaily) => {
    setEmail(email);
    setPreferedTime(preferedTime);
    setIsDaily(isDaily);
    setStep('verification');
  };

  const handleVerificationSuccess = () => {
    onClose();
  };

  const handleTimeout = () => {
    alert('인증 시간이 만료되었습니다. 다시 시도해주세요.');
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <CloseButton onClick={onClose} aria-label="모달 닫기" type="button">
          ×
        </CloseButton>
        {step === 'subscription' && <Subscription onSuccess={handleSubscriptionSuccess} />}
        {step === 'verification' && (
          <Verification
            initialEmail={email}
            preferedTime={preferedTime}
            isDaily={isDaily}
            onVerified={handleVerificationSuccess}
            onTimeout={handleTimeout}
          />
        )}
      </ModalContainer>
    </ModalOverlay>,
    document.body,
  );
};

export default SubscriptionModal;
