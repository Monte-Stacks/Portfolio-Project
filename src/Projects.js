// Projects.js

import React from 'react';
import './Projects.css'; // Import CSS file for styling

const Projects = () => {
  // Fake projects data
  const projects = [
    { id: 1, title: 'College Trip', description: 'His first-ever project using Agile/Scrum methodology. The College Trip Project saw Ryan and four other developers using sorting algorithms to take any number of colleges from user input and found the quickest, most efficient way to navigate to each of them. This program helped many students plan their visits to prospective colleges!' },
    { id: 2, title: 'VoiceIt!', description: 'VoiceIt! was a project developed by Ryan Monte and Harry Derderian--designed to bring a voice to college students across their campuses nationwide. By allowing for students to create their own petitions with petition signature goals, in the hopes that the administration would see their pleas--VoiceIt! revolutionized the way that social media is thought of in a university setting.' },
    { id: 3, title: 'Future ARG Project', description: 'The looming and mysterious multimedia project concieved of by Ryan and his long-time collaborator J.Nada will have users exploring the darkest depths of the internet, in search of a mystery that has plagued many since the early days of World Wide Web newsgroups. What dark secrets will they find?' },
    // Add more fake projects here if needed
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
