"use client"; 

import React, { useContext } from "react";
import { ProductContext } from "../components/ApiContext";
import Image from "next/image";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
const ProductTable = () => {
  const { products, loading } = useContext(ProductContext);

  console.log("Products:", products); 

  if (loading) {
    return <div>Loading...</div>; 
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
    <Table className="">
    <TableHeader className="bg-[#f9fafb] min-w-full">
      <TableRow>
        <TableHead className="px-2 text-xs font-medium"> <input type="checkbox" /></TableHead>
        <TableHead className="px-2 text-xs font-medium">  S/N</TableHead>
        <TableHead className="px-2 text-xs font-medium">Image</TableHead>
        <TableHead className="px-2 text-xs font-medium">SKU</TableHead>
        <TableHead className="px-2 text-xs font-medium">Name</TableHead>
        <TableHead className="px-2 text-xs font-medium">Description</TableHead>
        <TableHead className="px-2 text-xs font-medium">Title</TableHead>
        <TableHead className="px-2 text-xs font-medium max-mdhidden">Gender</TableHead>
        <TableHead className="px-2 text-xs font-medium max-mdhidden">Retail</TableHead>
        <TableHead className="px-2 text-xs font-medium">Quantity</TableHead>
        <TableHead className="px-2 text-xs font-medium">Size</TableHead>        
      </TableRow>
    </TableHeader>
    <TableBody>
    {products.map((product, index) => (
          <TableRow key={product.SKU} className={``}>
            <TableCell className="max-w-[250px] pl-2 pr-10 text-xs font-medium">
            <input type="checkbox" />
            </TableCell>

            <TableCell className={`pl-2 pr-10 font-semibold text-xs font-medium }`}>
            {index + 1}
            </TableCell>

            <TableCell className="pl-2 pr-10 text-xs font-medium">
            <Image
                src={product.Image_1}
                alt={product.Url}
                width={50}
                height={50}
              />
            </TableCell>

            <TableCell className="min-w-32 pl-2 pr-10 text-xs font-medium">
            {product.SKU}
            </TableCell>

            <TableCell className="pl-2 pr-10 capitalize min-w-24 text-xs font-medium">
            {product.Name}
            </TableCell>

            <TableCell className="pl-2 pr-10 max-mdhidden text-xs font-medium">
            <span title={product.Description}>
                {truncateDescription(product.Description, 3)}
              </span>
            </TableCell>

            <TableCell className="pl-2 pr-10 max-mdhidden text-xs font-medium">
            {" "}
              <span title={product.Title}>
                {truncateDescription(product.Title, 3)}
              </span>
            </TableCell>

            <TableCell className="pl-2 pr-10 max-mdhidden text-xs font-medium">
            {product.Gender}
            </TableCell>

            <TableCell className="pl-2 pr-10 max-mdhidden text-xs font-medium">
            {product.Retail}
            </TableCell>

            <TableCell className="pl-2 pr-10 max-mdhidden text-xs font-medium">
            {product.Quantity}
            </TableCell>

            <TableCell className="pl-2 pr-10 max-mdhidden text-xs font-medium">
            {product.Size}
            </TableCell>

            <TableCell className="pl-2 pr-10 max-mdhidden text-xs font-medium">
            {product.price}
</TableCell>
          </TableRow>
          ))}
 
    </TableBody>
  </Table>
      );
};

export default ProductTable;