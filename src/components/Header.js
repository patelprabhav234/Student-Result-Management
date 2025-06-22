import React from 'react';
import { BookOpen } from 'lucide-react';
import '../styles/Header.css';
const Header = () => {
  return (
    <header className="header">
      <h1 className="title">
        <BookOpen size={32} className="title-icon" />
        Student Result Management System
      </h1>
    </header>
  );
};
export default Header;