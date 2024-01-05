import { ProductFilters } from "@/sections/Community";
import RecentlyAdded from "@/sections/Community/FeaturedProducts/RecentlyAdded";
import React from "react";

const page = () => {
  return (
    <div className="space-y-7">
      <ProductFilters />
      <RecentlyAdded />
    </div>
  );
};

export default page;
