import Header from './Header';
import './QuickLearners.css';

const QuickLeaners = () => {
  return (
    <>
      <Header />

      <div className="home-container">
        {/* Hero Section */}
        <section className="hero">
          <h1>Welcome to <span>VermaBytes</span> 🚀</h1>
          <p>Empowering quick learners with technology, motivation, and growth.</p>
        </section>

        {/* Quote Section */}
        <section className="quote-section">
          <blockquote>
            "Success usually comes to those who are too busy to be looking for it."
            <span>— Henry David Thoreau</span>
          </blockquote>
        </section>

        {/* Content Grid */}
        <section className="content-section">
          <div className="graph-box">
            <h3>Your Weekly Progress</h3>
            <div className="graph-placeholder">📊 [Progress Graph Coming Soon]</div>
          </div>

          <div className="image-box">
            <img src="https://cdn.pixabay.com/photo/2020/07/08/06/29/technology-5381217_1280.jpg" alt="Learn" />
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 VermaBytes. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default QuickLeaners;
