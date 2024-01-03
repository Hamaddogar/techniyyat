"use client";
import { Popover } from "@headlessui/react";
import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const ReviewPopover = () => {
  return (
    <>
      <Popover className="relative">
        <Popover.Button className="outline-none">
          <h1 className="text-3xl italic ">
            Reviews <KeyboardArrowDownOutlinedIcon />
          </h1>
        </Popover.Button>

        <Popover.Panel className="absolute border border-gray-200 shadow-xl text-[#252530]/50 left-7 w-[200px] z-10 bg-white p-4 rounded-2xl">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <img src="/top-review.png" />
              <span>Top Review</span>
            </div>
            <div className="flex items-center gap-3">
              <img src="/recent-review.png" />
              <span>Recent Review</span>
            </div>
          </div>
        </Popover.Panel>
      </Popover>
    </>
  );
};

export default ReviewPopover;
