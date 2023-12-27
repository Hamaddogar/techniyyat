import React from "react";
import { Review } from ".";

const Reviews = () => {
  return (
    <div className="mt-4 space-y-4 ">
      <h1 className="text-3xl italic ">Reviews</h1>
      <div className=" flex flex-col gap-5 ">
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default Reviews;
