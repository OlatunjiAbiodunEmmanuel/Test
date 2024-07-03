"use client"; // Ensure this is treated as a client component

import React, { useContext } from "react";
import { ProductContext } from "../components/ApiContext";
import Image from "next/image";

const ProductTable = () => {
  const { products, loading } = useContext(ProductContext);

  console.log("Products:", products); // Log the products

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
  }

  if (!Array.isArray(products)) {
    return <div>Error: Products data is not an array</div>;
  }

  const truncateDescription = (description: string, wordLimit: number) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return description;
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr className="">
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <input type="checkbox" />
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            S/N
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Image
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            SKU
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Description
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Title
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Gender
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Retail
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Quantity
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Size
          </th>
          {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th> */}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {products.map((product, index) => (
          <tr key={product.SKU}>
            <td className="px-4 text-xs py-4 whitespace-nowrap">
              <input type="checkbox" />
            </td>
            <td className="px-4 text-xs py-4 whitespace-nowrap">{index + 1}</td>
            <td className="px-4 text-xs py-4 whitespace-nowrap">
              <Image
                src={product.Image_1}
                alt={product.Url}
                width={30}
                height={30}
              />
            </td>
            <td className="px-4 py-4 whitespace-nowrap">{product.SKU}</td>
            <td className="px4 py-4 whitespace-nowrap break-words">{product.Name}</td>
            <td className="px4 text-xs py-4 whitespace-nowrap">
              <span title={product.Description}>
                {truncateDescription(product.Description, 3)}
              </span>
            </td>
            <td className="px-4 text-xs py-4 whitespace-nowrap">
              {" "}
              <span title={product.Title}>
                {truncateDescription(product.Title, 3)}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{product.Gender}</td>
            <td className="px-6 py-4 whitespace-nowrap">{product.Retail}</td>
            <td className="px-6 py-4 whitespace-nowrap">{product.Quantity}</td>
            <td className="px-6 py-4 whitespace-nowrap">{product.Size}</td>
            {/* <td className="px-6 py-4 whitespace-nowrap">{product.price}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
