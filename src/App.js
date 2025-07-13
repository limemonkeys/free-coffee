import { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import coffeeGif from '../src/final.gif';
import './App.css';

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <Link to="/" className="navbar-logo">
          YourLogo
        </Link>

        {/* Mobile menu button */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </div>

        {/* Navigation links */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Navbar Component
const PhatBreak = () => {
  
  return (
    <p className='PhatBreak'></p>
  );
};

// Main App Component
function App() {
  return (
    <Router basename="/free-coffee">  {/* ← Add basename here */}
      <div className="App">
        <header className="App-header">
          {/* Your existing content */}
          <div className="box">  {/* Fixed: class → className */}
            <Navbar />
            <img src={coffeeGif} className="coffee-gif" alt="logo" />
            <h1 className='coffee-gif-text'>Free Pictures of Coffee</h1>
          </div>
          <PhatBreak />
        </header>
      </div>
    </Router>
  );
}
export default App;