import { Banner } from "@/components/Community";
import { Navbar } from "@/components/HomeLayout";
import React from "react";

const layout = ({ children }: { children: any }) => {
  return (
    <div className="max-w-[1400px]  w-full mx-auto">
      <Navbar />
      <Banner />
      <div className=" mt-16">{children}</div>
    </div>
  );
};

export default layout;
