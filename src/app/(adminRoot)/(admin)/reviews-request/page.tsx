import { ReviewRequest } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="bg-white rounded-xl">
      <div className="flex  border-b border-gray-200 w-full gap-5">
        <div className="flex p-4  gap-5">
          <p className="text-[#EC583C]">Products</p>
          <p className="text-[#252530]/50">Vendors</p>
        </div>
      </div>
      <div className="pt-5">
        <div className="md:p-5 p-1 flex flex-col gap-5">
          <ReviewRequest />
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
