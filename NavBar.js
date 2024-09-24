import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://www.logo.wine/a/logo/Airbnb/Airbnb-Logo.wine.svg"
          alt="Airbnb Logo"
        />
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search destinations" />
        <button className="search-button">Search</button>
      </div>
      <div className="navbar-links">
        <a href="#">Stays</a>
        <a href="#">Experiences</a>
        <a href="#">Online Experiences</a>
      </div>
      <div className="navbar-user">
        <a href="#">Login</a>
        <a href="#" className="signup">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
