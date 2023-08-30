import { BrowserRouter } from "react-router-dom";

import MainRoute from './routes/MainRote';
import ScrollToTop from './components/common/ScrollTop';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainRoute />
    </BrowserRouter>
  );
};

export default App;
