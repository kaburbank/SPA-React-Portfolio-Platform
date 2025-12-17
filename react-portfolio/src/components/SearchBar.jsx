import React from "react";

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
