
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Projects from './Components/Projects';
import About from './Components/About';
import Courses from './Components/Courses';
import CourseDetails from './Components/CourseDetails';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';
import './index.css';
import KidsCourses from './Components/KidsCourses';
import KidsCourseDetail from './Components/KidsCoursedetails';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/kidsCourses" element={<KidsCourses />} />
        <Route path="/kidsCourses/:slug" element={<KidsCourseDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
