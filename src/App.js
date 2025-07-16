import { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import coffeeGif from '../src/final.gif';
import coffeeLogo from '../src/logo-coffee.png';
import coffeeLogoSpill from '../src/logo-coffee-spill.png';

import latteHeart from '../src/assets/latte/lattes-edited/Heart Latte.png';
import latteHyperpigmentation from '../src/assets/latte/lattes-edited/Hyperpigmentation Latte.png';
import latteBuddy from '../src/assets/latte/lattes-edited/Interactive Buddy Latte.png';
import latteBlood from '../src/assets/latte/lattes-edited/Lusty Blood Latte.png';
import lattePenis from '../src/assets/latte/lattes-edited/Penis Latte.png';
import latteWeight from '../src/assets/latte/lattes-edited/Weight Latte.png';

import drinkBananaBread from '../src/assets/latte/lattes-edited/Banana Bread Latte.png';
import drinkCoffee from '../src/assets/latte/lattes-edited/Coffee.png';
import drinkDonut from '../src/assets/latte/lattes-edited/Donut (Hole-In) Latte.png';

import foodHamWhole from '../src/assets/food/food-edited/Chrismas Ham.png';
import foodHamCut from '../src/assets/food/food-edited/Ham Cut.png';
import foodBaconTomSandwich from '../src/assets/food/food-edited/Bacon Tomato Sandwich.png';
import foodBakedEndive from '../src/assets/food/food-edited/Baked Endive.png';
import foodCabbage from '../src/assets/food/food-edited/Cabbage.png';
import foodCandiedSquash from '../src/assets/food/food-edited/Candied Walnut Butternut Squash.png';
import foodCurryPerogies from '../src/assets/food/food-edited/Coconut Curry Perogies.png';
import foodEggSalad from '../src/assets/food/food-edited/Egg Salad.png';
import foodEggplantParm from '../src/assets/food/food-edited/Eggplant Parm.png';
import foodEggBaconJam from '../src/assets/food/food-edited/Folded Egg on Toast with Bacon Jam.png';
import foodKoreanEggSandwich from '../src/assets/food/food-edited/K-Egg Sandwich.png';
import foodPorkLoinGratin from '../src/assets/food/food-edited/Pork Loin Gratin with Panchetta.png';

import './App.css';

// Add these basic page components (create these or modify as needed)
const Home = () => (
  <div>
    <h2>Home Page Content</h2>
    {/* Your home content */}
  </div>
);

const About = () => <h2>About Page</h2>;
const Services = () => <h2>Services Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const spacing = 30;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <Link to="/" className="navbar-logo">
          <img 
            className="coffee-logo" 
            src={isHovered ? coffeeLogoSpill : coffeeLogo}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)} 
            alt="Coffee logo"
          />
        </Link>

        {/* Mobile menu button */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </div>

        {/* Navigation links */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>
              Art
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={toggleMenu}>
              Drinks
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={toggleMenu}>
              Food
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={toggleMenu}>
              Kit
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

const PhatBreakPre = () => {
  return <p className='PhatBreakBeforeContainer'></p>;
};

const PhatBreakPost = () => {
  return <p className='PhatBreakAfterContainer'></p>;
};

// Updated App Component
function App() {
  // Determine basename based on environment
  const isGitHubPages = process.env.NODE_ENV === 'production';
  const basename = isGitHubPages ? '/free-coffee' : '';

  return (
    <Router basename={basename}>
      <div className="App">
        <header className="App-header">
          
          <div className="box">
            <Navbar />
            <img src={coffeeGif} className="coffee-gif" alt="logo" />

            <h1 className='coffee-gif-text-outline-free'>Free</h1>
            <h1 className='coffee-gif-text-outline-coffee'>Coffee</h1>
            
            <h1 className='coffee-gif-text-free'>Free</h1>
            <h1 className='coffee-gif-text-pictures'>Pictures of</h1>
            <h1 className='coffee-gif-text-coffee'>Coffee</h1>            
          </div>
          <div className='header-container'>
            <h1 className='header-text'>Sorry, I lied (ￗ﹏ￗ )(kind of)</h1>
          </div>
          
          <div className='LatteContainer'>
            <img src={latteHyperpigmentation} className="latte-img" alt="Hyperpigmentation Latte" />
            <img src={latteBuddy} className="latte-img" alt="Interactive Buddy Latte" />
            <img src={latteWeight} className="latte-img" alt="Weight Latte" />
            <img src={latteBlood} className="latte-img" alt="Lusty Blood Binding of Isaac Latte" />
            <img src={lattePenis} className="latte-img" alt="Penis [Censored] Latte" />
            <img src={latteHeart} className="latte-img" alt="Heart Latte" />
          </div>
          <div className='header-container '>
            <h1 className='header-text'>⊹₊ Drinks (◐o◑)</h1>
          </div>
          <div className='retro-path-container'>
            <div className="retro-path">
              <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
                {/* Central curve (orange) */}
                <path
                  d="M 100,200
                    C 400,200 400,500 700,500
                    C 1000,500 1000,200 1300,200"
                  fill="none"
                  stroke="#F1E1C7"
                  strokeWidth="64"
                  strokeLinecap="round"
                />
                
                {/* Outer parallel curve (purple) */}
                <path
                  d="M 70,170
                    C 370,170 370,530 670,530
                    C 970,530 970,170 1270,170"
                  fill="none"
                  stroke="#B1804F"
                  strokeWidth="64"
                  strokeLinecap="round"
                />
                
                {/* Inner parallel curve (teal) */}
                <path
                  d="M 130,230
                    C 430,230 430,470 730,470
                    C 1030,470 1030,230 1330,230"
                  fill="none"
                  stroke="#753D29"
                  strokeWidth="64"
                  strokeLinecap="round"
                />
              </svg>
              
            </div>
            <div className="food-grid-container">
              <div className="food-grid">
                <img src={drinkBananaBread} className="food-img" alt="Banana Bread Latte" />
                <img src={drinkDonut} className="food-img" alt="Donut Latte" />
                <img src={drinkCoffee} className="food-img" alt="Coffee (duh)" />
              </div>
            </div>
          </div>
          <div className='header-container '>
            <h1 className='header-text'>𓐐𓎩 I cook too •ᴗ•</h1>
          </div>
          <div className="food-grid-container checkerboard">
            <div className="food-grid">
              <img src={foodHamWhole} className="food-img" alt="Christmas Ham" />
              <img src={foodHamCut} className="food-img" alt="Ham Cut" />
              <img src={foodBaconTomSandwich} className="food-img" alt="Bacon Tomato Sandwich" />
              <img src={foodBakedEndive} className="food-img" alt="Baked Endive" />
              <img src={foodCabbage} className="food-img" alt="Cabbage" />
              <img src={foodCandiedSquash} className="food-img" alt="Candied Squash" />
              <img src={foodCurryPerogies} className="food-img" alt="Curry Perogies" />
              <img src={foodEggSalad} className="food-img" alt="Egg Salad" />
              <img src={foodEggplantParm} className="food-img" alt="Eggplant Parm" />
              <img src={foodEggBaconJam} className="food-img" alt="Egg Bacon Jam" />
              <img src={foodKoreanEggSandwich} className="food-img" alt="Korean Egg Sandwich" />
              <img src={foodPorkLoinGratin} className="food-img" alt="Pork Loin Gratin" />
            </div>
          </div>
          <div className='header-container '>
            <h1 className='header-text'>⚙︎ The machine ᕙ(⇀‸↼‶) ᕗ</h1>
          </div>
          <div className=''>
              <img src={foodHamWhole} className="food-img" alt="Christmas Ham" />
          </div>
          {/* Add Routes component here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
    
    
    

