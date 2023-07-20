import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import MainRoute from './routes/MainRote';

function App() {
  return (
    <Router>
      <MainRoute />
    </Router>
  );
};

export default App;
