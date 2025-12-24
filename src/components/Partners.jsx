import React from 'react';

const partners = [
  { id: 'google', name: 'Google Home', img: '/partners/google.png?v=2' },
  { id: 'hikvision', name: 'Hikvision', img: '/partners/hikvision.png?v=2' },
  { id: 'legrand', name: 'Legrand', img: '/partners/legrand.png?v=2' },
  { id: 'aws', name: 'AWS IoT', img: '/partners/aws.png?v=2' },
  { id: 'cisco', name: 'Cisco', img: '/partners/cisco.png?v=2' }
];

const Partners = () => {
  return (
    <section className="partners" aria-label="Technology partners">
      <div className="container">
        <header className="section-header">
          <p className="partners-label">Trusted Technology Partners</p>
          <p className="section-subtitle">We collaborate with industry-leading brands to deliver secure, reliable smart home experiences.</p>
        </header>

        <div className="partners-grid">
          {partners.map(p => (
            <article key={p.id} className="partner-card">
              <div className="partner-media">
                <img src={p.img} alt={p.name} className="partner-img" onError={(e)=>{e.currentTarget.style.display='none'}} />
                <div className="partner-badge">{p.name.split(' ').map(n=>n[0]).join('')}</div>
              </div>
              <div className="partner-name">{p.name}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
