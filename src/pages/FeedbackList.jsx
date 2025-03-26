import React from 'react';
import MailLayout from '../components/Layout/MailLayout';
import FeedbackListSection from '../components/_FeedbackList/FeedbackListSection';

const FeedbackList = () => {
  return (
    <MailLayout>
      <FeedbackListSection />
    </MailLayout>
  );
};

export default FeedbackList;