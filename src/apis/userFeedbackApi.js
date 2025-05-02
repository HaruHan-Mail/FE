import axiosInstance from './axiosInstance';

// 피드백 제출
export const submitFeedback = async (data) => {
  return await axiosInstance.post(
    `/feedback`,
    { feedback_content: data },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};
