"use client";
import { ProductReviewBox } from "@/components/AmbassadorDashboard";
import ReviewAmbassador from "@/components/AmbassadorDashboard/Review";
import { DashboardBox, Review } from "@/components/TechAnalystDashboard";
import { ambassadorDashboardBox } from "@/constants/AmbassadorConstants";
import React, { useState } from "react";

const page = () => {
  const [selected, setSelected] = useState("My Product Community Review");
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
          <div className="flex items-center gap-4">
            <div
              onClick={() => setSelected("My Product Community Review")}
              style={{
                border:
                  selected == "My Product Community Review"
                    ? "1px solid #EC583C"
                    : "1px solid #252530/10",
                backgroundColor:
                  selected == "My Product Community Review"
                    ? "#FDF5F4"
                    : "#FDF5F4",
                color:
                  selected == "My Product Community Review"
                    ? "#EC583C"
                    : "#252530/70",
              }}
              className="flex border border-[#252530]/10 p-2 rounded-full text-[#252530]/50 items-center"
            >
              <h3 className=" max-md:text-xs">My Product Community Review</h3>
            </div>
            <div
              style={{
                border:
                  selected == "My Vendors Community Review"
                    ? "1px solid #EC583C"
                    : "1px solid #252530/10",
                backgroundColor:
                  selected == "My Vendors Community Review"
                    ? "#FDF5F4"
                    : "#FDF5F4",
                color:
                  selected == "My Vendors Community Review"
                    ? "#EC583C"
                    : "#252530/70",
              }}
              className="flex border border-[#252530]/10 p-2 rounded-full text-[#252530]/50 items-center"
              onClick={() => setSelected("My Vendors Community Review")}
            >
              <h3 className=" max-md:text-xs">My Vendors Community Review</h3>
            </div>
          </div>
        </div>

        {selected === "My Vendors Community Review" ? (
          <div className="flex mt-5 flex-col gap-3">
            <Review />
            <Review />
          </div>
        ) : (
          <div className="flex mt-5 flex-col gap-3">
            <ReviewAmbassador />
            <ReviewAmbassador />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
