import React from 'react';

export const Card = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-gray-800 dark:text-white shadow rounded-lg p-4 ${className}`}>
    {children}
  </div>
);

export const Button = ({ children, onClick, className = '' }) => (
  <button 
    onClick={onClick} 
    className={`bg-blue-500 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700 px-4 py-2 rounded ${className}`}
  >
    {children}
  </button>
);

export const Input = ({ className = '', ...props }) => (
  <input 
    {...props} 
    className={`border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded px-2 py-1 w-full placeholder-gray-500 dark:placeholder-gray-300 ${className}`} 
  />
);

export const Select = ({ children, className = '', ...props }) => (
  <select 
    {...props} 
    className={`border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded px-2 py-1 w-full ${className}`}
  >
    {children}
  </select>
);

export const Label = ({ children, className = '' }) => (
  <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 ${className}`}>
    {children}
  </label>
);
