/* 회원가입 form-data  */
export interface JoinState {
  account_id: string;
  password: string;
  name: string;
  email: string;
  major: string;
  status: string;
  academic_number: string;
}

/* 이메일 인증 데이터 타입 */
export interface VerifyAuthCode {
  email: string,
  code: string
}

/* 로그인 form-data */
export interface LoginState {
  account_id: string;
  password: string;
}

/* 로그인 Response */
export interface TokenResponse {
  body: TokenResponseBody;
}

export interface TokenResponseBody {
  access_token: string;
  refresh_token: string;
}
