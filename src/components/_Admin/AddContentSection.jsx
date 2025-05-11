import React from 'react';
import './css/AddContentSection.css';
import { contentRequest } from '../../mocks/addContentRequest.js';
import Swal from 'sweetalert2';
import useContentForm from '../../hooks/useContentForm';
import FormField from './common/FormField';
import ArrayInput from './common/ArrayInput';
import { saveNewContent } from '../../apis/adminApi';

const initialData = {
  title: '',
  summary: '',
  background: [''],
  importance: [''],
  tip: [''],
  additionalResources: [''],
};

const AddContentSection = () => {
  const {
    formData,
    isSubmitting,
    setIsSubmitting,
    handleInputChange,
    handleArrayInputChange,
    handleAddArrayItem,
    handleRemoveArrayItem,
    isArrayField,
    resetForm,
  } = useContentForm(initialData);


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
        resetForm();
      }
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
      
    const result = await saveNewContent(formData);
    
    if (result?.stateCode !== 201) {
      Swal.fire({
        icon: 'error',
        title: '제출 실패',
        text: '다시 시도해주세요.',
      });
      return;
    } 

    Swal.fire({
      icon: 'success',
      title: '제출 성공!',
      text: '컨텐츠가 성공적으로 추가되었습니다.',
    });
    resetForm();
    setIsSubmitting(false);
  };
  
  // 폼 필드 렌더링 함수
  const renderFormField = (item) => {
    if (isArrayField(item.title)) {
      return (
        <div key={item.title} className="add-content-field">
          <label className="add-content-label">
            {item.label}
            <span className="field-optional">(선택사항)</span>
          </label>
          <ArrayInput
            values={formData[item.title]}
            onChange={(idx, value) => handleArrayInputChange(item.title, idx, value)}
            onAdd={() => handleAddArrayItem(item.title)}
            onRemove={(idx) => handleRemoveArrayItem(item.title, idx)}
            placeholder={item.placeholder}
          />
        </div>
      );
    }

    return (
      <FormField
        key={item.title}
        label={item.label}
        name={item.title}
        value={formData[item.title]}
        onChange={(e) => handleInputChange(item.title, e.target.value)}
        placeholder={item.placeholder}
        helpText={item.helpText || `${item.label}을(를) 입력해주세요.`}
        required={item.title === 'title' || item.title === 'summary'}
      />
    );
  };

  return (
    <section className="add-content-container">
      <div className="add-content-header">
        <h2 className="admin-section-title">새 콘텐츠 추가</h2>
        <p className="add-content-description">사용자에게 제공할 새로운 콘텐츠를 추가해주세요.</p>
      </div>

      {contentRequest.slice(0, 2).map(renderFormField)}
      {contentRequest.slice(2).map(renderFormField)}
  
      
      <div className="add-content-submit-wrapper">
        <button 
          className="add-content-cancel-button" 
          onClick={handleCancel}
          disabled={isSubmitting}
        >
          취소
        </button>
        <button
          className="add-content-submit-button"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? '제출 중...' : '제출'}
        </button>
      </div>
    </section>
  );
};

export default AddContentSection;
