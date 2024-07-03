"use client"
import React from "react";
import noti from "./Images/notIcon.png";
import prf from "./Images/profilpic.png";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LogIn = () => {
  return (
    <div className=" items-center justify-center gap-2 hidden md:flex">
      <Image src={noti} alt="Noti" width={30} height={30}/>
      <Image src={prf} alt="Noti" width={34} height={34} />
      <div>
        <Select>
          <SelectTrigger className="w-[90px] outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0">
            <SelectValue placeholder="Deko" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Log Out</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default LogIn;
