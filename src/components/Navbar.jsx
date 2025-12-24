import React from 'react';
import logo from '../assets/final-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <a href="/" style={{display:'flex',alignItems:'center',gap:'0.75rem',textDecoration:'none',color:'inherit'}}>
            <img src={logo} alt="Seran Home Logo" className="nav-logo" />

            <span className="nav-brand-text">SERAN HOME</span>
          </a>
        </div>
        <div className="nav-links">
          <a href="#features">Experience</a>
          <a href="#process">Process</a>
          <a href="#showcase">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
