'use client'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import ham from './Images/hamburger.svg'
import logo from "./Images/LOGO.png";
  
const Hamburger = () => {
  return (
<Sheet>
  <SheetTrigger>
  <Image
            src={ham}
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
  </SheetTrigger>
  <SheetContent>
  <Image src={logo} width={100} height={100} alt="logo" />
  </SheetContent>
</Sheet>

  )
}

export default Hamburger