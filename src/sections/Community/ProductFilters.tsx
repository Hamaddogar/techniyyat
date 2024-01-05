import { ProductFilterCard } from "@/components/Community";
import { productFiltersConstants } from "@/constants/ProductFiltersConstants";
import React from "react";

const ProductFilters = () => {
  return (
    <div>
      <h1 className="text-[1.6vw] font-semibold ">Product Filters</h1>
      <div className="grid mt-5 grid-cols-3 gap-5">
        {productFiltersConstants.map((item, i) => (
          <ProductFilterCard
            key={i}
            logo={item.logo}
            heading={item.heading}
            subheading={item.subheading}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductFilters;
