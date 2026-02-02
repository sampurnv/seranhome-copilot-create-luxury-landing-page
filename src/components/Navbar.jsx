import React from 'react';
import logo from '../assets/Final-Logo.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <a href="/" style={{display:'flex',alignItems:'center',gap:'0.75rem',textDecoration:'none',color:'inherit'}}>
            <img src={logo} alt="Seran Home Logo" className="nav-logo" />

            <div className="nav-brand-texts">
              <span className="nav-brand-title"></span>
              <span className="nav-brand-sub">Automation</span>
            </div>
          </a>
        </div>
        <div className="nav-links">
          <a href="#process">Process</a>
          <a href="#showcase">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
