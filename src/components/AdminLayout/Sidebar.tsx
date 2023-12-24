import React from "react";
import { CreateNewButton, SidebarLink } from ".";
import { sidebarConstant } from "@/constants/SidebarConstants";

const Sidebar = () => {
  return (
    <div className="w-[20%]  p-6">
      <div className="flex items-center flex-col gap-8">
        <img className="w-36  bg-transparent" src="/logo.png" />
        <CreateNewButton />
        <div className="flex flex-col gap-7">
          {sidebarConstant.map((item: any) => (
            <SidebarLink key={item.link} path={item.name} Icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
