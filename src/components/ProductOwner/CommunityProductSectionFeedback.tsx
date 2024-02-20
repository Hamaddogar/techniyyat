import React from "react";

const CommunityProductSectionFeedback = () => {
  return (
    <div className="bg-[#FDF5F4] p-3 rounded-lg absolute right-0 z-[100] w-[280px] ">
      <div className="flex items-center">
        <img src="/cisco-rounded.png" />
        <p className="font-semibold">Hassaan Ahmed</p>
      </div>

      <img src="/cisco-rounded.png" />
      <div className="space-y-3">
        <h1 className="text-lg text-[#EC583C] ">Original Section Title:</h1>
        <p className="text-[#252530]/70">About Cisco Router</p>
        <h1 className="text-lg text-[#EC583C] ">Original Section:</h1>
        <p className="text-[#252530]/70">
          Lots of different plans to choose from, so I could find one that fit
          my needs and budget.{" "}
        </p>
        <h1 className="text-lg text-[#EC583C] ">Section Title Update:</h1>
        <p className="text-[#252530]/70">About Cisco Router</p>
        <h1 className="text-lg text-[#EC583C] ">Section Update:</h1>
        <p className="text-[#252530]/70">
          Lots of different plans to choose from, so I could find one that fit
          my needs and budget. Very easy to set-up my online server, there are
          step by step instructions that are easy.
        </p>
      </div>
      <div className="flex items-center w-full justify-end">
        <img src="/tick-feedback.png" />
      </div>
    </div>
  );
};

export default CommunityProductSectionFeedback;
