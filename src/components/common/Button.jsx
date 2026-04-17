import React from 'react';

export default function Button({ children, variant = 'gold', className = '', ...props }) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl';
  
  const variants = {
    gold: 'px-6 py-3 bg-gold text-dark hover:bg-yellow-600',
    dark: 'px-6 py-3 bg-dark text-cream hover:bg-gray-900',
    outline: 'px-6 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-dark',
    secondary: 'px-6 py-3 bg-accent text-cream hover:bg-opacity-80',
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
