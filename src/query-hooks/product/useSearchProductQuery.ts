import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import client from '../../lib/client';

import { productKey } from './key';

export const getSearchProduct = async ({ pageParam }: any) => {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const { data } = await client.get(
    `/arduinos?page=${pageParam}`
  );

  return data.body;
};

export const useSearchProductQuery = () => {
  return useSuspenseInfiniteQuery({
    queryKey: [productKey.searchProducts],
    queryFn: getSearchProduct,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      let nextPage = allPages.length + 1;
      if (lastPage.has_next) {
        return nextPage - 1;
      }
    },
    retry: 0,
  })
};


