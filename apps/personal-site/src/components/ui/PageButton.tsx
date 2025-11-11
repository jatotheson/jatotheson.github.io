import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
  children: React.ReactNode
}

export function PageButton({ 
  variant = 'default', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-colors duration-200"
  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "bg-white text-gray-900 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600"
  }

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}