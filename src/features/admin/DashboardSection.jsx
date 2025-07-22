import LoadingSpinner from '@common/LoadingSpinner';
import './css/DashboardSection.css';

const DashboardSection = ({ dashboardStats, isLoading }) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">대시보드</h1>
      <div className="dashboard-stats">
        {dashboardStats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-title">{stat.title}</div>
            <div className="stat-value">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSection;
