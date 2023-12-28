import { Navbar, Sidebar } from "@/components/AdminLayout";

import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div className="flex items-start">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <div className="w-full p-2 md:p-8 min-h-screen rounded-l-xl bg-[#f9f9f9]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
