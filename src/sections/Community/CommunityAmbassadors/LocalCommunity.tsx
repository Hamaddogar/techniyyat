import { NavbarSearch } from "@/components/AdminLayout";
import React from "react";

const LocalCommunity = () => {
  return (
    <div className="bg-white p-4 mt-7 shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Join your local community</h2>
          <p className="text-[#252530]/70">
            Attend an event, discover your city’s creativity
          </p>
        </div>
        <NavbarSearch />
      </div>
      <div className="w-full flex items-center justify-center">
        <img src="/world-map.png" />
      </div>
    </div>
  );
};

export default LocalCommunity;
