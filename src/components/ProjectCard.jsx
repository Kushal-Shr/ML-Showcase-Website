import React from 'react';
import './style.css';

const ProjectCard = ({ projectData }) => {
  return (
    <div className="projects-container">
      {projectData.length === 0 ? (
        <div>No projects to display</div>
      ) : (
        projectData.map((project) => (
          <div key={project.id} className="card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="card-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <a href={project.p_link} target="_blank" rel="noopener noreferrer">
                <button className="demo-btn">Demo 🡆</button>
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectCard;
