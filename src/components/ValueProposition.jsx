import React from 'react';

const ValueProposition = () => {
  const values = [
    {
      icon: '◆',
      title: 'Architectural Integration',
      description: 'Technology that disappears into your design, preserving the aesthetic integrity of your space.'
    },
    {
      icon: '◆',
      title: 'White-Glove Service',
      description: 'From consultation to handover, experience unparalleled attention to detail and care.'
    },
    {
      icon: '◆',
      title: 'Lifetime Excellence',
      description: 'Dedicated support and maintenance ensuring your home remains a sanctuary of comfort.'
    }
  ];

  return (
    <section className="value-proposition">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Bespoke Design. Invisible Technology.</h2>
          <p className="section-subtitle">
            We create living environments that respond to your needs before you ask—where technology serves you silently, elegantly, and flawlessly.
          </p>
        </div>
        <div className="value-grid">
          {values.map((value, index) => (
            <div key={index} className="value-item">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
