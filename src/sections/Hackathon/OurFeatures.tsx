import { FeatureCard } from "@/components/Hackathon";
import { ourFeaturesConstants } from "@/constants/OurFeaturesConstants";
import React from "react";

const OurFeatures = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="text-center  mt-8">
        <h1 className="text-[#FFA85A] text-center font-semibold text-[2vw] ">
          Our Features
        </h1>
        <p className="text-[#B9B9BA]">
          The harder you work for something, the greater you’ll feel when you
          achieve it.
        </p>
      </div>
      <div className="grid gap-7 mt-6 grid-cols-3">
        {ourFeaturesConstants.map((item) => (
          <FeatureCard logo={item.logo} title={item.title} desc={item.desc} />
        ))}
      </div>
    </div>
  );
};

export default OurFeatures;
