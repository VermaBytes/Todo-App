import './Banner.css';

const Banner = () => {
  return (
    <>
    <section className="banner">
      <div className="banner-content">
        <h2>Welcome to <span className="highlight">VermaBytes</span> 🚀</h2>
        <p>Learn new skills, grow your career, and join a community of passionate learners.</p>
        <a href="/courses" className="banner-btn">Explore Courses</a>
      </div>
    </section>
    <section className="features-section">
        <h2 className="section-title">Why Learn with VermaBytes?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🎓 Expert Mentors</h3>
            <p>Learn from industry professionals with hands-on experience.</p>
          </div>
          <div className="feature-card">
            <h3>📚 100+ Courses</h3>
            <p>Explore a wide range of courses in tech, business, and design.</p>
          </div>
          <div className="feature-card">
            <h3>💼 Career Support</h3>
            <p>Access resume help, mock interviews, and job placement assistance.</p>
          </div>
        </div>
      </section>
    </>
    
  );
};

export default Banner;
