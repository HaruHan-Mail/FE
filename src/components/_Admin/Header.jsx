import React from 'react';
import './css/AdminSection.css';

const Header = ({ username }) => {
  return (
    <header className="admin-header">
      <div className="admin-logo">
        <span>Admin Dashboard</span>
      </div>
      <div className="admin-user-info">
        <span className="admin-user-name">{username}</span>
        <div className="admin-avatar">{username?.charAt(0) || 'A'}</div>
      </div>
    </header>
  );
};

export default Header; 