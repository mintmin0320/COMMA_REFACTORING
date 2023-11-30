// import { MutationCache, QueryCache, QueryClient } from 'react-query';

import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import Toast from '../components/common/Toast';

const queryErrorHandler = (error: unknown): void => {
  const toast = Toast();
  const errorMessage =
    error instanceof Error ? error.message : 'error connecting to server';

  toast.error(errorMessage);
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }),
  mutationCache: new MutationCache({
    onError: queryErrorHandler,
  }),
});
