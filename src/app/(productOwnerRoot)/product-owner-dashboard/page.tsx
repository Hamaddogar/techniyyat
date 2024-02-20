"use client";
import { DashboardBox } from "@/components/TechAnalystDashboard";
import { productOwnerDashboardBox } from "@/constants/productOwnerConstants";
import { ProductReviewBox } from "@/components/AmbassadorDashboard";
import ReviewAmbassador from "@/components/AmbassadorDashboard/Review";
import { Review } from "@/components/TechAnalystDashboard";
import { ambassadorDashboardBox } from "@/constants/AmbassadorConstants";
import React, { useState } from "react";
import ReviewProductOwner from "@/components/ProductOwner/ReviewProductOwner";
import { CommunityProductSectionReview } from "@/components/ProductOwner";

const page = () => {
  const [selected, setSelected] = useState("Community Product Reviews");
  return (
    <div>
      {productOwnerDashboardBox.map((item) => (
        <DashboardBox Icon={item.icon} name={item.name} number={item.number} />
      ))}
      <div className="bg-white rounded-2xl p-5 mt-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl max-md:text-lg font-semibold">
            My Products Latest Feedback
          </h1>
          <div className="flex items-center gap-4">
            <div
              onClick={() => setSelected("Community Product Reviews")}
              style={{
                border:
                  selected == "Community Product Reviews"
                    ? "1px solid #EC583C"
                    : "1px solid #252530/10",
                backgroundColor:
                  selected == "Community Product Reviews"
                    ? "#FDF5F4"
                    : "#FDF5F4",
                color:
                  selected == "Community Product Reviews"
                    ? "#EC583C"
                    : "#252530/70",
              }}
              className="flex border border-[#252530]/10 p-2 rounded-full text-[#252530]/50 items-center"
            >
              <h3 className=" max-md:text-xs">Community Product Reviews</h3>
            </div>
            <div
              style={{
                border:
                  selected == "Community ProductSection Reviews"
                    ? "1px solid #EC583C"
                    : "1px solid #252530/10",
                backgroundColor:
                  selected == "Community ProductSection Reviews"
                    ? "#FDF5F4"
                    : "#FDF5F4",
                color:
                  selected == "Community ProductSection Reviews"
                    ? "#EC583C"
                    : "#252530/70",
              }}
              className="flex border border-[#252530]/10 p-2 rounded-full text-[#252530]/50 items-center"
              onClick={() => setSelected("Community ProductSection Reviews")}
            >
              <h3 className=" max-md:text-xs">
                Community ProductSection Reviews
              </h3>
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
            <CommunityProductSectionReview />
            <CommunityProductSectionReview />
            <CommunityProductSectionReview />
            <CommunityProductSectionReview />
            <CommunityProductSectionReview />
            <CommunityProductSectionReview />
            <CommunityProductSectionReview />
            <CommunityProductSectionReview />
            <CommunityProductSectionReview />
            <CommunityProductSectionReview />
            <CommunityProductSectionReview />
            <CommunityProductSectionReview />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
