import React from 'react';
import './Header.css';
import logo from '../assets/images/geocore_services_germany_logo.jpg';

function Header() {
  return (
    <header className="header">
      {/* Website's logo as image and text */}
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
        <span className="geo">Geo</span>
        <span className="core">Core</span>
      </div>

      {/* Navigation bar */}
      <nav className="navbar">
        <ul className="header-nav">
          <li><a href="#process">Process</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#history">History</a></li>
          <li><a href="#docs">Docs</a></li>
        </ul>
      </nav>

      {/* Call-to-action button */}
      <div className="cta-buttons">
        <button className="cta">Get Started</button>
      </div>
    </header>
  );
}

export default Header;
