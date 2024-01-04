import { CountryListingDropDown } from "@/components/Community";
import React from "react";

const CountriesListing = () => {
  return (
    <div className="flex flex-col mt-7 p-3 items-start">
      <h1 className="font-bold text-2xl">Countries Listing</h1>
      <div className="flex w-full  flex-col gap-3">
        <CountryListingDropDown />
        <CountryListingDropDown />
        <CountryListingDropDown />
        <CountryListingDropDown />
      </div>
    </div>
  );
};

export default CountriesListing;
