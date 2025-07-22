import React from 'react';
import '../css/FormField.css';

/**
 * 재사용 가능한 폼 필드 컴포넌트
 */
const FormField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  helpText,
  required = false,
  optional = false,
  type = 'text',
  className = '',
}) => {
  return (
    <div className={`form-field ${className}`}>
      <label className="form-field-label">
        {label}
        {required && <span className="field-required">*</span>}
        {optional && <span className="field-optional">(선택사항)</span>}
      </label>
      <input
        className="form-field-input"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {helpText && <p className="field-help-text">{helpText}</p>}
    </div>
  );
};

export default FormField; 