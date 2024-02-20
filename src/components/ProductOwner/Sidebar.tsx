import Link from "next/link";
import React from "react";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import { CreateNewButton } from "../AdminLayout";

const Sidebar = () => {
  return (
    <div className="w-[20%] max-md:hidden p-6">
      <div className="flex items-center flex-col gap-8">
        <Link href="/">
          <img className="w-36  bg-transparent" src="/techniyyat-logo.png" />
        </Link>
        <div className="flex flex-col gap-3">
          <CreateNewButton
            link="/product-owner-new-product"
            className="bg-[#EC583C1A]  "
            name="Product"
          />
          <Link
            href="/product-owner-dashboard"
            className="text-[#EC583C] flex items-center gap-4"
          >
            <p>Dashboard</p>
          </Link>
          <Link
            href={"/product-owner-products"}
            className=" flex items-center gap-4"
          >
            <p>My Products</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
