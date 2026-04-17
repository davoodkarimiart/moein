import React from 'react'

const Button = ({ 
  children, 
  variant = 'gold', 
  size = 'md', 
  className = '',
  ...props 
}) => {
  const variants = {
    gold: 'bg-gold hover:bg-yellow-600 text-dark font-semibold shadow-lg hover:shadow-xl',
    dark: 'bg-dark hover:bg-gray-900 text-cream dark:bg-cream dark:text-dark font-semibold',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-dark font-semibold',
    ghost: 'hover:bg-gray-200 dark:hover:bg-slate-700 text-dark dark:text-cream font-semibold'
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <button
      className={`font-semibold rounded-lg transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
