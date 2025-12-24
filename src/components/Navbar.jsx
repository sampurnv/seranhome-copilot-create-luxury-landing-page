import React from 'react';
import logo from '../assets/Final-Logo.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <a href="/" style={{display:'flex',alignItems:'center',gap:'0.75rem',textDecoration:'none',color:'inherit'}}>
            <img src={logo} alt="Seran Home Logo" className="nav-logo" />

            <span className="nav-brand-text">Automation</span>
          </a>
        </div>
        <div className="nav-links">
          <a href="#process">Process</a>
          <a href="#showcase">Portfolio</a>

          <div className="nav-item dropdown">
            <a href="/services" className="dropdown-toggle">Services</a>
            <ul className="dropdown-menu">
              <li><a href="/home-automation">Home Automation</a></li>
              <li><a href="/webdevelopment">Web Development</a></li>
            </ul>
          </div>

          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
