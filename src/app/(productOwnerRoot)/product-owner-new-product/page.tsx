"use client";
import {
  Button,
  DropDown,
  Input,
  NewSectionSidebar,
  TextArea,
} from "@/components";
import { LogoUpload } from "@/components/AmbassadorDashboard";
import React, { useState } from "react";

const page = () => {
  return (
    <div className="bg-white flex p-7 rounded-xl">
      <div className="w-full flex-col gap-3 flex mx-auto">
        <h1 className="text-lg font-medium">Add New Product</h1>

        <div className="w-[90%] flex flex-col gap-5">
          <div className="flex gap-5 w-full">
            <Input type="text" className="w-full" placeholder="Company Name" />

            <Input type="text" className="w-full" placeholder="Website" />
          </div>
          <div className="flex gap-5 w-full">
            <DropDown value="Vendor domain" />
            <DropDown value="Sub domain" />
            <DropDown value="Vendor Technology" />
          </div>
          <div className="flex items-start gap-5">
            {" "}
            <TextArea placeholder="Product Description" />
            <DropDown value="Vendor Country" />
          </div>

          <TextArea placeholder="Brief about owners" />
          <div className="w-[50%]">
            <LogoUpload />
          </div>
          <div className="w-full font-semibold flex gap-3">
            <Button value="Create Product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
