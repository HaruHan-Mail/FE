import React, { useState } from 'react';
import './css/AddContentSection.css';
import { contentRequest } from '../../mocks/addContentRequest.js';
import { saveNewContent } from '../../apis/adminApi.js';
import Swal from 'sweetalert2';

const initialData = {
  title: '',
  summary: '',
  background: [''],
  importance: [''],
  tip: [''],
  additionalResources: [''],
};

const AddContentSection = () => {
  const [contentData, setContentData] = useState(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // title과 summary는 단일 입력, 나머지는 배열 처리
  const isArrayField = (title) => !['title', 'summary'].includes(title);

  const handleInputChange = (title, value) => {
    setContentData((prev) => ({
      ...prev,
      [title]: value,
    }));
  };

  const handleArrayInputChange = (title, index, value) => {
    setContentData((prev) => {
      const updatedArray = prev[title] ? [...prev[title]] : [];
      updatedArray[index] = value;
      return {
        ...prev,
        [title]: updatedArray,
      };
    });
  };

  const handleAddInput = (title) => {
    setContentData((prev) => {
      const updatedArray = prev[title] ? [...prev[title]] : [''];
      updatedArray.push('');
      return {
        ...prev,
        [title]: updatedArray,
      };
    });
  };

  const handleRemoveInput = (title, index) => {
    setContentData((prev) => {
      const updatedArray = [...prev[title]];
      updatedArray.splice(index, 1);
      return {
        ...prev,
        [title]: updatedArray.length ? updatedArray : [''],
      };
    });
  };

  const handleCancel = () => {
    Swal.fire({
      title: '작성을 취소하시겠습니까?',
      text: '작성 중인 내용이 모두 삭제됩니다.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '네, 취소합니다',
      cancelButtonText: '아니오, 계속 작성합니다',
    }).then((result) => {
      if (result.isConfirmed) {
        setContentData(initialData);
      }
    });
  };

  const handleSubmitButton = async () => {
    try {
      setIsSubmitting(true);
      console.log('전송할 데이터:', contentData);
      const response = await saveNewContent(contentData);

      console.log(response);

      if (response?.status === 200) {
        Swal.fire({
          icon: 'success',
          title: '제출 성공!',
          text: '컨텐츠가 성공적으로 추가되었습니다.',
        });

        setContentData(initialData);
      } else {
        Swal.fire({
          icon: 'error',
          title: '제출 실패',
          text: '다시 시도해주세요.',
        });
      }
    } catch (err) {
      console.error('콘텐츠 저장 실패:', err);
      Swal.fire({
        icon: 'error',
        title: '제출 중 오류 발생',
        text: '서버와의 통신 중 문제가 발생했습니다.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="add-content-container">
      <div className="add-content-header">
        <h3 className="add-content-title">새 콘텐츠 추가</h3>
        <p className="add-content-description">사용자에게 제공할 새로운 콘텐츠를 추가해주세요.</p>
      </div>

      <div className="form-section-title">기본 정보</div>
      {contentRequest.slice(0, 2).map((item, index) => (
        <div key={index} className="add-content-field">
          <label className="add-content-label">
            {item.label}
            <span className="field-required">*</span>
          </label>
          <input
            className="add-content-text"
            type="text"
            placeholder={item.placeholder}
            value={contentData[item.title]}
            onChange={(e) => handleInputChange(item.title, e.target.value)}
          />
          <p className="field-help-text">{item.helpText || `${item.label}을(를) 입력해주세요.`}</p>
        </div>
      ))}

      <div className="form-section-title">상세 내용</div>
      {contentRequest.slice(2).map((item, index) => (
        <div key={index + 2} className="add-content-field">
          <label className="add-content-label">
            {item.label}
            <span className="field-optional">(선택사항)</span>
          </label>
          {isArrayField(item.title) ? (
            <div className="array-input-container">
              {contentData[item.title].map((value, idx) => (
                <div key={idx} className="array-input-item">
                  <input
                    className="add-content-text"
                    type="text"
                    placeholder={item.placeholder}
                    value={value}
                    onChange={(e) => handleArrayInputChange(item.title, idx, e.target.value)}
                  />
                  {contentData[item.title].length > 1 && (
                    <button
                      type="button"
                      className="array-input-remove"
                      onClick={() => handleRemoveInput(item.title, idx)}
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="add-input-button"
                onClick={() => handleAddInput(item.title)}
              >
                + 항목 추가
              </button>
            </div>
          ) : (
            <input
              className="add-content-text"
              type="text"
              placeholder={item.placeholder}
              value={contentData[item.title]}
              onChange={(e) => handleInputChange(item.title, e.target.value)}
            />
          )}
        </div>
      ))}
      <div className="add-content-submit-wrapper">
        <button className="add-content-cancel-button" onClick={handleCancel}>
          취소
        </button>
        <button
          className="add-content-submit-button"
          onClick={handleSubmitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? '제출 중...' : '제출'}
        </button>
      </div>
    </section>
  );
};

export default AddContentSection;
