"use client";
import React, { useState } from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { ReviewSideDrawer } from "../ReviewRequests";
import { DropDown } from "..";
const Reviews = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const openSideDrawer = () => setSideDrawerOpen(true);
  const closeSideDrawer = () => setSideDrawerOpen(false);

  return (
    <div className="w-full rounded-lg border border-gray-100  p-2 bg-white flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          className="w-10 rounded-md h-10"
          src="https://images.unsplash.com/photo-1682685797742-42c9987a2c34?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <h4 className="max-lg:text-xs">Managed Hosting Services</h4>
      </div>
      <p className="text-[#252530]/70 max-lg:text-xs">Huawei</p>

      <div
        onClick={() => openSideDrawer()}
        className="flex gap-1 cursor-pointer items-center"
      >
        <span className="p-1 text-white italic w-5 h-5 text-xs flex items-center justify-center bg-[#EC583C] rounded-full">
          8
        </span>
        <span className="text-[#EC583C] underline underline-offset-2 max-lg:text-xs">
          Suggestions
        </span>
      </div>
      <MoreHorizOutlinedIcon className="border ml-1 border-[#252530]/30 rounded-full text-[#252530]/30" />
    </div>
  );
};

export default Reviews;
