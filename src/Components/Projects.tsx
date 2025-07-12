// src/Components/Projects.jsx
import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'E-Learning Platform',
      desc: 'A responsive platform with video lectures, quizzes, and progress tracking.',
      image: 'https://source.unsplash.com/300x200/?elearning,code',
    },
    {
      title: 'Todo Task Manager',
      desc: 'A React app to manage tasks with user login and MongoDB integration.',
      image: 'https://source.unsplash.com/300x200/?todo,app',
    },
    {
      title: 'Portfolio Website',
      desc: 'Personal portfolio built with React, animations, and dark mode toggle.',
      image: 'https://source.unsplash.com/300x200/?portfolio,developer',
    },
  ];

  return (
    <div className="projects-page">
      <h2 className="projects-title">📁 Our Projects</h2>
      <p className="projects-subtext">Check out real-world projects built by our learners and mentors.</p>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            {/* <img src={project.image} alt={project.title} /> */}
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <button className="project-btn">View Project</button>
          </div>
          
        ))}
      </div>
      
    </div>
    
  );
};

export default Projects;
