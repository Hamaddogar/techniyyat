import React from "react";

const HeadingAndDesc = ({
  heading,
  desc,
}: {
  heading: string;
  desc: string;
}) => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl italic ">{heading}</h1>
      <p className="text-[#252530]/70">{desc}</p>
    </div>
  );
};

export default HeadingAndDesc;
