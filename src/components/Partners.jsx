import React from 'react';
import googleLogo from '../assets/partners/google.svg';
import hikvisionLogo from '../assets/partners/hikvision.svg';
import legrandLogo from '../assets/partners/legrand.svg';
import awsLogo from '../assets/partners/aws.svg';
import ciscoLogo from '../assets/partners/cisco.svg';

const partners = [
  { id: 1, name: 'Google', img: googleLogo },
  { id: 2, name: 'Hikvision', img: hikvisionLogo },
  { id: 3, name: 'Legrand', img: legrandLogo },
  { id: 4, name: 'Amazon Web Services', img: awsLogo },
  { id: 5, name: 'Cisco', img: ciscoLogo },
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
                <img src={p.img} alt={p.name} className="partner-img" />
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
