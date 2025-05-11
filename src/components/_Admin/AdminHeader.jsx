import React from 'react';
import './css/AdminSection.css';
import './css/AdminHeader.css'

const AdminHeader = ({ username }) => {
  return (
    <header className="admin-header">
      <div className="admin-logo">
        <span>Admin Dashboard</span>
      </div>
      <div className="admin-user-info">
        <span className="admin-user-name">{username}</span>
      </div>
    </header>
  );
};

export default AdminHeader; 