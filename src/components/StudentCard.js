import React from 'react';
import { User, Edit, Trash2 } from 'lucide-react';
import { calculateAverage, getGrade, getStatus } from '../utils/calculations';
import '../styles/StudentCard.css';

const StudentCard = ({ student, onEdit, onDelete }) => {
  const average = calculateAverage(student.subjects);
  const grade = getGrade(average);
  const status = getStatus(average);

  return (
    <div className="student-card">
      <div className="student-header">
        <div className="student-info">
          <User size={24} className="student-icon" />
          <div>
            <h3 className="student-name">{student.name}</h3>
            <p className="student-details">
              {student.rollNumber} • {student.class}
            </p>
          </div>
        </div>
        <div className="actions">
          <button onClick={onEdit} className="action-button">
            <Edit size={16} />
          </button>
          <button onClick={onDelete} className="action-button delete-button">
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <div className="subjects">
        {Object.entries(student.subjects).map(([subject, mark]) => (
          <div key={subject} className="subject-row">
            <span className="subject-name">{subject}</span>
            <span className="subject-mark">{mark}</span>
          </div>
        ))}
      </div>

      <div className="result-summary">
        <div className="summary-item">
          <span className="summary-label">Average:</span>
          <span className="summary-value">{average.toFixed(1)}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Grade:</span>
          <span className="summary-value grade">{grade}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Status:</span>
          <span className={`summary-value ${status.toLowerCase()}`}>
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;