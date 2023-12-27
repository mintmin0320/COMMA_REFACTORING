import { InfiniteData, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import client from '../../lib/client';

import { productKey } from './key';

import { Arduino } from '../../types/product';

interface ArduinoResponse {
  arduinos: Arduino[];
  has_next: boolean;
  is_first: boolean;
  is_last: boolean;
  size: number;
}

interface InfiniteQuery {
  pageParam: number;
}

export const getSearchProduct = async ({ pageParam }: InfiniteQuery): Promise<ArduinoResponse> => {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const { data } = await client.get(`/arduinos?page=${pageParam}`);

  return data.body;
};

export const useSearchProductQuery = () => {
  return useSuspenseInfiniteQuery<
    ArduinoResponse,
    AxiosError,
    InfiniteData<ArduinoResponse, number>,
    string[],
    number
  >({
    queryKey: [productKey.searchProducts],
    queryFn: getSearchProduct,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      let nextPage: number = allPages.length + 1;

      if (lastPage.has_next) {
        return nextPage - 1;
      }
    },
    retry: 0,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })
};


