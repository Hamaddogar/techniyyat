"use client";
import React from "react";

import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { HomeNavbarConstant } from "@/constants/HomeNavbarConstants";
import { ReviewCard } from ".";

const ReviewSideDrawer = ({
  isDrawerOpen,
  openSideDrawer,
  closeSideDrawer,
}: {
  isDrawerOpen: boolean;
  openSideDrawer: any;
  closeSideDrawer: any;
}) => {
  return (
    <React.Fragment>
      <Drawer
        size={400}
        placement="right"
        open={isDrawerOpen}
        onClose={closeSideDrawer}
        className="p-4 z-50 min-h-screen "
      >
        <div className="mb-6 z-50 flex items-center justify-between">
          <IconButton
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
          <img src="/cloudy.png" />
          <div className="w-full">
            <h1 className="text-2xl italic ">
              Managed Hosting
              <br /> Solutions
            </h1>
            <div className="w-full justify-between  flex gap-4">
              <p className="text-[#252530]/50">Cloudy Host</p>
              <span className="text-[#EC583C]">78 Reviews</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <h4 className="italic font-semibold py-4 text-lg">Reviews</h4>
          <span className="text-xs italic p-1 rounded-full px-2 text-white bg-[#EC583C]">
            8
          </span>
        </div>
        <div className="flex noscrollbar  h-screen overflow-y-scroll gap-4 flex-col">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default ReviewSideDrawer;
