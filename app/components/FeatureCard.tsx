import React from 'react';

interface FeatureCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    rating: number;
    description: string;
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({ product }) => {
  return (
    <div className="bg-white p-4 h-56 shadow-lg rounded-md dark:bg-gray-800 dark:text-white dark:shadow-gray-600 transition-transform duration-300 transform hover:scale-105">
      <h3 className="text-xl font-semibold text-black dark:text-gray-100">{product.name}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{product.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-gray-800 font-bold dark:text-gray-200">₹{product.price}</span>
        <span className="text-yellow-500 dark:text-yellow-300">{`⭐ ${product.rating}`}</span>
      </div>
      <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300">
        Click here
      </button>
    </div>
  );
};

export default FeatureCard;
