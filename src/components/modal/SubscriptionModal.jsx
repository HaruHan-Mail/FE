import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../css/SubscriptionModal.css';
import Subscription from './Subscription';
import Verification from './Verification';

const SubscriptionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [step, setStep] = useState('subscription');
  const [email, setEmail] = useState('');
  const [preferedTime, setPreferedTime] = useState('');
  const [isDaily, setIsDaily] = useState(false);

  // Subscription에서 onSuccess 호출 시 email, preferedTime, isDaily를 전달하도록 변경
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

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
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
      </div>
    </div>,
    document.body,
  );
};

export default SubscriptionModal;
