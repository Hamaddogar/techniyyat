import Link from "next/link";
import React from "react";
import SortRoundedIcon from "@mui/icons-material/SortRounded";

const Sidebar = () => {
  return (
    <div className="w-[20%] max-md:hidden p-6">
      <div className="flex items-center flex-col gap-8">
        <Link href="/">
          <img className="w-36  bg-transparent" src="/techniyyat-logo.png" />
        </Link>
        <div className="text-[#EC583C] flex items-center gap-4">
          <SortRoundedIcon />
          <p>Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
