import React from 'react';
import { Award } from 'lucide-react';
import '../styles/NoResults.css';
const NoResults = () => {
  return (
    <div className="no-results">
      <Award size={48} className="no-results-icon" />
      <h3>No students found</h3>
      <p>Try adjusting your search or add a new student.</p>
    </div>
  );
};
export default NoResults;