import { Link } from 'react-router-dom';
import './css/AccessDenied.css';

const AccessDenied = () => (
  <div className="access-denied">
    <div className="access-denied-card">
      <h1 className="access-denied-title">접근 제한</h1>
      <p className="access-denied-content">구독한 사용자만 접근 가능합니다.</p>
      <Link to="/" className="access-denied-link">
        메인으로 돌아가기
      </Link>
    </div>
  </div>
);

export default AccessDenied;
