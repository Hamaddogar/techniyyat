import React from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

const AmbassadorProductCard = () => {
  return (
    <div className="relative">
      <div className="w-full  rounded-lg border border-gray-100  p-2 bg-white flex items-center justify-between">
        <img className="w-10" src="/cisco-rounded.png" />

        <p className="text-[#252530]/70 max-lg:text-xs">Egypt</p>
        <p className="text-[#252530]/70 max-lg:text-xs">28/12/2023</p>
        <p className="text-[#252530]/70 max-lg:text-xs">
          Infrastructure/Networking/Router
        </p>
        <div className="flex gap-1 cursor-pointer items-center">
          <span className="text-[#EC583C] underline underline-offset-2 max-lg:text-xs">
            View Product
          </span>
        </div>
        <MoreHorizOutlinedIcon className="border ml-1 border-[#252530]/30 rounded-full text-[#252530]/30" />
      </div>
    </div>
  );
};

export default AmbassadorProductCard;
