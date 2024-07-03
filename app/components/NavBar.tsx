"use client";
import Image from "next/image";
import React from "react";
import logo from "./Images/LOGO.png";
import SearchIcon from "./SearchIcon";
import LogIn from "./LogIn";
import Hamburger from "./Hamburger";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center justify-between gap-12">
        <Image src={logo} alt="Logo" width={206.4} height={56} />
        <SearchIcon />
      </div>
      <LogIn/>
      <div className="md:hidden">
      <Hamburger/>
      </div>
    </nav>
  );
};

export default NavBar;
