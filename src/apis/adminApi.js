import axiosInstance from './axiosInstance';

// 관리자 코드 검증
export const verifyAdminCode = async (code) => {
  return await axiosInstance.get(`/user/admin/${code}`);
};

// 전체 피드백 조회
export const fetchAllFeedback = async () => {
  return await axiosInstance.get(`/feedback`);
};

// 컨텐츠 추가
export const saveNewContent = async (data) => {
  return await axiosInstance.post(`/content`, data);
};

// 대시보드 조회
export const fetchDashboard = async () => {
  return await axiosInstance.get(`/dashboard`);
}
