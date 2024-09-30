import React, { useState, useEffect } from 'react';
import Project from './components/Project';
import './App.css'

function App() {
  const [theme, setTheme] = useState('light');

  // Toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Apply the theme to the root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
      <Project />
    </div>
  );
}

export default App;
