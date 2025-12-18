import React from "react";
import { useState } from "react";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import { initialProjects } from "./data/data.js";
import "./App.css";

function App() {
  //State to hold projects and search term
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");

  //Function to add a new project
  const handleAddProject = (newProject) => {
    setProjects([...projects, { id: projects.length + 1, ...newProject }]);
  };

  //Filter projects based on search term
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>React Portfolio Showcase App</h1>
      <ProjectForm onAddProject={handleAddProject}/>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
};

export default App;
