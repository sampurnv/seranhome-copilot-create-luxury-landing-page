import React from 'react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We immerse ourselves in your lifestyle, understanding your needs and aspirations for your home.'
    },
  
    {
      number: '02',
      title: 'Installation',
      description: 'Meticulous implementation with minimal disruption, executed by certified artisans.'
    },
    {
      number: '03',
      title: 'Handover',
      description: 'Comprehensive orientation and ongoing support ensuring you feel truly at home with your system.'
    }
  ];

  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">A Journey Tailored to You</h2>
          <p className="section-subtitle">Every exceptional home begins with understanding your vision.</p>
        </div>
        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
