import { Link } from "react-router-dom";
import './KidsCourses.css';

const kidsSubjects = [
  {
    title: "Mathematics",
    desc: "Learn numbers, shapes, addition, and subtraction in a fun way!",
    slug: "math",
    image: "https://source.unsplash.com/300x200/?math,kids,education",
  },
  {
    title: "Science",
    desc: "Discover plants, animals, the human body, and simple experiments.",
    slug: "science",
    image: "https://source.unsplash.com/300x200/?science,kids,learning",
  },
  {
    title: "English",
    desc: "Improve vocabulary, grammar, and storytelling with fun activities.",
    slug: "english",
    image: "https://source.unsplash.com/300x200/?english,kids,books",
  },
  {
    title: "Computer Basics",
    desc: "Explore computer parts, typing, and internet safety for kids.",
    slug: "computers",
    image: "https://source.unsplash.com/300x200/?computer,kids,technology",
  },
  {
    title: "Art & Craft",
    desc: "Unleash creativity through drawing, coloring, and paper craft.",
    slug: "art",
    image: "https://source.unsplash.com/300x200/?kids,art,craft",
  },
  {
    title: "Moral Education",
    desc: "Learn good habits, kindness, respect, and discipline.",
    slug: "moral",
    image: "https://source.unsplash.com/300x200/?kids,morals,education",
  },
];

const KidsCourses = () => {
  return (
    <div className="kids-courses-page">
      <h2>🎒 Kids Learning Courses</h2>
      <p>Choose a subject to begin your fun learning journey!</p>

      <div className="kids-courses-grid">
        {kidsSubjects.map((course, index) => (
          <div className="kids-course-card" key={index}>
            {/* <img src={course.image} alt={course.title} /> */}
            <h3>{course.title}</h3>
            <p>{course.desc}</p>
            <Link to={`/kidsCourses/${course.slug}`} className="start-btn">
              Start Learning
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidsCourses;
