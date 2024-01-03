import React from "react";

const SideDrawerProductCard = () => {
  return (
    <div className="flex gap-4 p-1 border border-gray-200 rounded-lg items-center">
      <img className="w-12 h-12" src="/cloudy.png" />
      <div>
        <h4 className="font-semibold">Managed Hosting Solutions</h4>
        <p className="text-[#252530]/70">Hosting Provider</p>
      </div>
    </div>
  );
};

export default SideDrawerProductCard;
