import React from "react";
import { CreateNewButton, SidebarLink } from ".";
import { sidebarConstant } from "@/constants/SidebarConstants";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-[20%] max-md:hidden p-6">
      <div className="flex items-center flex-col gap-8">
        <Link href="/">
          <img className="w-36  bg-transparent" src="/techniyyat-logo.png" />
        </Link>
        <CreateNewButton />
        <div className="flex flex-col gap-7">
          {sidebarConstant.map((item: any) => (
            <SidebarLink
              link={item.link}
              key={item.link}
              path={item.name}
              Icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
