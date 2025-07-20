import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
  const courseList = [
    {
      title: 'HTML5 & CSS3',
      desc: 'Master the foundation of web development with semantic HTML and modern CSS.',
      content: 'This course covers HTML tags, CSS selectors, flexbox, grid, responsive design, and real-world projects.',
    },
    {
      title: 'JavaScript Essentials',
      desc: 'Learn JavaScript from scratch with real-world projects and problem-solving.',
      content: 'You will learn variables, functions, arrays, DOM manipulation, ES6, and async programming.',
    },
    {
      title: 'React.js Mastery',
      desc: 'Build dynamic web apps using React, hooks, and component-based architecture.',
      image: 'https://source.unsplash.com/300x200/?reactjs,frontend',
    },
    {
      title: 'Node.js & Express',
      desc: 'Create backend APIs using Node.js and Express with MongoDB integration.',
      image: 'https://source.unsplash.com/300x200/?nodejs,backend',
    },
    {
      title: 'UI/UX Design',
      desc: 'Design better interfaces using Figma, wireframes, and user testing.',
      image: 'https://source.unsplash.com/300x200/?design,figma',
    },
    
    // ... other courses
  ];

  return (
    <div className="courses-page">
      <h2 className="courses-title">📚 Our Courses</h2>
      <p className="courses-subtext">Choose from a variety of professional and beginner-friendly courses.</p>

      <div className="courses-grid">
        {courseList.map((course, index) => (
          <div className="course-card" key={index}>
            <h4>{course.title}</h4>
            <p>{course.desc}</p>
            <Link to={`/course/${index}`}>
              <button className="enroll-btn">Enroll Now</button>
            </Link>
            <div className="badge">★ 4.8</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
