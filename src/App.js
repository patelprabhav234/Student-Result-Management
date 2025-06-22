import React, { useState } from 'react';
import Header from './components/Header';
import SearchControls from './components/SearchControls';
import StudentCard from './components/StudentCard';
import StudentForm from './components/StudentForm';
import NoResults from './components/NoResults';
import { sampleStudents } from './data/sampleData';
import './styles/App.css';

const App = () => {
  const [students, setStudents] = useState(sampleStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const classes = ['9th Grade', '10th Grade', '11th Grade', '12th Grade'];

  const handleAddStudent = (student) => {
    const newStudent = {
      id: Date.now(),
      ...student
    };
    setStudents([...students, newStudent]);
    setShowAddForm(false);
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setShowAddForm(true);
  };

  const handleUpdateStudent = (updatedStudent) => {
    const updatedStudents = students.map(student =>
      student.id === editingStudent.id ? { ...student, ...updatedStudent } : student
    );
    setStudents(updatedStudents);
    setEditingStudent(null);
    setShowAddForm(false);
  };

  const handleDeleteStudent = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter(student => student.id !== id));
    }
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedClass === '' || student.class === selectedClass)
  );

  return (
    <div className="app">
      <Header />
      
      <SearchControls
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
        classes={classes}
        onAddStudent={() => setShowAddForm(true)}
      />

      {showAddForm && (
        <StudentForm
          student={editingStudent}
          classes={classes}
          onSave={editingStudent ? handleUpdateStudent : handleAddStudent}
          onCancel={() => {
            setShowAddForm(false);
            setEditingStudent(null);
          }}
        />
      )}

      <div className="students-grid">
        {filteredStudents.map(student => (
          <StudentCard
            key={student.id}
            student={student}
            onEdit={() => handleEditStudent(student)}
            onDelete={() => handleDeleteStudent(student.id)}
          />
        ))}
      </div>

      {filteredStudents.length === 0 && <NoResults />}
    </div>
  );
};

export default App;