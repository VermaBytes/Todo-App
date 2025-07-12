import React from 'react';
import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

  const [authStep, setAuthStep] = useState('signup'); // Possible: signup, login, logout

  const handleAuthClick = () => {
    if (authStep === 'signup') {
      setAuthStep('login');
    } else if (authStep === 'login') {
      setAuthStep('logout');
    } else {
      setAuthStep('signup'); // logout clicked
    }
  };

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

      <nav className="nav-links">
        <Link to="/">Home</Link>
  <Link to="/courses">Courses</Link>
  <Link to="/projects">Projects</Link>
  <Link to="/about">About</Link>
  <Link to="/contacts">Contact</Link>
      </nav>

      {/* Auth Button */}
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
