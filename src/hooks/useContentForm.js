import { useState } from 'react';

/**
 * 콘텐츠 폼 관리를 위한 커스텀 훅
 * @param {Object} initialData - 초기 폼 데이터
 * @returns {Object} 폼 관리 객체
 */
const useContentForm = (initialData = {}) => {
  const [formData, setFormData] = useState(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 단일 필드 변경 처리
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  
  // 배열 필드의 특정 인덱스 값 변경
  const handleArrayInputChange = (field, index, value) => {
    setFormData((prev) => {
      const updatedArray = prev[field] ? [...prev[field]] : [];
      updatedArray[index] = value;
      return {
        ...prev,
        [field]: updatedArray,
      };
    });
  };
  
  // 배열 필드에 새 항목 추가
  const handleAddArrayItem = (field) => {
    setFormData((prev) => {
      const updatedArray = prev[field] ? [...prev[field]] : [];
      updatedArray.push('');
      return {
        ...prev,
        [field]: updatedArray,
      };
    });
  };
  
  // 배열 필드의 특정 항목 제거
  const handleRemoveArrayItem = (field, index) => {
    setFormData((prev) => {
      const updatedArray = [...prev[field]];
      updatedArray.splice(index, 1);
      return {
        ...prev,
        [field]: updatedArray.length ? updatedArray : [''],
      };
    });
  };
  
  // 필드가 배열 타입인지 확인
  const isArrayField = (field) => {
    return Array.isArray(initialData[field]);
  };
  
  // 전체 폼 초기화
  const resetForm = () => {
    setFormData(initialData);
  };

  return {
    formData,
    isSubmitting,
    setIsSubmitting,
    handleInputChange,
    handleArrayInputChange,
    handleAddArrayItem,
    handleRemoveArrayItem,
    isArrayField,
    resetForm,
  };
};

export default useContentForm; 