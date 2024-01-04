import React from "react";

const TopParticipant = ({
  image,
  name,
  position,
  desc,
}: {
  image: string;
  name: string;
  position: string;
  desc: string;
}) => {
  return (
    <div className="flex rounded-2xl h-full bg-white justify-center items-center">
      <img className="h-[150px]" src={image} />
      <div className="flex-col p-3 justify-center items-center h-full">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="text-xs text-[#F2994A]">{position}</p>
        <p className="text-[#98A4AF] text-xs ">{desc}</p>
      </div>
    </div>
  );
};

export default TopParticipant;
