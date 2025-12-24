import React, { useState } from 'react';

const Navbar = () => {
  const [imgLoaded, setImgLoaded] = useState(true);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <a href="/" style={{display:'flex',alignItems:'center',gap:'0.75rem',textDecoration:'none',color:'inherit'}}>
            {imgLoaded && (
              <img
                src="/Final%20logo.png"
                alt="Seran Home Logo"
                style={{width:80,height:80,objectFit:'contain',borderRadius:6}}
                onError={() => setImgLoaded(false)}
              />
            )}

            {!imgLoaded && (
              <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="2" y="2" width="60" height="60" rx="4" fill="#d4af37" />
                <path d="M6 15v-6l6-3 6 3v6" stroke="#0a0a0a" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12h6v6" stroke="#0a0a0a" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}

            <span style={{fontWeight:300,letterSpacing:'2px',color:'inherit'}}>Automation</span>
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
