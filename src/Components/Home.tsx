
import './Home.css';

const Home = () => {
  return (
    <div className="edu-home">
      <section className="courses-section">
  <h2 className="section-title">Core Web Courses</h2>
  <div className="course-grid">
    <div className="course-card">
      <h3>🧱 HTML5</h3>
      <p>Master semantic structure, forms, multimedia, and accessibility using HTML5.</p>
    </div>
    <div className="course-card">
      <h3>🎨 CSS3</h3>
      <p>Style beautiful responsive websites with Flexbox, Grid, animations, and transitions.</p>
    </div>
    <div className="course-card">
      <h3>⚙️ JavaScript</h3>
      <p>Build interactive websites with modern JavaScript: DOM, ES6+, and dynamic logic.</p>
    </div>
  </div>
</section>
<hr />

      {/* ====== Testimonial Section ====== */}
      <section className="testimonial-section">
  <h2 className="section-title">What Our Learners Say</h2>
  <div className="testimonial-grid">
    <div className="testimonial-card">
      <p>“VermaBytes helped me build confidence in web development. The content is beginner-friendly and structured.”</p>
      <span>— Amit, Front-End Developer</span>
    </div>

    <div className="testimonial-card">
      <p>“Thanks to VermaBytes, I mastered JavaScript and landed an internship. Highly recommended for self-learners!”</p>
      <span>— Shobhit, Software Intern</span>
    </div>
  </div>
</section>
<hr />
      {/* ====== Footer ====== */}
      <footer className="footer">
        <p>© 2025 VermaBytes. Built with ❤️ for learners worldwide.</p>
      </footer>
    </div>
  );
};

export default Home;
