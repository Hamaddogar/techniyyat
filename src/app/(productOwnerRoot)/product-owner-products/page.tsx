import ProductsReview from "@/components/ProductOwner/ProductsReview";
import { DashboardBox } from "@/components/TechAnalystDashboard";
import { productOwnerDashboardBox } from "@/constants/productOwnerConstants";
import React from "react";

const page = () => {
  return (
    <div>
      {productOwnerDashboardBox.map((item) => (
        <DashboardBox Icon={item.icon} name={item.name} number={item.number} />
      ))}
      <div className="bg-white rounded-2xl p-5 mt-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl max-md:text-lg font-semibold">My Products</h1>
        </div>
        <div className="flex mt-5 flex-col gap-3">
          <ProductsReview />
          <ProductsReview />
        </div>
      </div>
    </div>
  );
};

export default page;
