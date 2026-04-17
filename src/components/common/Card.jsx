import React from 'react';

export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`
        bg-white rounded-xl p-6 shadow-lg
        ${hover ? 'hover:shadow-2xl transition-shadow duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
