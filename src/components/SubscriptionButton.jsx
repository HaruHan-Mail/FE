import React, { useState } from 'react';
import './css/SubscriptionButton.css';
import SubscriptionModal from './modal/SubscriptionModal';

const SubscriptionButton = ({ size }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`SubscriptionButton${size === 'Large' ? 'Large' : 'Medium'}`}
      >
        구독하기
      </button>
      {isOpen === true && <SubscriptionModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default SubscriptionButton;
