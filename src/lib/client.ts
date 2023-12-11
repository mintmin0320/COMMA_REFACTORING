import axios, { AxiosError, AxiosInstance } from 'axios';

import { ERROR_CODE } from '../constants/error';

const client: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// client.interceptors.request.use(
//   (config) => {
//     const accessToken = localStorage.getItem('accessToken');

//     if (accessToken) {
//       config.headers['Authorization'] = `Bearer ${accessToken}`;
//     }
//     return config;
//   }
// );

// axios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response) {
//       if (error.response.status === ERROR_CODE.UNAUTHORIZED) {
//         const refreshToken = localStorage.getItem('refreshToken');

//         if (refreshToken && !originalRequest._retry) {
//           originalRequest._retry = true;
//           localStorage.setItem('accessToken', refreshToken);
//           try {
//             const { data } = await client.post('/account/refresh-token');
//             // 새로 받은 access token으로 기본 header를 설정
//             client.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
//             // 원래의 요청에도 새로운 access token을 설정
//             originalRequest.headers.Authorization = `Bearer ${data.access_token}`;

//             // 원래의 요청을 재시도
//             return client(originalRequest);
//           } catch (reissueError) {
//             const axiosError = reissueError as AxiosError;

//             if (axiosError.response?.status === 401) {
//               window.location.href = '/login';
//             }
//           }
//         }
//       } else {
//         throw new Error(error.response.data.message);
//       }
//     }

//     throw error;
//   }
// );

export default client;