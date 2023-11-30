import axios from 'axios';

// types
// export const test1 = async () => {
//   const { data } = await axios.get('/users');
//   console.log('test data : ' + data);
//   return data;
// }

// export const useUserInfo = () => {
//   const fallback: never[] = [];
//   const { data = fallback } = useQuery('test', test1, {
//     refetchOnWindowFocus: false,
//     // cacheTime: 30 * 60 * 1000, // 30분
//     // staleTime: 20000,
//   })
//   console.log(data);
//   return data;
// }

// export const userPrefetchUserInfo = (): void => {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const queryClient = useQueryClient();
//   queryClient.prefetchQuery('test', test1)
// }