import {
  Button,
  FeaturedProductsLaunchingCard,
  TopReviewCard,
} from "@/components";
import { featuredProductsLaunchingConstants } from "@/constants/FeaturedProductsLaunching";
import { topReviewProductsConstants } from "@/constants/TopReviewProductsConstants";
import React from "react";

const FeaturedProductsLaunching = () => {
  return (
    <div className="flex p-3 max-md:flex-col gap-4 justify-between w-full mx-auto max-w-[1480px] items-center">
      <div className="flex  flex-col">
        <h1 className="text-[2vw] max-md:text-[3vw] font-semibold">
          Featured Products Launching Today
        </h1>
        <div className="flex mt-4 flex-col gap-5">
          {featuredProductsLaunchingConstants.map((item, i) => (
            <FeaturedProductsLaunchingCard
              key={i}
              logo={item.logo}
              desc={item.desc}
              title={item.title}
            />
          ))}
        </div>
        <Button
          className="!bg-[#252530]/10 !rounded-lg mt-5 !w-full !text-black"
          value="View All New Products"
        />
      </div>
      <div className="">
        <img src="/hackathon-banner.png" />
        <div className="flex border-b mt-4 border-gray-200 pb-3 justify-between  items-center">
          <h2 className="text-lg font-semibold">Top Reviews Products</h2>
          <p className="text-[#EC583C]">View All</p>
        </div>
        <div className="flex flex-col">
          {topReviewProductsConstants.map((item) => (
            <TopReviewCard desc={item.desc} title={item.title} img={item.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsLaunching;
