import { AxiosError } from 'axios';

import renderToast from '../../lib/toast';
import { ERROR_CODE } from '../../constants/error';

interface IErrorMap {
  [key: number]: string;
}

export const handleError = (error: AxiosError) => {
  if (!error.response) {
    renderToast({
      type: 'error',
      message: 'Network Error',
      duration: 5000
    });

    return;
  }

  const statusCode = error.response.status;

  const errorMap: IErrorMap = {
    [ERROR_CODE.BAD_REQUEST]: `잘못된 요청입니다.`,
    [ERROR_CODE.UNAUTHORIZED]: '인증 실패하였습니다. 다시 로그인해 주세요.',
    [ERROR_CODE.FORBIDDEN]: '접근 권한이 없습니다.',
    [ERROR_CODE.NOT_FOUND]: '요청한 리소스를 찾을 수 없습니다.',
    [ERROR_CODE.CONFLICT]: '요청이 충돌하였습니다.',
    [ERROR_CODE.INTERNAL_SERVER_ERROR]: '서버 내부 에러가 발생했습니다.'
  };

  function executeError(statusCode: number) {
    return errorMap[statusCode];
  };

  renderToast({
    type: 'error',
    message: executeError(statusCode),
    duration: 5000
  });
};

