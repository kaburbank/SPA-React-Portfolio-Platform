import React from "react";
import { useState } from "react";

function ProjectForm({ onAddProject }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description && imageUrl) {
      const newProject = { title, description, imageUrl };
      onAddProject(newProject);
      setTitle("");
      setDescription("");
      setImageUrl("");
        };
    };
    
    return (
        <form className="project-form" onSubmit={handleSubmit}>
            <h2>Add New Project</h2>
            <label>
                Title:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>
                Description:
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <label>
                Image URL:
                <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
            </label>
            <button type="submit">Add Project</button>
        </form>
    );
};

export default ProjectForm;
