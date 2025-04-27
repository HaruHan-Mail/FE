import axiosInstance from './axiosInstance';

// 사용자의 찜한 컨텐츠 목록 조회
export const fetchAllBookmarkContents = async ({ email, token }) => {
  return await axiosInstance.get('/bookmark', {
    params: { email, token },
  });
};

// 컨텐츠 찜하기
export const saveBookmarkContent = async (email, token, contentId) => {
  return await axiosInstance.post('/bookmark', {
    email,
    token,
    contentId,
  });
};

// 컨텐츠 찜 해제
export const deleteBookmarkContent = async (email, token, contentId) => {
  return await axiosInstance.delete('/bookmark', {
    data: { email, token, contentId }
  });
};
