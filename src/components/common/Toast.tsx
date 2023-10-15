import { toast, ToastOptions, ToastPosition } from 'react-toastify';

interface ShowToast {
  info: (message: string) => void;
  success: (message: string) => void;
  error: (message: string) => void;
  warning: (message: string) => void;
  default: (message: string) => void;
}

const Toast = (): ShowToast => {
  const options: ToastOptions = {
    position: "top-right" as ToastPosition,
    autoClose: 4500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const showToast: ShowToast = {
    info: (message: string) => toast.info(message, options),
    success: (message: string) => toast.success(message, options),
    error: (message: string) => toast.error(message, options),
    warning: (message: string) => toast.warning(message, options),
    default: (message: string) => toast(message, options)
  };

  return showToast;
};

export default Toast;
