import React from "react";

const FeaturedProductCard = ({
  src,
  name,
  desc,
}: {
  src: string;
  name: string;
  desc: string;
}) => {
  return (
    <div className="flex gap-6 items-center p-4">
      <img className="w-[96px] h-[96px] " src={src} />
      <div>
        <h2 className="italic font-semibold text-lg">{name}</h2>
        <p className="text-[#252530]/70">{desc}</p>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
