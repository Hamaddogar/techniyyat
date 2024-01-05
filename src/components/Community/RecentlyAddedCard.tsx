import React from "react";

const RecentlyAddedCard = ({
  img,
  name,
  desc,
}: {
  img: string;
  name: string;
  desc: string;
}) => {
  return (
    <div className="flex shadow-lg p-3 gap-4 items-center">
      <img src={img} alt="" className="w-20 h-20" />
      <div>
        <h1 className="font-semibold text-xl">{name}</h1>
        <p className="text-[#252530]/70">{desc}</p>
      </div>
    </div>
  );
};

export default RecentlyAddedCard;
