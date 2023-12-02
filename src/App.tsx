import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MutationCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import MainRoute from './routes/MainRote';
import ScrollToTop from './components/common/ScrollTop';
import Loading from './components/common/Loading';

import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    }
  }
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Loading />
        <Toaster />
        <ScrollToTop />
        <MainRoute />
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
