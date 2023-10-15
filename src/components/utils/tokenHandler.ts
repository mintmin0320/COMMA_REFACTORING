/*
  access token 만료 시 재요청
*/

import axios from 'axios';

const FETCH_REFRESH_TOKEN = '/account/refresh-token';

export async function fetchRefreshToken(): Promise<void> {
  await axios.post(FETCH_REFRESH_TOKEN, {}, { withCredentials: true });
};

export async function handleTokenRefreshAndRetry(error: any, originalRequest: any): Promise<any> {
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    await fetchRefreshToken();

    return axios(originalRequest);
  }

  return Promise.reject(error);
};
