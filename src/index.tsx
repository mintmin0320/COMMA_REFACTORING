import ReactDOM from 'react-dom/client';
import axios from 'axios';

import './index.css';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';

import reportWebVitals from './reportWebVitals';

const BASE_URL = `${process.env.REACT_APP_SERVER_URL}`;
axios.defaults.baseURL = BASE_URL;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);

reportWebVitals();
