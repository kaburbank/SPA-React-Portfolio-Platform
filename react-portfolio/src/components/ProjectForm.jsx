import React from "react";
import { useState } from "react";

//Component to handle project addition form
function ProjectForm({ onAddProject }) {
    //Form state
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    //Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description && imageUrl) {
            const newProject = { title, description, imageUrl };
            onAddProject(newProject);
            setTitle("");
            setDescription("");
            setImageUrl("");
        } else if (!title || !description || !imageUrl) {
            alert("Please fill in all fields before submitting.");
        };

        //Input validation function
        const inputValidation = () => {
          if (!title.trim() || !description.trim() || !imageUrl.trim()) {
            return false;
          }
            return true;
        };

        if (!inputValidation()) {
          alert("All fields are required.");
          return;
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
                    type="text"
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
