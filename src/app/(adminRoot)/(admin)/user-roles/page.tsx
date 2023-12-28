import UserCard from "@/components/UserRoles/UserCard";
import { user } from "@/constants/UserRoles";
import React from "react";

const page = () => {
  return (
    <div className="bg-white p-7 rounded-xl">
      <div className="flex items-center justify-between border-b border-gray-200 ">
        <div className="flex max-md:leading-none max-lg:text-[11px] gap-5 text-lg text-[#252530]/50 mb-4">
          <h3>Normal Users</h3>
          <h3>Vendors</h3>
          <h3>Review Committee Members</h3>
        </div>
        <div className="flex gap-4 max-lg:text-[10px] text-[#252530]/50">
          <button className="border px-3 p-1 rounded-full border-gray-100">
            Active Users
          </button>
          <button className="border py-1 px-3 rounded-full border-gray-100">
            Suspended Users
          </button>
        </div>
      </div>
      <div className="text-lg max-md:hidden max-lg:text-[11px] flex mb-3 mt-6 justify-between ">
        <span className="w-full flex items-center ml-3">User Name</span>
        <span className="w-full  flex items-center ml-3">Email Address</span>
        <span className="w-full flex items-center ml-3">Phone Number</span>
        <span className="w-full flex items-center ml-3">Location</span>
        <span className="w-full flex items-center ml-3">Status</span>
        <span className="w-full hidden  items-center ml-3">Status</span>
      </div>
      <div className="max-lg:text-[11px]">
        {user.map((item, i) => (
          <UserCard
            key={i}
            username={item.name}
            email={item.email}
            phone={item.phone}
            status={item.status}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
