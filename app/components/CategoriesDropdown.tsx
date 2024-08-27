import React from 'react';

interface CategoriesDropdownProps {
  onSelectCategory: (category: string) => void;
  categories: string[];
}

const CategoriesDropdown: React.FC<CategoriesDropdownProps> = ({ onSelectCategory, categories }) => {
  return (
    <div className="relative inline-block w-58">
      <select
        onChange={(e) => onSelectCategory(e.target.value)}
        className="block w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:focus:ring-blue-400 transition-transform duration-300 transform hover:scale-105"
      >
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoriesDropdown;
