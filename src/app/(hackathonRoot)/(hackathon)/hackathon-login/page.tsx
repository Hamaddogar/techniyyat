import { Button, Input } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className=" min-w-full flex min-h-screen ">
      <div className="w-full mx-auto flex items-center  leading-none min-h-screen ">
        <div className="max-w-[80%] mx-auto">
          <h1 className="text-[3vw] text-white font-semibold ">Welcome Back</h1>
          <p className="text-[#B9B9BA] mt-3 font-semibold">
            Please enter the details to login
          </p>
          <div className="flex flex-col gap-8 mt-7 ">
            <div className="space-y-4">
              <p className="text-[#B9B9BA] text-sm ">Email</p>
              <Input
                type="email"
                className="bg-transparent text-[#B9B9BA] border focus:border-[#FFA85A] border-[#FFA85A]/15"
                placeholder=""
              />
            </div>
            <div className="space-y-4">
              <p className="text-[#B9B9BA] text-sm ">Password</p>
              <Input
                type="password"
                className="bg-transparent focus:border-[#FFA85A] text-[#B9B9BA] border border-[#FFA85A]/15 "
                placeholder=""
              />
            </div>
          </div>
          <Button className="bg-[#F2994A] mt-4 rounded-md " value="Login" />
          <p className="text-[#B9B9BA] mt-6 font-semibold ">
            Don't have an account?{" "}
            <span className="text-[#F2994A] cursor-pointer">Register here</span>
          </p>
        </div>
      </div>
      <div className="w-full min-h-screen bg-no-repeat bg-right-top  bg-[url(/shooting-star.png)]"></div>
    </div>
  );
};

export default page;
