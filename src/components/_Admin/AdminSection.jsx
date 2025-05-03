import React, { useState } from 'react';
import './css/AdminSection.css';
import AddContentSection from './AddContentSection';
import FeedbackListSection from './FeedbackListSection';
import UsersListSection from './UsersListSection';
import DashboardSection from './DashboardSection';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import useDashboard from '../../hooks/queries/useDashboard';
import { useFeedbacks } from '../../hooks/queries/useFeedbacks';

const AdminSection = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { data: dashboardData, isLoading: isDashboardLoading } = useDashboard();
  const { data: feedbackData, isLoading: isFeedbacksLoading } = useFeedbacks();

  // 대시보드 데이터 계산
  const dashboardStats = [
    { 
      title: '총 사용자', 
      value: dashboardData?.users?.length || 0, 
    },
    { 
      title: '총 컨텐츠',
      value: dashboardData?.contents?.length || 0,
    },
    { 
      title: '총 피드백',
      value: feedbackData?.length || 0,
    }
  ];


  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardSection dashboardStats={dashboardStats} isLoading={isDashboardLoading} />
      case 'feedback':
        return <FeedbackListSection feedbacks={feedbackData} isFeedbacksLoading={isFeedbacksLoading} />
      case 'content': 
        return <AddContentSection />
      case 'users':
        return <UsersListSection />
      default:
        return null;
    }
  };

  return (
    <div className="admin-container">
      <AdminHeader username="관리자" />
      
      <div className="admin-content">
        <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        
        <main className="admin-main">
          <div className="admin-component">
            {renderTabContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminSection;
