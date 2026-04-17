import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default function Card({ children, className = '', hover = true }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`
        ${isDarkMode ? 'bg-gray-700 text-cream' : 'bg-white text-dark'} rounded-xl p-6 shadow-lg
        ${hover ? 'hover:shadow-2xl transition-shadow duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
