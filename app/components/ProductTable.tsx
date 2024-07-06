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
} from "@/components/ui/table";

const ProductTable = () => {
  const { products, loading } = useContext(ProductContext);

  console.log("Products:", products);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(products)) {
    return <div>Error: Products data is not an array</div>;
  }

  const truncateDescription = (description:string, wordLimit: number) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return description;
  };

  return (
    <main className="overflow-auto max-h-[420px] rounded-b-lg">
      <Table className="mb-10">
        <TableHeader className="bg-[#F0F4FE] min-w-full bg-yellow500 sticky top-0 z-10">
          <TableRow>
            <TableHead className="px-4 py-2 text-xs font-medium flex items-center justify-between gap2"><input type="checkbox" className="mr-2"/>S/N</TableHead>
            <TableHead className="px-4 py-2 text-xs font-medium">Image</TableHead>
            <TableHead className="px-4 py-2 text-xs font-medium">SKU</TableHead>
            <TableHead className="px-4 py-2 text-xs font-medium">Name</TableHead>
            <TableHead className="px-4 py-2 text-xs font-medium">Description</TableHead>
            <TableHead className="px-4 py-2 text-xs font-medium">Title</TableHead>
            <TableHead className="px-4 py-2 text-xs font-medium">Gender</TableHead>
            {/* <TableHead className="px-4 py-2 text-xs font-medium">Retail</TableHead> */}
            <TableHead className="px-4 py-2 text-xs font-medium">Quantity</TableHead>
            <TableHead className="px-4 py-2 text-xs font-medium">Brand</TableHead>
            <TableHead className="px-4 py-2 text-xs font-medium">Price</TableHead>
          </TableRow>
        </TableHeader>
<div className="h-2 bg-blue600 rounded-tlg w-full"></div>

        <TableBody className="min-w-full bg-[#FFFFFF] rounded-t-lg text-[#262626] text-xs leading-5 font-medium">
          {products.map((product, index) => (
            <TableRow key={product.SKU}>
              <TableCell className="px-4 py-2 flex items-center justifybetween">
                <input type="checkbox" className="mr-2"/>{index + 1}
              </TableCell>

              <TableCell className="px-4 py-2">
                <Image
                  src={product.Image_1}
                  alt={product.Url}
                  width={50}
                  height={50}
                />
              </TableCell>
              <TableCell className="px-4 py-2">
                {product.SKU}
              </TableCell>
              <TableCell className="px-4 py-2">
                {product.Name}
              </TableCell>
              <TableCell className="px-4 py-2">
                <span title={product.Description}>
                  {truncateDescription(product.Description, 3)}
                </span>
              </TableCell>
              <TableCell className="px-4 py-2">
                <span title={product.Title}>
                  {truncateDescription(product.Title, 3)}
                </span>
              </TableCell>
              <TableCell className="px-4 py-2">
                {product.Gender}
              </TableCell>
              {/* <TableCell className="px-4 py-2 text-xs font-medium">
                {product.Retail}
              </TableCell> */}
              <TableCell className="px-4 py-2">
                {product.Quantity}
              </TableCell>
              <TableCell className="px-4 py-2">
              {product.Brand}
              </TableCell>
              <TableCell className="px-4 py-2">
                {product.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
};

export default ProductTable;
