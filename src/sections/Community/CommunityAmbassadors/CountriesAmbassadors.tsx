import { AmbassadorCard } from "@/components/Community";
import React from "react";

const CountriesAmbassadors = () => {
  return (
    <div className="p-3">
      <h1 className="text-2xl font-bold">Countries Ambassadors</h1>
      <div className="mt-4 flex flex-col gap-4">
        <AmbassadorCard />
        <AmbassadorCard />
        <AmbassadorCard />
        <AmbassadorCard />
      </div>
    </div>
  );
};

export default CountriesAmbassadors;
