import React from "react";

const DashboardBox = ({
  Icon,
  number,
  name,
}: {
  Icon: any;
  number: string | number;
  name: string;
}) => {
  return (
    <div className="p-5 w-[200px] gap-2 bg-white rounded-2xl">
      <div className="rounded-full w-max bg-[#FDF5F4] p-[7px] text-[#EC583C]">
        <Icon />
      </div>
      <div>
        <h2 className="uppercase mt-6 text-[#EC583C] text-2xl italic">
          {number}
        </h2>
        <h4 className="text-[#252530]/70 ">{name}</h4>
      </div>
    </div>
  );
};

export default DashboardBox;
