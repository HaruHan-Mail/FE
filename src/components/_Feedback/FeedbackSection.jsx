import { useState } from 'react';
import Swal from 'sweetalert2';
import { submitFeedback } from '../../apis/userFeedbackApi';
import './css/FeedbackSection.css';
import SubmitButton from '../common/SubmitButton';

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackSubmit = async () => {
    // 공백만 입력했거나, 아무 것도 입력 안 했을 때 경고
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
      text: '피드백을 제출하고 입력창을 초기화합니다!',
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
          Swal.fire({
            icon: 'success',
            title: '피드백 제출 완료',
            text: '피드백 제출을 성공적으로 완료하였습니다!',
            confirmButtonColor: '#e86912',
            confirmButtonText: '확인',
          });
      } catch (error) {
        console.log('피드백 전송 실패: ', error.message);
      }
    }
  };

  return (
    <section className="feedback-container">
      <div className="feedback-wrapper">
        <h1 className="feedback-title">HaruHan 피드백</h1>
        <textarea
          className="feedback-textarea"
          maxLength="100"
          placeholder="HaruHan 서비스에 관한 피드백을 입력해주세요. (최대 100자)"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <span className="feedback-count">{feedback.length} / 100</span>
        <SubmitButton text="제출" onClick={handleFeedbackSubmit} />
      </div>
    </section>
  );
};

export default FeedbackSection;
