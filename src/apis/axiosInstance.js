import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://haruhan.site/api',
  timeout: 5000,
});

axiosInstance.interceptors.response.use(
    (response) => {
        const data = response.data;
        console.log(data)
        if (data.stateCode < 200 || data.stateCode >= 300) {
            console.error(`[API 오류], res.message: ${data.message}`);
            return Promise.reject(new Error(data.message));
        }
        return data;
    },
    (error) => {
        console.error('[API 통신 실패], error');
        return Promise.reject(error);
    }

);

export default axiosInstance;
