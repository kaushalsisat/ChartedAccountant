import React from "react";

const SearchBar = ({ searchQuery, onSearchChange }) => (
  <div className="mb-4 mt-4">
    <input
      type="text"
      placeholder="Search accountants"
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
      className="w-full p-2 border rounded-lg mt-4"
    />
  </div>
);

export default SearchBar;
