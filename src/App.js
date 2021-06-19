import Navbar from './components/NavBarr/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import './app.css';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <Router>
      <SideBar />
      <Navbar />
    </Router>
  );
}

export default App;
