import React, { useState, useEffect } from 'react';
import '../styles/StudentForm.css';

const StudentForm = ({ student, classes, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    class: '',
    subjects: {
      Mathematics: '',
      Physics: '',
      Chemistry: '',
      English: '',
      Biology: ''
    }
  });

  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'English', 'Biology'];

  useEffect(() => {
    if (student) {
      setFormData({
        name: student.name,
        rollNumber: student.rollNumber,
        class: student.class,
        subjects: { ...student.subjects }
      });
    }
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.rollNumber && formData.class) {
      const studentData = {
        ...formData,
        subjects: {
          ...formData.subjects,
          Mathematics: parseInt(formData.subjects.Mathematics) || 0,
          Physics: parseInt(formData.subjects.Physics) || 0,
          Chemistry: parseInt(formData.subjects.Chemistry) || 0,
          English: parseInt(formData.subjects.English) || 0,
          Biology: parseInt(formData.subjects.Biology) || 0
        }
      };
      onSave(studentData);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubjectChange = (subject, value) => {
    setFormData(prev => ({
      ...prev,
      subjects: {
        ...prev.subjects,
        [subject]: value
      }
    }));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="modal-title">
          {student ? 'Edit Student' : 'Add New Student'}
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label className="label">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="input"
                required
              />
            </div>

            <div className="form-group">
              <label className="label">Roll Number</label>
              <input
                type="text"
                value={formData.rollNumber}
                onChange={(e) => handleInputChange('rollNumber', e.target.value)}
                className="input"
                required
              />
            </div>

            <div className="form-group">
              <label className="label">Class</label>
              <select
                value={formData.class}
                onChange={(e) => handleInputChange('class', e.target.value)}
                className="input"
                required
              >
                <option value="">Select Class</option>
                {classes.map(cls => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>
            </div>
          </div>

          <h3 className="sub-title">Subject Marks</h3>
          <div className="subjects-grid">
            {subjects.map(subject => (
              <div key={subject} className="form-group">
                <label className="label">{subject}</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={formData.subjects[subject]}
                  onChange={(e) => handleSubjectChange(subject, e.target.value)}
                  className="input"
                />
              </div>
            ))}
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onCancel} className="cancel-button">
              Cancel
            </button>
            <button type="submit" className="save-button">
              {student ? 'Update' : 'Add'} Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;