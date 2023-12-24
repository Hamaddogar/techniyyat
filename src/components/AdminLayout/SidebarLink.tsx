import React from "react";

const SidebarLink = ({ Icon, path }: { Icon: any; path: string }) => {
  return (
    <div className="flex text-[#252530]/50 items-center gap-4">
      <Icon />
      <p>{path}</p>
    </div>
  );
};

export default SidebarLink;
