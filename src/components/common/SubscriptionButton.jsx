import styled from '@emotion/styled';
import SubscriptionModal from '../modal/SubscriptionModal';
import useModal from '../../hooks/useModal';

const Button = styled.button`
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
  font-weight: 500;
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  /* 크기별 스타일 */
  ${props => props.size === 'large' && `
    font-size: 1.5rem;
    padding: 1rem 2rem;
  `}
  
  ${props => props.size === 'medium' && `
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  `}
`;

const SubscriptionButton = ({ size = "medium" }) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Button size={size.toLowerCase()} onClick={openModal}>
        구독하기
      </Button>
      {isModalOpen && <SubscriptionModal isOpen={isModalOpen} onClose={closeModal} />}
    </>
  );
};

export default SubscriptionButton;
