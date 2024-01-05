"use client";
import { homeNavbarConstants } from "@/constants/HomeNavbarConstants";
import React, { useEffect, useState } from "react";
import { Button } from "..";
import Link from "next/link";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { MobileSideDrawer } from ".";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <div className="flex p-4  items-center justify-between">
        <div className="flex items-center w-full mx-auto max-w-[1400px] justify-between">
          <Link href="/">
            <img className="w-[150px]" src="/techniyyat-logo.png" />
          </Link>
          <div className="flex max-lg:hidden items-center gap-5">
            {homeNavbarConstants.map((item) => (
              <Link href={item.href}>{item.name}</Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {/* <MenuOutlinedIcon
              onClick={openDrawer}
              style={{ display: drawerDisabled ? "flex" : "hidden" }}
            /> */}
            <Link
              href="/login"
              className="bg-white border rounded-full max-md:text-[9px] !p-2 !px-3 border-[#EC583C] !text-[#EC583C]"
            >
              Join or Sign in
            </Link>
          </div>
        </div>
      </div>
      <MobileSideDrawer
        isDrawerOpen={isDrawerOpen}
        closeDrawer={closeDrawer}
        openDrawer={openDrawer}
      />
    </>
  );
};

export default Navbar;
