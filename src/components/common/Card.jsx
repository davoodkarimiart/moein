import React from 'react'

const Card = ({ 
  children, 
  className = '',
  hover = true,
  ...props 
}) => {
  return (
    <div
      className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gold/10 ${
        hover ? 'hover:shadow-2xl hover:border-gold/30 transition-all duration-300 hover:-translate-y-1' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
