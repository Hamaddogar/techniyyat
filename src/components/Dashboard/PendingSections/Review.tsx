"use client";
import React, { useState } from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { ReviewPopover } from "@/components";
import { VendorSuggestionModal } from ".";

const Review = () => {
  const [isOpenfirstModal, setIsOpenFirstModal] = useState(true);
  return (
    <>
      <div className="w-full rounded-lg border border-gray-100  p-2 bg-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            className="w-10 rounded-md h-10"
            src="https://images.unsplash.com/photo-1682685797742-42c9987a2c34?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <h4 className="max-lg:text-xs">Managed Hosting Services</h4>
        </div>
        <p className="text-[#252530]/70 max-lg:text-xs">Hosting Provider</p>
        <p className="text-[#252530]/70 max-lg:text-xs">Hosting Provider</p>

        <div className="flex gap-1 cursor-pointer items-center">
          <span className="text-[#EC583C] underline underline-offset-2 max-lg:text-xs">
            Show Suggestions
          </span>
        </div>
        <ReviewPopover />
      </div>
      <VendorSuggestionModal
        closeModal={() => setIsOpenFirstModal(false)}
        isOpenfirstModal={isOpenfirstModal}
      />
    </>
  );
};

export default Review;
