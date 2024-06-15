import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      {/* Website's logo as text */}
      <div className="logo">
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
