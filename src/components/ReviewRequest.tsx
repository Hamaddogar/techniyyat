"use client";
import React from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Disclosure } from "@headlessui/react";
import { ReviewPopover } from ".";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const ReviewRequest = () => {
  return (
    <Disclosure>
      <Disclosure.Button>
        <div className="w-full  rounded-lg border border-gray-100  p-2 bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              className="w-10 rounded-md h-10"
              src="https://images.unsplash.com/photo-1682685797742-42c9987a2c34?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h4 className="max-lg:text-xs">Managed Hosting Services</h4>
          </div>
          <p className="text-[#252530]/70 max-lg:text-xs">Hosting Provider</p>
          <div className="flex gap-1 items-center">
            <span className="bg-[#EC583C] p-[2px] px-[6px] pr-[7px] text-xs italic text-white rounded-full">
              8
            </span>
            <span className="text-[#EC583C] max-lg:text-xs">Suggestions</span>
          </div>
          <ReviewPopover />
        </div>
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500 px-2 flex items-center gap-3">
        <CloseOutlinedIcon
          className="border p-[2px] rounded-lg border-[#EC583C]"
          sx={{ color: "#EC583C" }}
        />
        <span className="text-[#252530]/50 ">
          Show brief about edit, and who did it, and about 2 line of his edit
        </span>
      </Disclosure.Panel>
    </Disclosure>
  );
};

export default ReviewRequest;
