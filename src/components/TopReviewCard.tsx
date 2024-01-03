import React from "react";

const TopReviewCard = ({
  desc,
  title,
  img,
}: {
  desc: string;
  title: string;
  img: string;
}) => {
  return (
    <div className="w-full flex items-center">
      <div className="w-full">
        <h5 className="font-semibold">{title}</h5>
        <p className="line-clamp-1 max-w-[300px] text-[#252530]/70">{desc}</p>
        <div className="flex w-full items-center">
          <img className="w-20 " src="/fiveStar.png" />
          <p className="text-xs text-[#252530]/70">5/5</p>
        </div>
      </div>
      <img src={img} className="w-10 h-10" />
    </div>
  );
};

export default TopReviewCard;
