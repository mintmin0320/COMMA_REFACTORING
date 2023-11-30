// import { AxiosError } from 'axios';

// import {
//   fetchAuthCode,
//   fetchSignIn,
//   fetchSignUp,
//   fetchVerifyAuthCode
// } from './api';

// import { JoinState, LoginState, VerifyAuthCode } from './api.type';

// import Toast from '../../components/common/Toast';
// import { useMutation } from '@tanstack/react-query';

// const toast = Toast();

// // 로그인
// function useSignIn() {
//   return useMutation<
//     number,
//     AxiosError,
//     LoginState
//   >(({ accountId, password }) => fetchSignIn({ accountId, password }),
//     {
//       onSuccess: () => {
//         toast.success('Welcome to COMMA! 🎉');
//       },
//       onError: (error: AxiosError) => {
//         /* 에러 핸들러 추가 필요 */
//         toast.error(error.message);
//       }
//     });
// };

// // 회원가입
// function useSignUp() {
//   return useMutation<
//     number,
//     AxiosError,
//     JoinState
//   >((params) => fetchSignUp(params),
//     {
//       onSuccess: () => {
//         toast.success("가입이 완료되었습니다!");
//       },
//       onError: (error: AxiosError) => {
//         toast.error(error.message);
//       }
//     });
// };

// // 인증 코드 요청
// function useReqAuthCode() {
//   return useMutation<
//     number,
//     AxiosError,
//     string
//   >((email) => fetchAuthCode(email),
//     {
//       onSuccess: () => {
//         toast.success("인증 코드를 요청했습니다.");
//       },
//       onError: (error: AxiosError) => {
//         toast.error(error.message);
//       }
//     });
// };

// // 인증 코드 확인
// function useVerifyAuthCode() {
//   return useMutation<
//     number,
//     AxiosError,
//     VerifyAuthCode
//   >((params) => fetchVerifyAuthCode(params),
//     {
//       onError: (error: AxiosError) => {
//         toast.error(error.message);
//       }
//     });
// };

// export { useSignIn, useSignUp, useReqAuthCode, useVerifyAuthCode };

export { };