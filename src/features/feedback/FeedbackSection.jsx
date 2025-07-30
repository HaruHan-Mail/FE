import { useState } from 'react';
import Swal from 'sweetalert2';
import { submitFeedback } from '@apis/userFeedbackApi';
import styled from '@emotion/styled';
import SubmitButton from '@common/SubmitButton';

const MAX_LENGTH = 100;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  height: 90vh;
`;

const Card = styled.div`
  width: 100%;
  max-width: 480px;
  background: var(--white);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: var(--black);
  margin: 0;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 140px;
  padding: 1rem;
  border: 1px solid var(--grey);
  border-radius: 8px;
  resize: none;
  font-size: 1rem;
  box-sizing: border-box;
  transition:
    border-color 0.3s ease,
    transform 0.2s ease;
  &:focus {
    outline: none;
    border-color: var(--primary);
    transform: scale(1.02);
  }
`;

const Counter = styled.span`
  align-self: flex-end;
  font-size: 1rem;
  color: var(--l-grey);
`;

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackSubmit = async () => {
    if (!feedback.trim()) {
      await Swal.fire({
        icon: 'warning',
        title: '피드백이 비어있습니다.',
        text: '내용을 입력한 후 제출해주세요!',
        confirmButtonColor: '#e86912',
        confirmButtonText: '확인',
      });
      return;
    }

    const result = await Swal.fire({
      icon: 'question',
      title: '피드백을 제출하시겠습니까?',
      text: '제출 후 입력창이 초기화됩니다.',
      showCancelButton: true,
      confirmButtonColor: '#e86912',
      cancelButtonColor: '#717171',
      confirmButtonText: '제출',
      cancelButtonText: '취소',
    });

    if (result.isConfirmed) {
      try {
        await submitFeedback(feedback);
        setFeedback('');
        await Swal.fire({
          icon: 'success',
          title: '피드백 제출 완료',
          text: '소중한 의견 감사합니다!',
          confirmButtonColor: '#e86912',
          confirmButtonText: '확인',
        });
      } catch (error) {
        console.error('피드백 전송 실패: ', error);
        await Swal.fire({
          icon: 'error',
          title: '제출 실패',
          text: '다시 시도해주세요.',
          confirmButtonColor: '#e86912',
          confirmButtonText: '확인',
        });
      }
    }
  };

  return (
    <Container>
      <Card>
        <Title>HaruHan 피드백</Title>
        <TextArea
          maxLength={MAX_LENGTH}
          placeholder="HaruHan 서비스에 관한 피드백을 입력해주세요. (최대 100자)"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <Counter>
          {feedback.length} / {MAX_LENGTH}
        </Counter>
        <SubmitButton text="제출" onClick={handleFeedbackSubmit} />
      </Card>
    </Container>
  );
};

export default FeedbackSection;
