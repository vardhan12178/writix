
"use client"
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import CategoriesDropdown from './components/CategoriesDropdown';
import FeatureCard from './components/FeatureCard';
import Navbar from './components/Navbar';
import { products } from './data/mockData';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number] | undefined>(
    undefined
  );
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleFilterChange = (filters: {
    priceRange?: [number, number];
    rating?: number;
  }) => {
    setPriceRange(filters.priceRange);
    setRating(filters.rating);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === '' || product.category === selectedCategory) &&
      (priceRange
        ? product.price >= priceRange[0] && product.price <= priceRange[1]
        : true) &&
      (rating ? product.rating >= rating : true) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex min-h-screen">

        <div className="md:w-1/5">
          <Sidebar
            onFilterChange={handleFilterChange}
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        </div>

     
        <div className="flex-1 p-4  bg-gray-100 dark:bg-gray-700 transition-all duration-300">
          <div className="flex justify-between mt-16 mb-4">
            <SearchBar onSearch={handleSearch} />
            <CategoriesDropdown
              onSelectCategory={handleCategorySelect}
              categories={['Electronics', 'Clothing', 'Accessories']}
            />
          </div>
          <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <FeatureCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
