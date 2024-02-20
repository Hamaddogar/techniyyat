import { AmbassadorProductCard } from "@/components/AmbassadorDashboard";
import AmbassadorVendorCard from "@/components/AmbassadorDashboard/VendorCard";
import { DashboardBox } from "@/components/TechAnalystDashboard";
import { ambassadorDashboardBox } from "@/constants/AmbassadorConstants";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex max-md:flex-col items-center gap-5">
        {ambassadorDashboardBox.map((item) => (
          <DashboardBox
            Icon={item.icon}
            name={item.name}
            number={item.number}
          />
        ))}
      </div>
      <div className="bg-white rounded-2xl p-5 mt-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl max-md:text-lg font-semibold">
            Latest Feedback
          </h1>
        </div>

        <div className="flex mt-5 flex-col gap-3">
          <AmbassadorProductCard />
          <AmbassadorProductCard />
        </div>
      </div>
    </div>
  );
};

export default page;
