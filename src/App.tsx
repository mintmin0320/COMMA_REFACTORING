import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import MainRoute from './routes/MainRote';
import ScrollToTop from './components/common/ScrollTop';
import Loading from './components/common/Loading';
import { queryClient } from './react-query/queryClient';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Loading />
        <ToastContainer />
        <ScrollToTop />
        <MainRoute />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
