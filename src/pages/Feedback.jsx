import React, { useState } from 'react';
import MailLayout from '../components/Layout/MailLayout';
import '../components/css/Feedback.css';
import Swal from 'sweetalert2';
import { feedbackSubmit } from '../apis/feedbackApi';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackSubmit = async () => {
    // Swal 띄우기
    const result = await Swal.fire({
      icon: 'question',
      title: '피드백을 제출하시겠습니까?',
      text: '피드백을 제출하고 입력창을 초기화합니다!',
      showCancelButton: true, // 취소 버튼 보이기
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '제출',
      cancelButtonText: '취소',
    });

    // 제출 버튼 클릭 시
    if (result.isConfirmed) {
      try {
        const response = await feedbackSubmit(feedback);

        if (response.stateCode === 200) {
          // textarea 비우기
          setFeedback('');

          // Swal 띄우기
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
    <MailLayout>
      <section className="FeedbackContainer">
        <h1 className="FeedbackTitle">HaruHan 피드백</h1>
        <textarea
          className="FeedbackTextarea"
          maxLength="500"
          placeholder="HaruHan 서비스에 관한 피드백을 자유롭게 입력해주세요. (최대 500자)"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <button className="FeedbackSubmitButton" onClick={handleFeedbackSubmit}>
          제출
        </button>
      </section>
    </MailLayout>
  );
};

export default Feedback;
