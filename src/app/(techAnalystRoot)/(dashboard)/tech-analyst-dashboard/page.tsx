"use client";
import { Box } from "@/components/Dashboard";
import { DashboardBox, Review } from "@/components/TechAnalystDashboard";
import PendingSectionReviews from "@/components/TechAnalystDashboard/PendingSectionReviews";

import { techAnalystDashboardBox } from "@/constants/TechAnalystDashboardConstants";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import React, { useState } from "react";
const page = () => {
  const [selectedUpperReview, setSelectedUpperView] =
    useState("Vendor’s Review");
  const [selectedLowerReview, setSelectedLowerReview] =
    useState("Pending Reviews");
  return (
    <div className="">
      <div className="flex max-md:flex-col items-center gap-5">
        {techAnalystDashboardBox.map((item) => (
          <DashboardBox
            Icon={item.icon}
            name={item.name}
            number={item.number}
          />
        ))}
      </div>
      <div className="flex justify-end items-center gap-4">
        <div
          style={{
            border:
              selectedUpperReview == "Vendor’s Review"
                ? "1px solid #EC583C"
                : "1px solid #252530/10",
            backgroundColor:
              selectedUpperReview == "Vendor’s Review" ? "#FDF5F4" : "#FDF5F4",

            color:
              selectedUpperReview == "Vendor’s Review"
                ? "#EC583C"
                : "#252530/70",
          }}
          onClick={() => setSelectedUpperView("Vendor’s Review")}
          className="flex border bg-white p-2 rounded-full text-[#252530]/50 items-center"
        >
          <h3 className=" max-md:text-xs">Vendor’s Review</h3>
        </div>
        <div
          style={{
            border:
              selectedUpperReview == "Product’s Review"
                ? "1px solid #EC583C"
                : "1px solid #252530/10",
            backgroundColor:
              selectedUpperReview == "Product’s Review" ? "#FDF5F4" : "#FDF5F4",
            color:
              selectedUpperReview == "Product’s Review"
                ? "#EC583C"
                : "#252530/70",
          }}
          onClick={() => setSelectedUpperView("Product’s Review")}
          className="flex border bg-white border-[#252530]/10 p-2 rounded-full text-[#252530]/50 items-center"
        >
          <h3 className=" max-md:text-xs">Product’s Review</h3>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-5 mt-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl max-md:text-lg font-semibold">
            {selectedUpperReview === "Product’s Review" ? "Product" : "Vendors"}{" "}
            Latest Reviews
          </h1>
          <div className="flex items-center gap-4">
            <div
              onClick={() => setSelectedLowerReview("Pending Reviews")}
              style={{
                border:
                  selectedLowerReview == "Pending Reviews"
                    ? "1px solid #EC583C"
                    : "1px solid #252530/10",
                backgroundColor:
                  selectedLowerReview == "Pending Reviews"
                    ? "#FDF5F4"
                    : "#FDF5F4",
                color:
                  selectedLowerReview == "Pending Reviews"
                    ? "#EC583C"
                    : "#252530/70",
              }}
              className="flex border border-[#252530]/10 p-2 rounded-full text-[#252530]/50 items-center"
            >
              <h3 className=" max-md:text-xs">Pending Reviews</h3>
            </div>
            <div
              style={{
                border:
                  selectedLowerReview == "Pending Section Reviews"
                    ? "1px solid #EC583C"
                    : "1px solid #252530/10",
                backgroundColor:
                  selectedLowerReview == "Pending Section Reviews"
                    ? "#FDF5F4"
                    : "#FDF5F4",
                color:
                  selectedLowerReview == "Pending Section Reviews"
                    ? "#EC583C"
                    : "#252530/70",
              }}
              className="flex border border-[#252530]/10 p-2 rounded-full text-[#252530]/50 items-center"
              onClick={() => setSelectedLowerReview("Pending Section Reviews")}
            >
              <h3 className=" max-md:text-xs">Pending Section Reviews</h3>
            </div>
          </div>
        </div>
        {selectedLowerReview === "Pending Reviews" ? (
          <div className="flex mt-5 flex-col gap-3">
            <Review />
            <Review />
          </div>
        ) : (
          <div className="flex mt-5 flex-col gap-3">
            <PendingSectionReviews />
            <PendingSectionReviews />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
