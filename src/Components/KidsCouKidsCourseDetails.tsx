import { Link, useParams } from "react-router-dom";
import './KidsCourseDetails.css';

const courseDetails = {
  math: {
    title: "Mathematics",
    description: "Learn basic math with fun games and colorful visuals!",
    topics: [
      "Counting Numbers",
      "Addition & Subtraction",
      "Shapes & Patterns",
      "Time & Calendar",
      "Measurement",
    ],
  },
  science: {
    title: "Science",
    description: "Explore nature, animals, plants, and easy experiments!",
    topics: [
      "Parts of Plants",
      "Human Body",
      "Weather & Seasons",
      "Animals & Their Homes",
      "Simple Experiments",
    ],
  },
  english: {
    title: "English",
    description: "Improve your English reading, writing and speaking skills.",
    topics: [
      "Alphabet & Phonics",
      "Simple Words & Sentences",
      "Story Reading",
      "Grammar Fun",
      "Picture-Based Writing",
    ],
  },
  computers: {
    title: "Computer Basics",
    description: "Learn about computers, typing and online safety.",
    topics: [
      "Parts of Computer",
      "Typing Practice",
      "Using Paint & Games",
      "Online Safety",
      "Keyboard & Mouse Use",
    ],
  },
  art: {
    title: "Art & Craft",
    description: "Color, paint, cut and create your imagination on paper!",
    topics: [
      "Drawing Basics",
      "Coloring Fun",
      "Origami Paper Craft",
      "Creative Activities",
      "Making Greeting Cards",
    ],
  },
  moral: {
    title: "Moral Education",
    description: "Develop good values, habits, and behavior.",
    topics: [
      "Good Manners",
      "Helping Others",
      "Cleanliness & Hygiene",
      "Respect for Elders",
      "Truth & Honesty",
    ],
  },
};

const KidsCourseDetails = () => {
  const { slug } = useParams();

  const course = slug ? courseDetails[slug as keyof typeof courseDetails] : null;

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>❌ Course Not Found</h2>
        <p>Please check the course URL or go back to courses.</p>
      </div>
    );
  }

  return (
    <div className="kids-course-details">
      <h2>{course.title}</h2>
      <p className="desc">{course.description}</p>
      <ul className="topic-list">
        {course.topics.map((topic, index) => (
          <li key={index}>📘 {topic}</li>
        ))}
      </ul>
      <Link to="/kidsCourses">
        <button style={{ marginTop: '30px', padding: '10px 20px' }}>← Back to Courses</button>
      </Link>
    </div>
  );
};

export default KidsCourseDetails;
