import axiosInstance from './axiosInstance';

export const fetchPopularContent = async () => {
  return await axiosInstance.get(`/content/top5`);
};

export const fetchAllContents = async ({ email, token }) => {
  return await axiosInstance.get(`/content/mine`, {
    params: {email, token}
  });
};

export const fetchContentDetail = async ({ contentId }) => {
  return await axiosInstance.get(`/content/${contentId}`);
};