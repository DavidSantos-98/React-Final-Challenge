import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home.jsx';
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';
import About from './components/About/About.jsx';
import Works from './components/Works/Works.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {
  return (
    <Router>
      <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;