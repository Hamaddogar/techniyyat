"use client";
import { Box } from "@/components/Dashboard";
import { Review } from "@/components/Dashboard/PendingSections";
import { dashboardBox } from "@/constants/DashboardConstants";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import React, { useState } from "react";

const page = () => {
  const sections = ["Vendors", "Products"];
  const [selectedSection, setSelectedSection] = useState("Vendors");
  return (
    <div>
      <div className="flex max-md:flex-col items-center gap-5">
        {dashboardBox.map((item) => (
          <Box Icon={item.icon} name={item.name} number={item.number} />
        ))}
      </div>
      <div className="bg-white w-full rounded-2xl p-5 mt-5">
        <div className="flex w-full items-center justify-between">
          <div className="flex space-x-4">
            <h1 className="text-xl max-md:text-lg font-smibold italic">
              Today's Reviews For My Vendor
            </h1>
            <div className="flex border border-[#252530]/10 p-2 rounded-lg text-[#252530]/50 items-center">
              <FilterAltOutlinedIcon />
              <h3 className=" max-md:text-xs">Filters</h3>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {sections.map((item) => (
              <div
                onClick={() => setSelectedSection(item)}
                className={`${
                  selectedSection === item
                    ? "item bg-[#FDF5F4] border-[#EC583C] text-[#EC583C]"
                    : "text-[#918D92]"
                } border px-4 py-1 rounded-full `}
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex mt-5 flex-col gap-3">
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </div>
  );
};

export default page;
