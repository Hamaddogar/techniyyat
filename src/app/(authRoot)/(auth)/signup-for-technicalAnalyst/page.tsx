import { Button, DropDown, Input } from "@/components";
import { ContinueWith } from "@/components/AuthLayout";
import ProviderButton from "@/components/Login/ProviderButton";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full flex-col justify-between">
      <div className="w-full h-full lg:p-12 p-4 shadow-2xl">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl italic">Let's Get Started</h1>
          <h4 className="text-[#252530]/70 text-xl ">
            Please enter the details to register an account
          </h4>
        </div>
        <div className="flex items-start mt-8 gap-6 flex-col ">
          <Input type="text" className="w-1/2" placeholder="User Name" />
          <div className="flex w-full gap-5">
            <DropDown value="Domain" />
            <DropDown value="Sub Domain" />
          </div>
          <div className="flex w-full gap-5">
            <DropDown value="Technology" />
            <Input type="text" phone placeholder="Phone Number" />
          </div>
          <Input type="email" placeholder="Email Address" />
          <Input type="password" placeholder="Password" />
          <Input type="text" placeholder="Linked In Link" />
          <Input type="text" placeholder="About Your Experience" />
        </div>
        <div className="w-full mt-10 flex items-center justify-center">
          <Button className="italic" value="Create Account" />
        </div>
        <ContinueWith />
        <div className="flex max-md:flex-col gap-5 mt-5">
          <ProviderButton
            providerImage="/googleIcon.png"
            providerName="Google"
          />
          <ProviderButton providerImage="/appleIcon.png" providerName="Apple" />
        </div>
      </div>
      <p className=" p-3 text-lg text-[#252530]/70 gap-1 italic font-semibold bottom-0 flex items-center border-t border-gray-200 justify-center bg-white">
        Already Have an Account?{" "}
        <Link href="/login" className="text-[#EC583C]">
          {" "}
          Login Here
        </Link>
      </p>
    </div>
  );
};

export default page;
