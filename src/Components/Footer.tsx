import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="vb-footer">
        <hr style={{ border: 'none', height: '3px', backgroundColor: 'green' }} />
      <div className="footer-inline">
        {/* Logo and Brand */}
        <div className="footer-logo">
          <div className="logo-icon">VB</div>
          <span className="brand-name">
            <span className="verma">Verma</span>
            <span className="bytes">Bytes</span>
          </span>
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          © 2025 VermaBytes. Built with ❤️ for learners.
        </p>

        {/* Social Icons */}
        <div className="footer-socials">
          <a href="#" aria-label="Instagram">📸</a>
          <a href="#" aria-label="YouTube">▶️</a>
          <a href="#" aria-label="LinkedIn">🔗</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
