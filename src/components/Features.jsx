import React from 'react'
import imgBasic from '../assets/Basic.jpeg'
import imgMedium from '../assets/Medium.jpeg'
import imgLuxury from '../assets/Luxury.jpeg'

const packages = [
  {
    id: 'basic',
    title: 'Basic Home Automation',
    img: 'Basic.jpeg?v=2',
    price: '₹35,999 - ₹50,000',
    desc: 'Ideal for basic lighting, temperature, and security automation without a large investment.',
    items: [
      'Smart bulbs: 8-10 (living, bedrooms, kitchen)',
      'Smart switches: 2-4 (lights, fans)',
      'Smart plugs: 2-4 (appliances)',
      'Basic smart speaker (Echo/Nest)',
      'Motion detection: 2 sensors',
      'Basic security camera: 1 (entry) — Add On',
      'Smart thermostat: 1 — Add On'
    ]
  },
  {
    id: 'mid',
    title: 'Mid-Range Home Automation',
    img: 'Medium.jpeg?v=2',
    price: '₹65,999 - ₹1,50,000',
    desc: 'Ideal for enhanced security, smart temperature, and voice assistant integration.',
    items: [
      'Smart lighting: 10-12 bulbs (common areas)',
      'Motorized curtains (living/master bedroom)',
      'Smart lock: 1 (main door/high-priority room)',
      'Smart plugs: 4-6 (appliances)',
      'Smart speakers: 1-2 (Alexa/Google)',
      'Advanced security: motion + 2-3 cameras — Add On',
      'HVAC control: smart AC/thermostat (1-2 rooms) — Add On'
    ]
  },
  {
    id: 'premium',
    title: 'Premium Home Automation',
    img: 'Luxury.jpeg?v=2',
    price: '₹1,50,000 - ₹5,00,000+',
    desc: 'Ideal for full automation, high-end security, and seamless integration for ultimate convenience.',
    items: [
      'Smart lighting: 12-16 bulbs (all rooms)',
      'Motorized curtains (all windows)',
      'Smart locks (all main/key rooms)',
      'Multi-camera security: 3-5 (indoor/outdoor)',
      'Smart HVAC: AC/thermostat (2-3 units)',
      'Smart kitchen appliances (fridge, oven, etc.)',
      'Energy management system'
    ]
  }
]

const Features = () => {
  return (
    <section className="automation-packages" id="automation-packages">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Comfort. Control. Convenience. All in One Touch</h2>
          <p className="section-subtitle">Tailored packages to suit every home — from essential smart lighting to full-home luxury automation.</p>
        </header>

        <div className="package-grid">
          {packages.map(p => (
            <article key={p.id} className="package-card">
              <div className="package-image">
                <img src={p.id === 'basic' ? imgBasic : p.id === 'mid' ? imgMedium : imgLuxury} alt={p.title} />
              </div>
              <div className="package-body">
                <h3 className="package-title">{p.title}</h3>
                <ul className="package-list">
                  {p.items.map((it, i) => <li key={i}>{it}</li>)}
                </ul>
                <div className="package-price">{p.price}</div>
                <p className="package-desc">{p.desc}</p>
                <div className="package-actions">
                  <a href="#contact" className="cta-button">Schedule Consultation</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
