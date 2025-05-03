import React from 'react';
import '../css/FormSection.css';

/**
 * 폼의 섹션을 나타내는 컴포넌트
 */
const FormSection = ({ title, children }) => {
  return (
    <div className="form-section">
      {title && <div className="form-section-title">{title}</div>}
      <div className="form-section-content">
        {children}
      </div>
    </div>
  );
};

export default FormSection; 