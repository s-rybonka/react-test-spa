import React from 'react';
import { FaBook } from 'react-icons/fa';

const UIFrameworkCard: React.FC = () => {
  
  return (
    <div className="mb-4">
      <div className="card-modern p-4">
        <h5 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">UI Framework Documentation</h5>
        <a
          href="https://tailwindcss.com/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          <FaBook />
          Tailwind CSS Documentation
        </a>
      </div>
    </div>
  );
  
};

export default UIFrameworkCard; 