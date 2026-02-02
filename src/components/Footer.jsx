import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>SERAN HOMES</h3>
            <p>Intelligent Living. Effortlessly Luxurious.</p>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>Email: sales@seranhomeautomation.com </p>
            <p>Phone: +91 8095586121</p>
            <p>Address: Bengaluru, India</p>
          </div>
          <div className="footer-social">
            <h4>Follow us</h4>
            <div className="social-icons">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="#E1306C" strokeWidth="1.2"/>
                  <circle cx="12" cy="12" r="3" stroke="#E1306C" strokeWidth="1.2"/>
                </svg>
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2v-3h2.2V9.1c0-2.2 1.3-3.4 3.3-3.4.95 0 1.95.17 1.95.17v2.15h-1.1c-1.08 0-1.42.67-1.42 1.36V12h2.42l-.39 3h-2.03v7A10 10 0 0 0 22 12z" fill="#1877F3"/>
                </svg>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4zM9 8.5h3.8v2.1h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6V24h-4V15.5c0-2.1 0-4.8-2.9-4.8-2.9 0-3.2 2.2-3.2 4.6V24H9z" fill="#0A66C2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Seran Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
