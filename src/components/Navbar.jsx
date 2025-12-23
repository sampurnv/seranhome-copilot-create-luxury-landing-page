import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">Wellcome to Seran Homes</div>
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
