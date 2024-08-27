import React, { useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC<{ toggleSidebar: () => void; isSidebarOpen: boolean }> = ({ toggleSidebar, isSidebarOpen }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  };

  return (
    <nav className="bg-gray-300 text-black p-4 shadow-lg dark:bg-gray-900 dark:text-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <button onClick={toggleSidebar} className="p-2 md:hidden focus:outline-none">
          {isSidebarOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
        <h1 className="text-2xl font-bold flex-1 text-center">Writix AI</h1>
        <button onClick={toggleDarkMode} className="p-2 rounded-full focus:outline-none">
          {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
