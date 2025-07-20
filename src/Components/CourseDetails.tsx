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
  const { id } = useParams<{ id: string }>(); // Tell TypeScript id will be a string

  // Convert id to number safely (assuming route param is index like 0, 1, 2)
  const courseIndex = id ? parseInt(id, 10) : -1;

  // Get the course from list using index
  const course = courseList[courseIndex];

  if (!course) return <p>Coming Soon.....</p>;

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
