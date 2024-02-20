// import { ReviewRequest } from "@/components";
import { Box, Review } from "@/components/Dashboard";
import { VendorCard } from "@/components/MyVendor";
import { dashboardBox } from "@/constants/DashboardConstants";
import { myVendorConstants } from "@/constants/MyVendorConstants";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

import React from "react";
const page = () => {
  return (
    <div className="">
      <div className="flex max-md:flex-col items-center gap-5">
        {myVendorConstants.map((item) => (
          <Box Icon={item.icon} name={item.name} number={item.number} />
        ))}
      </div>
      <div className="bg-white rounded-2xl p-5 mt-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl max-md:text-lg font-smibold italic">
            My Products
          </h1>
        </div>
        <div className="flex mt-5 flex-col gap-3">
          <VendorCard />
        </div>
      </div>
    </div>
  );
};

export default page;
