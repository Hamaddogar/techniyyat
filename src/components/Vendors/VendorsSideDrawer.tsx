"use client";
import React from "react";

import { Drawer, IconButton } from "@material-tailwind/react";

import { ReviewCard } from "../ReviewRequests";
import { SideDrawerProductCard } from ".";

const VendorsSideDrawer = ({
  isDrawerOpen,
  openSideDrawer,
  closeSideDrawer,
}: {
  isDrawerOpen: boolean;
  openSideDrawer: any;
  closeSideDrawer: any;
}) => {
  return (
    <div>
      <React.Fragment>
        <Drawer
          placeholder={""}
          size={400}
          placement="right"
          open={isDrawerOpen}
          onClose={closeSideDrawer}
          className="p-4  shadow-lg  z-50 min-h-screen "
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
            <img className="w-[100px] h-[100px] " src="/cloudy.png" />
            <div className="w-full">
              <h1 className="text-2xl font-semibold ">Dreamhost</h1>
              <div className="w-full ">
                <p className="text-[#252530]/50">Cloud Hosting • 4 Products</p>
              </div>
            </div>
          </div>

          <h4 className=" font-semibold py-4 text-lg">Products</h4>

          <div className="flex noscrollbar  h-screen overflow-y-scroll gap-4 flex-col">
            <SideDrawerProductCard />
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default VendorsSideDrawer;
