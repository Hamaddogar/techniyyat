"use client";
import React, { useState } from "react";

import { IconButton } from "@material-tailwind/react";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { ReviewCard } from "./ReviewRequests";
import { Button, Input, SectionAddedSuccess, TextArea } from ".";
const NewSectionSidebar = ({
  isDrawerOpen,
  openSideDrawer,
  closeSideDrawer,
}: {
  isDrawerOpen: boolean;
  openSideDrawer: any;
  closeSideDrawer: any;
}) => {
  const [successOpen, setSuccessOpen] = useState(false);
  const handleSubmit = () => {
    closeSideDrawer();
    setSuccessOpen(true);
  };

  return (
    <React.Fragment>
      <Drawer
        open={isDrawerOpen}
        onClose={closeSideDrawer}
        direction="right"
        className="p-4"
        size={400}
      >
        <div className="mb-6 z-50 flex items-center justify-between">
          <IconButton
            placeholder={""}
            className="w-full flex items-end justify-end"
            variant="text"
            color="blue-gray"
            onClick={closeSideDrawer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex gap-2 border-b pb-4 border-gray-200 items-center">
          <img
            className="bg-[#FDF5F4] rounded-full p-3"
            src="/totalProducts.png"
          />
          <div className="w-full">
            <h1 className="text-2xl italic ">
              Add Vendor
              <br /> Section
            </h1>
            <div className="w-full justify-between  flex gap-4">
              <p className="text-[#252530]/50">You can add your own section</p>
            </div>
          </div>
        </div>
        <h1 className="font-semibold text-lg mt-3">Product Details</h1>
        <div className="space-y-4">
          <Input type="text" placeholder="Section Title" />
          <TextArea placeholder="Write description about section" />
          <Button onClick={handleSubmit} value="Add Section" />
        </div>
      </Drawer>
      <SectionAddedSuccess
        successIsOpen={successOpen}
        closeSuccess={() => setSuccessOpen(false)}
      />
    </React.Fragment>
  );
};

export default NewSectionSidebar;
