import { Button, Input } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className=" min-w-full flex min-h-screen ">
      <div className="w-[70%] mx-auto flex items-center  leading-none min-h-screen ">
        <div className="w-full max-w-[80%] mx-auto">
          <h1 className="text-[3vw] text-white font-semibold ">
            Let's Get Started
          </h1>
          <p className="text-[#B9B9BA] mt-3 font-semibold">
            Please enter the details to register an account
          </p>
          <div className="flex w-full gap-8 mt-7 ">
            <div className="space-y-4 w-full">
              <p className="text-[#B9B9BA] text-sm ">Full Name</p>
              <Input
                type="text"
                className="bg-transparent w-full text-[#B9B9BA] border focus:border-[#FFA85A] border-[#FFA85A]/15"
                placeholder=""
              />
            </div>
            <div className="space-y-4 w-full">
              <p className="text-[#B9B9BA] text-sm ">Email Address</p>
              <Input
                type="email"
                className="bg-transparent w-full focus:border-[#FFA85A] text-[#B9B9BA] border border-[#FFA85A]/15 "
                placeholder=""
              />
            </div>
          </div>
          <div className="flex w-full gap-8 mt-7 ">
            <div className="space-y-4 w-full">
              <p className="text-[#B9B9BA] text-sm ">Password</p>
              <Input
                type="password"
                className="bg-transparent w-full text-[#B9B9BA] border focus:border-[#FFA85A] border-[#FFA85A]/15"
                placeholder=""
              />
            </div>
            <div className="space-y-4 w-full">
              <p className="text-[#B9B9BA] text-sm ">Date Of Birth</p>
              <Input
                type="text"
                className="bg-transparent w-full focus:border-[#FFA85A] text-[#B9B9BA] border border-[#FFA85A]/15 "
                placeholder=""
              />
            </div>
          </div>
          <div className="space-y-4 mt-4  w-[50%]">
            <p className="text-[#B9B9BA] text-sm ">Nationality</p>
            <Input
              type="text"
              className="bg-transparent w-full focus:border-[#FFA85A] text-[#B9B9BA] border border-[#FFA85A]/15 "
              placeholder=""
            />
          </div>
          <Button
            className="bg-[#F2994A] mt-8 rounded-md "
            value="Create Account"
          />
          <p className="text-[#B9B9BA] mt-6 font-semibold ">
            Already have an account?{" "}
            <span className="text-[#F2994A] cursor-pointer">Login Here</span>
          </p>
        </div>
      </div>
      <div className="w-[30%] min-h-screen bg-no-repeat bg-right-top  bg-[url(/shooting-star.png)]"></div>
    </div>
  );
};

export default page;
