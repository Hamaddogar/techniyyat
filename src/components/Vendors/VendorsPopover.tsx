"use client";
import { Popover } from "@headlessui/react";
import React from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const VendorsPopover = () => {
  return (
    <>
      <Popover className="relative">
        <Popover.Button className="outline-none">
          <MoreHorizOutlinedIcon className="border ml-1 border-[#252530]/30 rounded-full text-[#252530]/30" />
        </Popover.Button>

        <Popover.Panel className="absolute border border-gray-200 shadow-xl text-[#252530]/50 right-2 w-[200px] z-10 bg-white p-4 rounded-2xl">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <DoneOutlinedIcon
                className="border rounded-full p-[2px] border-[#65D0BD]"
                sx={{ color: "#65D0BD" }}
              />
              <span>Active</span>
            </div>
            <div className="flex items-center gap-3">
              <CloseOutlinedIcon className="text-[#EB4335] border border-[#EB4335] rounded-lg" />
              <span>Suspended</span>
            </div>
            <div className="flex items-center gap-3">
              <DeleteOutlineOutlinedIcon className="text-[#252530]" />
              <span>Trash</span>
            </div>
          </div>
        </Popover.Panel>
      </Popover>
    </>
  );
};

export default VendorsPopover;
