import React from "react";

const FeaturedProductsLaunchingCard = ({
  logo,
  title,
  desc,
}: {
  title: string;
  logo: string;
  desc: string;
}) => {
  return (
    <div className="flex gap-2 items-center">
      <img src={logo} className="w-14 h-14" />
      <div>
        <h5 className="font-semibold">{title}</h5>
        <p className="text-sm text-[#252530]/70">{desc}</p>
      </div>
    </div>
  );
};

export default FeaturedProductsLaunchingCard;
