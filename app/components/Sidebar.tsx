import React, { useState } from 'react';
import { FaRupeeSign, FaStar } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import ProgressBar from '@ramonak/react-progress-bar';

type FilterType = {
  priceRange: [number, number];
  rating: number;
};

interface SidebarProps {
  onFilterChange: (filters: Partial<FilterType>) => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  onFilterChange,
  isSidebarOpen,
  toggleSidebar,
}) => {
  const defaultPriceRange: [number, number] = [0, 60000];
  const defaultRating = 0;
  
  const [showPriceOptions, setShowPriceOptions] = useState(true);
  const [showRatingOptions, setShowRatingOptions] = useState(true);
  const [priceRange, setPriceRange] = useState<[number, number]>(
    defaultPriceRange
  );
  const [rating, setRating] = useState<number>(defaultRating);

  const getProgressBarValue = (rating: number) => {
    switch (rating) {
      case 4:
        return 75; 
      case 3:
        return 50; 
      default:
        return 0; 
    }
  };

  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
    onFilterChange({ priceRange: range });
  };

  const handleRatingChange = (rating: number) => {
    setRating(rating);
    onFilterChange({ rating });

    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  const clearFilters = () => {
    setPriceRange(defaultPriceRange);
    setRating(defaultRating);
    onFilterChange({ priceRange: defaultPriceRange, rating: defaultRating });

    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  return (
    <div
      className={`bg-gray-200 text-gray-900 w-3/4 md:w-1/5 mt-16 p-4 shadow-lg dark:bg-gray-800 dark:text-gray-300 fixed top-0 left-0 h-screen z-40 transform transition-transform duration-300 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg md:text-xl font-bold">Filters</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-red-600 dark:text-red-400 hover:underline focus:outline-none"
        >
          Clear Filters
        </button>
      </div>

      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer mb-2"
          onClick={() => setShowPriceOptions(!showPriceOptions)}
          aria-expanded={showPriceOptions}
          role="button"
        >
          <h4 className="text-md md:text-lg font-semibold flex items-center">
            <FaRupeeSign className="mr-2 text-green-500" /> Price Range
          </h4>
          {showPriceOptions ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {showPriceOptions && (
          <div className="px-2">
            <Slider
              range
              min={0}
              max={60000}
              value={priceRange}
              onChange={(value) => handlePriceChange(value as [number, number])}
              trackStyle={[{ backgroundColor: '#48BB78' }]}
              handleStyle={[
                { borderColor: '#48BB78', backgroundColor: '#48BB78' },
              ]}
              railStyle={{ backgroundColor: '#d3d3d3' }}
            />
            <div className="flex justify-between mt-2 text-xs md:text-sm">
              <span>{`₹${priceRange[0]}`}</span>
              <span>{`₹${priceRange[1]}`}</span>
            </div>
          </div>
        )}
      </div>

      <div>
        <div
          className="flex justify-between items-center cursor-pointer mb-2"
          onClick={() => setShowRatingOptions(!showRatingOptions)}
          aria-expanded={showRatingOptions}
          role="button"
        >
          <h4 className="text-md md:text-lg font-semibold flex items-center">
            <FaStar className="mr-2 text-yellow-500" /> Rating
          </h4>
          {showRatingOptions ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {showRatingOptions && (
          <div>
            <ul className="mb-4">
              <li
                className="cursor-pointer hover:bg-gray-300 p-2 rounded dark:hover:bg-gray-700 flex items-center transition-all duration-300"
                onClick={() => handleRatingChange(4)}
              >
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 mr-1" />
                ))}
                & Up
              </li>
              <li
                className="cursor-pointer hover:bg-gray-300 p-2 rounded dark:hover:bg-gray-700 flex items-center transition-all duration-300"
                onClick={() => handleRatingChange(3)}
              >
                {[...Array(3)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 mr-1" />
                ))}
                & Up
              </li>
            </ul>
            <div className="px-2">
              <ProgressBar
                completed={getProgressBarValue(rating)}
                bgColor="#FFD700"
                baseBgColor="#d3d3d3"
                height="8px"
                borderRadius="5px"
                labelColor="#000"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
