import { BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home'
import './app.css';


function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
