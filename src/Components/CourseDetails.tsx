import { useParams, Link } from 'react-router-dom';

const courseList = [
  {
    title: 'HTML5 & CSS3',
    content: 'This course covers HTML tags, CSS selectors, flexbox, grid, responsive design, and real-world projects.',
  },
  {
    title: 'JavaScript Essentials',
    content: 'You will learn variables, functions, arrays, DOM manipulation, ES6, and async programming.',
  },
  // ... other courses
];
const CourseDetails = () => {
  const { id } = useParams();
  const course = courseList[id];

  if (!course) return <p>Comming Soon.....</p>;

  return (
    <div style={{ padding: '30px', fontFamily: 'Poppins' }}>
      <h2>{course.title}</h2>
      <p style={{ fontSize: '17px', lineHeight: '1.6', marginTop: '15px' }}>{course.content}</p>
      <Link to="/">
        <button style={{ marginTop: '30px', padding: '10px 20px' }}>← Back to Courses</button>
      </Link>
    </div>
  );
};

export default CourseDetails;