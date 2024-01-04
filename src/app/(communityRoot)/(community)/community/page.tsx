import {
  CountriesAmbassadors,
  CountriesListing,
  LocalCommunity,
} from "@/sections/Community/CommunityAmbassadors";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-16">
      <LocalCommunity />
      <CountriesListing />
      <CountriesAmbassadors />
    </div>
  );
};

export default page;
