import React from 'react';
import './css/UsersListSection.css';
import useDashboard from '../../hooks/queries/useDashboard';
import LoadingSpinner from '../common/LoadingSpinner';

const UsersListSection = () => {
  const { data: dashboardData, isLoading } = useDashboard();
  
  const users = dashboardData?.users || [];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="users-list-container">
      <h2 className="admin-section-title">사용자 관리</h2>
      <div className="users-list-header">
        <div className="users-list-header-item user-id">ID</div>
        <div className="users-list-header-item user-email">이메일</div>
      </div>
      
      {users.map((user) => (
        <div key={user.userId} className="user-item">
          <div className="user-item-cell user-id">{user.userId}</div>
          <div className="user-item-cell user-email">{user.email}</div>
          
        </div>
      ))}
    </div>
  );
};

export default UsersListSection; 