import React from 'react';
import '../css/SubscriptionButton.css';
import SubscriptionModal from '../modal/SubscriptionModal';
import useModal from '../../hooks/useModal';

const SubscriptionButton = ({ size }) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button
        onClick={openModal} // 함수 참조 전달
        className={`SubscriptionButton${size === 'Large' ? 'Large' : 'Medium'}`}
      >
        구독하기
      </button>
      {isModalOpen && <SubscriptionModal isOpen={isModalOpen} onClose={closeModal} />}
    </>
  );
};

export default SubscriptionButton;
