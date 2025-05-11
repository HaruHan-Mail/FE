import React from 'react';
import '../css/ArrayInput.css';

/**
 * 배열 형태의 입력 필드를 관리하는 컴포넌트
 */
const ArrayInput = ({
  values = [''],
  onChange,
  onAdd,
  onRemove,
  placeholder,
  addButtonText = '+ 항목 추가',
}) => {
  return (
    <div className="array-input-container">
      {values.map((value, idx) => (
        <div key={idx} className="array-input-item">
          <input
            className="array-input-field"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(idx, e.target.value)}
          />
          {values.length > 1 && (
            <button
              type="button"
              className="array-input-remove"
              onClick={() => onRemove(idx)}
              aria-label="항목 삭제"
              title="항목 삭제"
            >
              ×
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        className="array-input-add-button"
        onClick={onAdd}
      >
        {addButtonText}
      </button>
    </div>
  );
};

export default ArrayInput; 