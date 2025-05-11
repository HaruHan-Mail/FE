import React from 'react';
import './css/AdminSidebar.css';

const AdminSidebar = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'dashboard', label: '대시보드', icon: '📊' },
    { id: 'feedback', label: '피드백 모아보기', icon: '💬' },
    { id: 'content', label: '컨텐츠 추가', icon: '📝' },
    { id: 'users', label: '사용자 관리', icon: '👥' },
    { id: 'settings', label: '설정', icon: '⚙️' },
  ];

  return (
    <aside className="admin-sidebar">
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => onTabChange(item.id)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AdminSidebar; 