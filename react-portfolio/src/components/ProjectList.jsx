import React from "react";
import ProjectCard from "./ProjectCard";

//Component to display list of projects
function ProjectList({ projects, onDeleteProject }) {
   
    return (
        <div className="project-list">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onDelete={onDeleteProject} />
            ))}
        </div>
    );
};

export default ProjectList;
