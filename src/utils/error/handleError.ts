import { AxiosError } from 'axios';

import renderToast from '../../lib/toast';
import { ERROR_CODE } from '../../constants/error';

interface IErrorMap {
  [key: number]: string;
}

interface IErrorHandler {
  error: AxiosError;
  message: string;
}

export const handleError = ({ error, message }: IErrorHandler) => {
  if (!error.response) {
    renderToast({
      type: 'error',
      message: '네트워크 연결 상태를 확인해 주세요.',
      duration: 5000
    });

    return;
  }

  const statusCode = error.response.status;

  const errorMap: IErrorMap = {
    [ERROR_CODE.BAD_REQUEST]: `잘못된 요청입니다.`,
    [ERROR_CODE.UNAUTHORIZED]: '다시 인증이 필요합니다.',
    [ERROR_CODE.FORBIDDEN]: '접근 권한이 없습니다.',
    [ERROR_CODE.NOT_FOUND]: '요청한 리소스를 찾을 수 없습니다.',
    [ERROR_CODE.CONFLICT]: '요청이 충돌하였습니다.',
    [ERROR_CODE.INTERNAL_SERVER_ERROR]: '서버 내부 에러가 발생했습니다.'
  };

  const executeError = (statusCode: number) => errorMap[statusCode];

  renderToast({
    type: 'error',
    message: `${message} ${executeError(statusCode)}`,
    duration: 5000
  });
};

