import React from "react";

// Define the ProjectCard component
function ProjectCard({ project, onDelete }) {
  console.log(project.imageUrl);

  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <button onClick={() => onDelete(project.id)}>Remove</button>
    </div>
  );
};

export default ProjectCard;