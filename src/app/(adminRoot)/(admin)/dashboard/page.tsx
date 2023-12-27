import { ReviewRequest } from "@/components";
import { Box } from "@/components/Dashboard";
import { dashboardBox } from "@/constants/DashboardConstants";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

import React from "react";
const page = () => {
  return (
    <div className="">
      <div className="flex max-md:flex-col items-center gap-5">
        {dashboardBox.map((item) => (
          <Box Icon={item.icon} name={item.name} number={item.number} />
        ))}
      </div>
      <div className="bg-white rounded-2xl p-5 mt-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-smibold italic">
            Today's Reviews Request
          </h1>
          <div className="flex border border-[#252530]/10 p-2 rounded-lg text-[#252530]/50 items-center">
            <FilterAltOutlinedIcon />
            <h3>Filter Search</h3>
          </div>
        </div>
        <div className="flex mt-5 flex-col gap-3">
          <ReviewRequest />
          <ReviewRequest />
          <ReviewRequest />
          <ReviewRequest />
          <ReviewRequest />
          <ReviewRequest />
        </div>
      </div>
    </div>
  );
};

export default page;
