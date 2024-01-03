import React from "react";
import { Review } from ".";
import ReviewPopover from "@/components/VendorDetails/ReviewPopover";

const Reviews = () => {
  return (
    <div className="mt-4 space-y-4 ">
      <ReviewPopover />
      <div className=" flex flex-col gap-5 ">
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default Reviews;
