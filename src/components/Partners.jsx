import React from 'react';

const Partners = () => {
  const partners = ['CRESTRON', 'CONTROL4', 'KNX', 'LUTRON', 'SAVANT'];

  return (
    <section className="partners">
      <div className="container">
        <p className="partners-label">Trusted Technology Partners</p>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo">{partner}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
