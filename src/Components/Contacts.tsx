// src/Components/Contact.jsx
import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="contact-page">
      <h2 className="contact-title">📬 Contact Us</h2>
      <p className="contact-subtext">We’d love to hear from you! Reach out with questions, suggestions, or just to say hello.</p>

      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h4>Get in touch</h4>
          <p><strong>Email:</strong> support@vermabytes.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Location:</strong> Sakethu, Lakhimpur Kheri, India</p>
          <div className="social-icons">
            <a href="#"><span>📸</span></a>
            <a href="#"><span>▶️</span></a>
            <a href="#"><span>🔗</span></a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contacts;
