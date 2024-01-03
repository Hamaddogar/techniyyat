"use client";
import React, { useState } from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { ReviewPopover } from "..";
import { VendorsPopover } from ".";
import VendorsSideDrawer from "./VendorsSideDrawer";
const VendorCard = ({
  vendorName,
  productsOffering,
  reviews,
  status,
  categories,
}: {
  vendorName: string;
  productsOffering: string;
  reviews: string;
  status: string;
  categories: string;
}) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const openSideDrawer = () => setSideDrawerOpen(true);
  const closeSideDrawer = () => setSideDrawerOpen(false);
  return (
    <>
      <div className="flex max-md:text-[10px] items-center py-4 bg-white border-t text-[#252530]/70 border-gray-200 justify-between">
        <span onClick={openSideDrawer} className="cursor-pointer">
          {vendorName}
        </span>
        <span className="">{productsOffering}</span>
        <span className="">{categories}</span>
        <span className="">{reviews}</span>
        <span
          className={`${
            status === "Active" ? "text-[#65D0BD]" : "text-[#EC583C]"
          } `}
        >
          {status}
        </span>
        <VendorsPopover />
      </div>
      <VendorsSideDrawer
        closeSideDrawer={closeSideDrawer}
        isDrawerOpen={sideDrawerOpen}
        openSideDrawer={openSideDrawer}
      />
    </>
  );
};

export default VendorCard;
