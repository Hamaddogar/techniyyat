"use client";
import { HomeNavbarConstant } from "@/constants/HomeNavbarConstants";
import React from "react";
import { Button } from "..";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex p-4 max-md:hidden items-center justify-between">
      <div className="flex items-center w-full mx-auto max-w-[1400px] justify-between">
        <Link href="/">
          <img className="w-[150px]" src="/logo.png" />
        </Link>
        <div className="flex items-center gap-5">
          {HomeNavbarConstant.map((item) => (
            <span>{item}</span>
          ))}
        </div>
        <Button
          onClick={() => router.push("/login")}
          className="bg-white border !p-2 !px-3 border-[#EC583C] !text-[#EC583C]"
          value="Join or Sign in"
        />
      </div>
    </div>
  );
};

export default Navbar;
