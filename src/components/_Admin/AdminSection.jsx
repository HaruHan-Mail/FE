import React, { useState } from 'react';
import './css/AdminSection.css';
import AddContentSection from './AddContentSection';
import FeedbackListSection from './FeedbackListSection';

const AdminSection = () => {
  // 탭 관리 상태변수
  const [activeTab, setActiveTab] = useState('feedback');

  return (
    <section className="admin-container">
      <div className="admin-tab-container">
        <button
          className="admin-tab"
          id={activeTab === 'feedback' ? 'active-tab' : undefined}
          onClick={() => setActiveTab('feedback')}
        >
          피드백 모아보기
        </button>
        <button
          className="admin-tab"
          id={activeTab === 'content' ? 'active-tab' : undefined}
          onClick={() => setActiveTab('content')}
        >
          컨텐츠 추가
        </button>
      </div>
      <div className="admin-component">
        {activeTab === 'feedback' && <FeedbackListSection />}
        {activeTab === 'content' && <AddContentSection />}
      </div>
    </section>
  );
};

export default AdminSection;
