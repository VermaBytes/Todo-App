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
          <a href="https://www.instagram.com/shobhitmanar/profilecard/?igsh=Nzl3dWd3eHl6bmFl" aria-label="Instagram">📸</a>
          <a href="https://whatsapp.com/channel/0029VaHoCNbBvvscDglD082E" target="_blank" rel="noopener noreferrer">💬</a>
          <a href="https://youtube.com/@eakjhalak?si=OCT9zTVluvKHG5J6" aria-label="YouTube">▶️</a>
          <a href="https://www.linkedin.com/in/shobhit-verma-549744231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn">🔗</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
