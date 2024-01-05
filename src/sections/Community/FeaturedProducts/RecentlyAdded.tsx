import { RecentlyAddedCard } from "@/components/Community";
import { recentlyAddedConstants } from "@/constants/RecentlyAddedConstants";
import React from "react";

const RecentlyAdded = () => {
  return (
    <div>
      <h1 className="text-[1.6vw] font-semibold ">
        Recently Added Featured Products
      </h1>
      <div className="space-y-5 mt-5">
        {recentlyAddedConstants.map((item) => (
          <RecentlyAddedCard name={item.name} desc={item.desc} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;
