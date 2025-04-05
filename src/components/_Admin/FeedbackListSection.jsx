import React, { useEffect, useState } from 'react';
import './css/FeedbackListSection.css';
import { fetchAllFeedback } from '../../apis/adminApi';

const FeedbackListSection = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const result = await fetchAllFeedback();
        if (result.stateCode === 200) {
          setFeedbackList(result.data);
        } else {
          console.error('API 요청 실패:', result.message);
        }
      } catch (err) {
        console.error('피드백 불러오기 실패: ', err);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <section className="feedback-list-container">
      {feedbackList.map((item, index) => (
        <div key={index} className="feedback-list-content-container">
          <p className="feedback-list-content">{item.feedbackContent}</p>
          <p className="feedback-list-content-date">{item.createdAt.slice(0, 10)}</p>
        </div>
      ))}
    </section>
  );
};

export default FeedbackListSection;
