import { BrowserRouter as Router } from "react-router-dom";

import MainRoute from './routes/MainRote';

import './App.css';

function App() {
  return (
    <Router>
      <MainRoute />
    </Router>
  );
};

export default App;
