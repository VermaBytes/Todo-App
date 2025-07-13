import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h2 className="about-title">👋 About VermaBytes</h2>
      <p className="about-subtext">
        At VermaBytes, we believe education should be accessible, interactive, and transformative.
      </p>

      <div className="about-content">
        <div className="about-text">
          <h3>🚀 Our Mission</h3>
          <p>
            We empower learners from all backgrounds by providing high-quality educational resources,
            interactive learning paths, and real-world projects that prepare them for tomorrow’s tech-driven world.
          </p>

          <h3>🎯 Our Vision</h3>
          <p>
            To become the most trusted e-learning platform for beginners, students, and professionals by
            creating a community of continuous learners and mentors.
          </p>

          <h3>📌 What Makes Us Different?</h3>
          <ul>
            <li>✔️ Practical and hands-on learning</li>
            <li>✔️ Project-based curriculum</li>
            <li>✔️ Personalized mentor support</li>
            <li>✔️ Continuous career guidance</li>
          </ul>
        </div>

        {/* <div className="about-image">
          <img src="https://source.unsplash.com/500x400/?education,team" alt="About VermaBytes" />
        </div> */}
      </div>
    </div>
  );
};

export default About;
