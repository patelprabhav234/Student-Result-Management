import React from 'react';
import { Search, Plus } from 'lucide-react';
import '../styles/SearchControls.css';
const SearchControls = ({
  searchTerm,
  setSearchTerm,
  selectedClass,
  setSelectedClass,
  classes,
  onAddStudent
}) => {
  return (
    <div className="controls">
      <div className="search-container">
        <Search size={20} className="search-icon" />
        <input
          type="text"
          placeholder="Search students..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <select
        value={selectedClass}
        onChange={(e) => setSelectedClass(e.target.value)}
        className="select"
      >
        <option value="">All Classes</option>
        {classes.map(cls => (
          <option key={cls} value={cls}>{cls}</option>
        ))}
      </select>

      <button onClick={onAddStudent} className="add-button">
        <Plus size={20} />
        Add Student
      </button>
    </div>
  );
};
export default SearchControls;