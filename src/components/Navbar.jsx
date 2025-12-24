import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <a href="/" style={{display:'flex',alignItems:'center',gap:'0.75rem',textDecoration:'none',color:'inherit'}}>
            <svg className="nav-logo" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="#d4af37" />
              <path d="M6 15v-6l6-3 6 3v6" stroke="#0a0a0a" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12h6v6" stroke="#0a0a0a" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

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
