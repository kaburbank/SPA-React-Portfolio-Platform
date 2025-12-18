import React from "react";

//Component for search bar to filter projects
function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search projects..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;
