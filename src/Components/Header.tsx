import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [authStep, setAuthStep] = useState('signup');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAuthClick = () => {
    if (authStep === 'signup') setAuthStep('login');
    else if (authStep === 'login') setAuthStep('logout');
    else setAuthStep('signup');
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="header">
        <div className="logo-brand">
          <div className="logo-icon">VB</div>
          <h1 className="brand-name">
            <span className="verma">Verma</span>
            <span className="bytes">Bytes</span>
          </h1>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contacts" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>

        <div className="auth-button">
          {authStep === 'signup' && (
            <button className="btn signup-btn" onClick={handleAuthClick}>Sign Up</button>
          )}
          {authStep === 'login' && (
            <button className="btn login-btn" onClick={handleAuthClick}>Login</button>
          )}
          {authStep === 'logout' && (
            <button className="btn logout-btn" onClick={handleAuthClick}>Logout</button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
