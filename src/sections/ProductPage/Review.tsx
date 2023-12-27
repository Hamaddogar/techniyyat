import React from "react";

const Review = () => {
  return (
    <div className="border p-3  border-[#252530]/10 ">
      <div className="flex border-b px-4 border-[#252530]/10 gap-3 p-4">
        {" "}
        <img
          className="w-10 h-10 rounded-full  "
          src="https://media.istockphoto.com/id/487729845/photo/human-head-wire-frame-render.jpg?s=2048x2048&w=is&k=20&c=wyAWKFRqHfwLgvbL8IzMBWK9OaP6AD_EaqTCEu_EKMg="
        />
        <div>
          <h3 className="font-semibold">Andrew Smith</h3>
          <p className="text-sm text-[#252530]/50 ">Review on business name</p>
        </div>
      </div>
      <div className="space-y-2 p-6 ">
        <img className="w-[100px]" src="/fiveStar.png" />
        <p className="text-[#252530]/70 text-lg ">Business Descripton</p>
        <p className="text-[#252530]/70 text-lg ">
          Lots of different plans to choose from, so I could find one that fit
          my needs and budget. Very easy to set-up my online server, there are
          step by step instructions that are easy.
        </p>
      </div>
    </div>
  );
};

export default Review;
