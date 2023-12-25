import VendorCard from "@/components/Vendors/VendorCard";
import { vendorsConstants } from "@/constants/VendorsConstants";
import React from "react";

const page = () => {
  return (
    <div className="bg-white p-7 rounded-xl">
      <div className="flex items-center justify-between border-b border-gray-200 ">
        <div className="flex max-lg:text-[11px] gap-5 text-lg italic mb-4">
          <h3>Vendors Overview</h3>
        </div>
        <div className="flex gap-4 max-lg:text-[10px] text-[#252530]/50">
          <button className="border px-3 text-sm p-1 rounded-full border-gray-100">
            Select Category
          </button>
          <button className="border bg-[#EC583C]  text-sm p-2 text-white rounded-full border-gray-100">
            Add New Vendor
          </button>
        </div>
      </div>
      <div className="text-lg max-lg:text-[11px] flex mb-3 mt-6 justify-between ">
        <span className="w-full">Vendor Name</span>
        <span className="w-full">Products Offering</span>
        <span className="w-full">Categories</span>
        <span className="w-full">Reviews</span>
        <span className="w-full">Status</span>
        <span className="w-full hidden  items-center ml-3 ">Status</span>
      </div>
      <div>
        {vendorsConstants.map((item, i) => (
          <VendorCard
            key={i}
            categories={item.categories}
            status={item.status}
            productsOffering={item.productsOffering}
            reviews={item.reviews}
            vendorName={item.vendorName}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
