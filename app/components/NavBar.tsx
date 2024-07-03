"use client";
import Image from "next/image";
import React from "react";
import logo from "./Images/LOGO.png";
import SearchIcon from "./SearchIcon";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center justify-between">
        <Image src={logo} alt="Logo" width={206.4} height={56} />
        <SearchIcon />
      </div>
    </nav>
  );
};

export default NavBar;
