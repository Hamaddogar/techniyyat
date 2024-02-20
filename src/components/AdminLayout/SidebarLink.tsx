"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarLink = ({
  Icon,
  path,
  link,
}: {
  Icon: any;
  path: string;
  link: string;
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={`flex ${
        "/" + path.toLocaleLowerCase().split(" ").join("-") === pathname
          ? "text-[#EC583C]"
          : "text-[#252530]/50"
      } ${
        pathname == "/create-new-product" && path == "Products"
          ? "text-[#EC583C]"
          : ""
      } text-[#252530]/50 items-center gap-4`}
    >
      <Icon />
      <p>{path}</p>
    </Link>
  );
};

export default SidebarLink;
