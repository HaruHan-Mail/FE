import React from 'react';
import './css/AdminSection.css';

const StatsCards = ({ stats }) => {
  return (
    <div className="admin-stats">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-title">{stat.title}</div>
          <div className="stat-value">{stat.value}</div>
          <div className={`stat-change ${!stat.isPositive ? 'negative' : ''}`}>
            {stat.isPositive ? '↑' : '↓'} {stat.change}% 지난 주 대비
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards; 