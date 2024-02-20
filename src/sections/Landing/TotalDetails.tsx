import { TotalCard } from "@/components/Landing2";
import { totalLandingConstant } from "@/constants/TotalLandingConstants";
import React from "react";

const TotalDetails = () => {
  return (
    <div className="grid grid-cols-5 max-w-[1300px]  mx-auto gap-4 p-6 ">
      {totalLandingConstant.map((total) => (
        <TotalCard
          logo={total.logo}
          key={total.logo}
          number={total.number}
          total={total.total}
        />
      ))}
    </div>
  );
};

export default TotalDetails;
