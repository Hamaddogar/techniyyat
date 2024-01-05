"use client";
import React from "react";

import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { homeNavbarConstants } from "@/constants/HomeNavbarConstants";
import Link from "next/link";

const MobileSideDrawer = ({
  isDrawerOpen,
  closeDrawer,
  openDrawer,
}: {
  isDrawerOpen: boolean;
  openDrawer: any;
  closeDrawer: any;
}) => {
  return (
    <React.Fragment>
      <Drawer
        placeholder={""}
        placement="right"
        open={isDrawerOpen}
        onClose={closeDrawer}
        className="p-4 z-50 w-[300px]  "
      >
        <div className="mb-6 z-50 flex items-center justify-between">
          <IconButton
            placeholder={""}
            className="w-full flex items-end justify-end"
            variant="text"
            color="blue-gray"
            onClick={closeDrawer}
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
        <div>
          {
            <div className="flex gap-5 text-lg flex-col">
              {homeNavbarConstants.map((item, i) => (
                <Link key={i} href={item.href}>
                  {item.name}
                </Link>
              ))}
            </div>
          }
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default MobileSideDrawer;
