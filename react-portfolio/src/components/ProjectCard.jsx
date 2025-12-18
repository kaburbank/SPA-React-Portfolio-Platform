import React from "react";

//Component to display individual project details
function ProjectCard({ project }) {
    console.log(project.imageUrl);

  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
