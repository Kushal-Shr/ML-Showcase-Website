import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectList from './ProjectList';

const Project = () => {
  const [projectData] = useState(ProjectList);

  return (
    <div>
      <section className="header">
        <h1>MY MACHINE LEARNING PROJECTS</h1>
      </section>
      <section className="projects-container">
        <ProjectCard projectData={projectData} />
      </section>
    </div>
  );
};

export default Project;
