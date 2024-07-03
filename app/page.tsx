"use client"; // Ensure this is treated as a client component

import React from 'react';
import ProductTable from './components/ProductTable'; // Import the ProductTable component

const Home = () => {
  return (
    <div className="container mx-auto px-4 bg-red500">
      <h1 className="my-4 text-lg font-medium leading-6">Department List</h1>
      <ProductTable />
    </div>
  );
};

export default Home;
