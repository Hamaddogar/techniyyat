"use client";
import {
  Button,
  DropDown,
  Input,
  NewSectionSidebar,
  TextArea,
} from "@/components";
import { Box } from "@/components/Dashboard";
import { myVendorConstants } from "@/constants/MyVendorConstants";
import React, { useState } from "react";

const page = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="flex max-md:flex-col mb-4 items-center gap-5">
        {myVendorConstants.map((item) => (
          <Box Icon={item.icon} name={item.name} number={item.number} />
        ))}
      </div>
      <div className="bg-white flex p-7 rounded-xl">
        <div className="w-full flex-col gap-3 flex mx-auto">
          <h1 className="text-lg font-medium">Add New Vendor</h1>
          <div className="w-[30%] flex">
            <img
              className="w-[100px] object-cover rounded-lg h-[100px]"
              src="https://images.unsplash.com/photo-1703371169541-7f743764127e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="w-[90%] flex flex-col gap-5">
            <div className="flex gap-5 w-full">
              <Input
                type="text"
                className="w-full"
                placeholder="Product Name"
              />
              <Input type="text" className="w-full" placeholder="Vendor Name" />
              <Input type="text" className="w-full" placeholder="Website" />
            </div>
            <div className="flex gap-5 w-full">
              <DropDown value="Vendor domain" />
              <DropDown value="Sub domain" />
              <DropDown value="Vendor Technology" />
              <DropDown value="Vendor Country" />
            </div>
            <TextArea placeholder="Product Description" />
            <TextArea placeholder="Brief about owners" />
            <div className="w-full font-semibold flex gap-3">
              <Button value="Create Product" />
              <Button
                onClick={() => setIsDrawerOpen(true)}
                className="bg-[#FDF5F4] !text-[#EC583C] border !border-[#EC583C]"
                value="Add New Section"
              />
            </div>
          </div>
        </div>
        <NewSectionSidebar
          isDrawerOpen={isDrawerOpen}
          closeSideDrawer={() => setIsDrawerOpen(false)}
          openSideDrawer={() => setIsDrawerOpen(true)}
        />
      </div>
    </>
  );
};

export default page;
