import { useState, useMemo } from 'react';

/**
 * 데이터 정렬을 위한 커스텀 훅
 * @param {Array} data - 정렬할 원본 데이터 배열
 * @param {Object} options - 정렬 옵션
 * @param {string} options.initialSortField - 초기 정렬 필드
 * @param {string} options.initialSortOrder - 초기 정렬 순서 ('asc' 또는 'desc')
 * @param {Function} options.getSortValue - 정렬 값 추출 함수 (기본: 직접 필드 값 사용)
 * @returns {Object} 정렬 관련 객체
 */
const useSorting = (
  data = [],
  {
    initialSortField = null,
    initialSortOrder = 'desc',
    getSortValue = (item, field) => item[field],
  } = {}
) => {
  const [sortField, setSortField] = useState(initialSortField);
  const [sortOrder, setSortOrder] = useState(initialSortOrder);

  // 정렬된 데이터
  const sortedData = useMemo(() => {
    if (!sortField || !data || data.length === 0) return data;

    return [...data].sort((a, b) => {
      const aValue = getSortValue(a, sortField);
      const bValue = getSortValue(b, sortField);

      // 날짜 문자열 처리
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        if (aValue.match(/^\d{4}-\d{2}-\d{2}/) && bValue.match(/^\d{4}-\d{2}-\d{2}/)) {
          const dateA = new Date(aValue);
          const dateB = new Date(bValue);
          return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        }
      }

      // 일반 값 처리
      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortField, sortOrder, getSortValue]);

  // 정렬 변경 핸들러
  const handleSortChange = (field) => {
    if (sortField === field) {
      // 같은 필드를 다시 클릭하면 정렬 순서 토글
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // 다른 필드를 클릭하면 해당 필드로 변경하고 기본 정렬 순서 적용
      setSortField(field);
      setSortOrder('desc');
    }
  };

  // 간단한 정렬 설정 변경 함수
  const setSort = (field, order = 'desc') => {
    setSortField(field);
    setSortOrder(order);
  };

  return {
    sortedData,
    sortField,
    sortOrder,
    handleSortChange,
    setSort,
  };
};

export default useSorting; 