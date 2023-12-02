import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios';

import { ERROR_CODE } from '../constants/error';

interface InternalAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// axiosInstance.interceptors.request.use(
//   (config: any) => {
//     const accessToken = localStorage.getItem('accessToken');

//     if (accessToken) {
//       config.headers['Authorization'] = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error: AxiosError) => {
//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response;
//   },
//   async (error: AxiosError) => {
//     const originalRequest = error.config as InternalAxiosRequestConfig;

//     if (error.response?.status === ERROR_CODE.UNAUTHORIZED) {
//       const refreshToken = localStorage.getItem('refreshToken');

//       if (refreshToken && !originalRequest._retry) {
//         originalRequest._retry = true;

//         try {
//           localStorage.setItem('accessToken', refreshToken);

//           const response = await axiosInstance.post('/account/refresh-token');
//           const { accessToken } = response.data;
//           const newAccessToken = accessToken;

//           localStorage.setItem('accessToken', newAccessToken);

//           axiosInstance.defaults.headers.common[
//             'Authorization'
//           ] = `Bearer ${accessToken}`;

//           return axiosInstance(originalRequest);
//         } catch (refreshError) {
//           localStorage.removeItem("accessToken");
//           localStorage.removeItem("refreshToken");
//           localStorage.removeItem("userId");

//           return Promise.reject(refreshError);
//         }
//       }
//     }
//     return Promise.reject(error);
//   });

export default axiosInstance;