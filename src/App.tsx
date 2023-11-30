

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import MainRoute from './routes/MainRote';
import ScrollToTop from './components/common/ScrollTop';
import Loading from './components/common/Loading';
import { queryClient } from './react-query/queryClient';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Loading />
        <ToastContainer />
        <ScrollToTop />
        <MainRoute />
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
