import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    onSearch(query);
  }, [query, onSearch]);

  return (
    <div className="relative w-1/2 md:w-64">
      <input
        type="text"
        className="w-full p-3 pl-10 border text-black border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:focus:ring-blue-400 transition-transform duration-300 transform hover:scale-105"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <FaSearch className="text-gray-500 dark:text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;
