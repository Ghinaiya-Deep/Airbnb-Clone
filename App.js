import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/NavBar'; // Adjust the path as necessary
import CardList from './components/CardList'; // Adjust the path as necessary
import Footer from './components/Footer'; // Adjust the path as necessary
import './App.css'; // Make sure you have your CSS file imported

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="hero-section">
        <h1>Find Your Next Stay</h1>
        <p>Discover amazing places at exclusive deals.</p>
        <div className="icons">
          <span className="icon">
            <FontAwesomeIcon icon={faLocationDot} /> Location
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faStar} /> 5-Star Ratings
          </span>
        </div>
      </header>
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
