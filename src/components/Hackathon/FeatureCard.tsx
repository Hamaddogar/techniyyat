import React from "react";

const FeatureCard = ({
  title,
  logo,
  desc,
}: {
  title: string;
  logo: string;
  desc: string;
}) => {
  return (
    <div className="p-4 flex rounded-xl flex-col items-center text-center border bg-[#FFA85A]/10 border-[#FFA85A] ">
      <img src={logo} />
      <h2 className="text-lg font-semibold text-[#FFA85A]">{title}</h2>
      <p className="max-w-xs text-[#B9B9BA] ">{desc}</p>
    </div>
  );
};

export default FeatureCard;
