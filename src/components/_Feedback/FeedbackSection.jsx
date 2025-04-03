import { useState } from 'react';
import Swal from 'sweetalert2';
import { submitFeedback } from '../../apis/userFeedbackApi';
import './css/FeedbackSection.css';
import SubmitButton from '../common/SubmitButton';

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackSubmit = async () => {
    const result = await Swal.fire({
      icon: 'question',
      title: '피드백을 제출하시겠습니까?',
      text: '피드백을 제출하고 입력창을 초기화합니다!',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '제출',
      cancelButtonText: '취소',
    });

    if (result.isConfirmed) {
      try {
        const response = await submitFeedback(feedback);

        if (response.stateCode === 200) {
          setFeedback('');
          Swal.fire({
            icon: 'success',
            title: '피드백 제출 완료',
            text: '피드백 제출을 성공적으로 완료하였습니다!',
          });
        }
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
