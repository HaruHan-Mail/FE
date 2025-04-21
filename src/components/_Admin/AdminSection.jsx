import React, { useState } from 'react';
import './css/AdminSection.css';
import AddContentSection from './AddContentSection';
import FeedbackListSection from './FeedbackListSection';

const AdminSection = () => {
  const [activeTab, setActiveTab] = useState('feedback');

  return (
    <div className="admin-container">
      <header className="admin-header">
        <div className="admin-logo">
          <span>Admin Dashboard</span>
        </div>
        <div className="admin-user-info">
          <span className="admin-user-name">관리자</span>
          <div className="admin-avatar">A</div>
        </div>
      </header>

      <div className="admin-content">
        <aside className="admin-sidebar">
          <ul className="sidebar-menu">
            <li
              className={`sidebar-item ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <span className="sidebar-icon">📊</span>
              <span>대시보드</span>
            </li>
            <li
              className={`sidebar-item ${activeTab === 'feedback' ? 'active' : ''}`}
              onClick={() => setActiveTab('feedback')}
            >
              <span className="sidebar-icon">💬</span>
              <span>피드백 모아보기</span>
            </li>
            <li
              className={`sidebar-item ${activeTab === 'content' ? 'active' : ''}`}
              onClick={() => setActiveTab('content')}
            >
              <span className="sidebar-icon">📝</span>
              <span>컨텐츠 추가</span>
            </li>
            <li className="sidebar-item">
              <span className="sidebar-icon">👥</span>
              <span>사용자 관리</span>
            </li>
            <li className="sidebar-item">
              <span className="sidebar-icon">⚙️</span>
              <span>설정</span>
            </li>
          </ul>
        </aside>

        <main className="admin-main">
          {activeTab === 'dashboard' && (
            <>
              <h1 className="admin-section-title">대시보드</h1>
              <div className="admin-stats">
                <div className="stat-card">
                  <div className="stat-title">총 사용자</div>
                  <div className="stat-value">1,254</div>
                  <div className="stat-change">↑ 5.3% 지난 주 대비</div>
                </div>
                <div className="stat-card">
                  <div className="stat-title">총 컨텐츠</div>
                  <div className="stat-value">86</div>
                  <div className="stat-change">↑ 12% 지난 주 대비</div>
                </div>
                <div className="stat-card">
                  <div className="stat-title">총 피드백</div>
                  <div className="stat-value">142</div>
                  <div className="stat-change">↑ 8.7% 지난 주 대비</div>
                </div>
                <div className="stat-card">
                  <div className="stat-title">평균 사용 시간</div>
                  <div className="stat-value">24분</div>
                  <div className="stat-change negative">↓ 2.1% 지난 주 대비</div>
                </div>
              </div>
              <div className="admin-card">
                {/* 대시보드 내용은 필요에 따라 추가 */}
                <p>최근 추가된 통계 데이터가 여기에 표시됩니다.</p>
              </div>
            </>
          )}

          {(activeTab === 'feedback' || activeTab === 'content') && (
            <div className="admin-component">
              {activeTab === 'feedback' && (
                <>
                  <h2 className="admin-section-title">피드백 모아보기</h2>
                  <FeedbackListSection />
                </>
              )}
              {activeTab === 'content' && (
                <>
                  <h2 className="admin-section-title">컨텐츠 추가</h2>
                  <AddContentSection />
                </>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminSection;
