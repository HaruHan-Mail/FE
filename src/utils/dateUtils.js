/**
 * 날짜를 YYYY.MM.DD 형식으로 포맷팅
 * @param {string|Date} dateString - ISO 형식의 날짜 문자열 또는 Date 객체
 * @returns {string} 포맷팅된 날짜 문자열
 */
export const formatDate = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}.${month}.${day}`;
};

/**
 * 시간을 HH:MM 형식으로 포맷팅
 * @param {string|Date} dateString - ISO 형식의 날짜 문자열 또는 Date 객체
 * @returns {string} 포맷팅된 시간 문자열
 */
export const formatTime = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  
  return `${hours}:${minutes}`;
};

/**
 * 날짜와 시간을 YYYY.MM.DD HH:MM 형식으로 포맷팅
 * @param {string|Date} dateString - ISO 형식의 날짜 문자열 또는 Date 객체
 * @returns {string} 포맷팅된 날짜와 시간 문자열
 */
export const formatDateTime = (dateString) => {
  if (!dateString) return '';
  
  return `${formatDate(dateString)} ${formatTime(dateString)}`;
};