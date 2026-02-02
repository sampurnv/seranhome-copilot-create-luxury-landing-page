import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Intelligent Living.<br />Effortlessly Luxurious.
        </h1>
        <p className="hero-subtitle">
          Experience seamless control of lighting, climate, security, and entertainment<br />
          crafted exclusively for discerning homeowners.
        </p>
        <a href="#contact" className="cta-button">Request a Private Demo</a>
      </div>
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
