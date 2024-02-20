import { Hero, Hero3 } from "@/components/Landing2";
import { Hero2, Testimonial, TotalDetails } from "@/sections/Landing";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <TotalDetails />
      <Hero2 />
      <Hero3 />
      <div className=" mx-auto bg-[#FFF8F9] pt-12 w-full flex flex-col items-center p-4 gap-8">
        <div className=" w-full flex  flex-col gap-8  max-w-[1400px] mx-auto">
          <h5 className="text-[#EC583C] text-center text-lg font-semibold ">
            Spotlight
          </h5>
          <h1 className="text-3xl text-center font-extrabold ">
            Spotlight On a Vendor or Product
          </h1>
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default page;
