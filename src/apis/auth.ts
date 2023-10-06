import axios from 'axios';

// types
import { JoinState } from '../types/auth';

// constants
import {
  SIGN_UP_URL,
  EMAIL_AUTH_URL,
  VERIFY_EMAIL_AUTH_CODE_URL
} from '../constants/urls';

// 이메일 인증 요청
export const fetchEmailAuthCode = async (data: { email: string | null }) => {
  try {
    return await axios.post<unknown>(EMAIL_AUTH_URL, data);
  } catch (error) {
    throw error;
  }
};

// 이메일 인증 요청 확인
export const fetchVerifyAuthCode = async (data: { email: string | null, code: string | null }) => {
  try {
    return await axios.post<unknown>(VERIFY_EMAIL_AUTH_CODE_URL, data);
  } catch (error) {
    throw error;
  }
};

// 회원가입
export const fetchSignUp = async (data: JoinState) => {
  try {
    return await axios.post<string>(SIGN_UP_URL, data);
  } catch (error) {
    throw error;
  }
};