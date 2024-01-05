"use client";
import { Banner } from "@/components/Community";
import { Navbar } from "@/components/HomeLayout";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const layout = ({ children }: { children: any }) => {
  const pathname = usePathname();
  const links = [
    { title: "Community Ambassadors", href: "/community" },
    { title: "Featured Products", href: "/community-featured-products" },
    {
      title: "Latest Technology Updates",
      href: "/community-latest-technology-updates",
    },
  ];
  return (
    <div className="max-w-[1400px]  w-full mx-auto">
      <Navbar />
      <Banner />
      <div className="flex mt-16 items-center gap-6 text-lg">
        {links.map((item) => (
          <Link
            className={`
              ${
                pathname === item.href
                  ? "text-[#EC583C] underline-offset-[12px] underline"
                  : "text-[#252530]/50"
              }
              
            `}
            key={item.href}
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
};

export default layout;
