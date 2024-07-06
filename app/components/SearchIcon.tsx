"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import icon from "./Images/Shape.png";

const SearchIcon = () => {
  return (
    <div className="relative items-center justify-center hidden md:flex">
      <Input
        type="text"
        placeholder="Search By Patients..."
        className="pl-10 pr-4 py-2 boder rounded-lg p-regular-16 border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Image src={icon} alt="search" width={18} height={18} />
      </div>
    </div>
  );
};

export default SearchIcon;
