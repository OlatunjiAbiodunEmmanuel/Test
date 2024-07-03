
import React from 'react';
import ProductTable from './components/ProductTable';

const Home = () => {
  return (
    <div className="container mx-auto px-4 bg-red500 z-10 custom-scrollbar max-w-[70rem]">
      <h1 className="my-4 text-lg font-medium leading-6">Department List</h1>
      <ProductTable />
    </div>
  );
};

export default Home;
