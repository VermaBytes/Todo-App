
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
          <p><strong>Phone:</strong> +91 8381900990</p>
          <p><strong>Location:</strong> Sakethu, Lakhimpur Kheri, India</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/shobhitmanar/profilecard/?igsh=Nzl3dWd3eHl6bmFl"><span>📸</span></a>
            <a href="https://whatsapp.com/channel/0029VaHoCNbBvvscDglD082E" target="_blank" rel="noopener noreferrer">
               <span>💬</span></a>
             <a href="https://youtube.com/@eakjhalak?si=OCT9zTVluvKHG5J6 "><span>▶️</span></a>
            <a href="https://www.linkedin.com/in/shobhit-verma-549744231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><span>🔗</span></a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contacts;
