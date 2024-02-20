"use client";
import React, { useState } from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { CommunityProductSectionFeedback, ProductOwnerFeedbackBox } from ".";

const CommunityProductSectionReview = () => {
  const [feedbackBoxOpen, setFeedbackBoxOpen] = useState(false);
  return (
    <div className="relative">
      <div className="w-full  rounded-lg border border-gray-100  p-2 bg-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            className="w-10 rounded-md h-10"
            src="https://images.unsplash.com/photo-1682685797742-42c9987a2c34?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <h4 className="max-lg:text-xs">Hassaan Ahmed</h4>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-10" src="/cisco-rounded.png" />
          <p className="text-[#252530]/70 max-lg:text-xs">Router</p>
        </div>

        <p className="text-[#252530]/70 max-lg:text-xs">Egypt</p>
        <p className="text-[#252530]/70 max-lg:text-xs">28/12/2023</p>
        <p className="text-[#252530]/70 max-lg:text-xs">
          Infrastructure/Networking/Router
        </p>
        <div className="flex gap-1 cursor-pointer items-center">
          <span
            onClick={() => setFeedbackBoxOpen((pv) => !pv)}
            className="text-[#EC583C] underline underline-offset-2 max-lg:text-xs"
          >
            View Feedback
          </span>
        </div>
        <MoreHorizOutlinedIcon className="border ml-1 border-[#252530]/30 rounded-full text-[#252530]/30" />
      </div>
      {feedbackBoxOpen && <CommunityProductSectionFeedback />}
    </div>
  );
};

export default CommunityProductSectionReview;
