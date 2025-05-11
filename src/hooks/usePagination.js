import { useState, useMemo } from 'react';

/**
 * 페이지네이션 로직을 처리하는 커스텀 훅
 * @param {Array} data - 페이지네이션 할 전체 데이터 배열
 * @param {number} itemsPerPage - 페이지당 표시할 아이템 수
 * @returns {Object} 페이지네이션 관련 객체
 */
export const usePagination = (data = [], itemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // 전체 페이지 수 계산
  const totalPages = useMemo(() => 
    Math.ceil(data.length / itemsPerPage), 
    [data.length, itemsPerPage]
  );
  
  // 현재 페이지에 표시할 데이터 계산
  const currentItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return data.slice(indexOfFirstItem, indexOfLastItem);
  }, [data, currentPage, itemsPerPage]);
  
  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)));
  };
  
  return {
    currentPage,
    totalPages,
    currentItems,
    handlePageChange,
    setCurrentPage,
  };
};

export default usePagination; 