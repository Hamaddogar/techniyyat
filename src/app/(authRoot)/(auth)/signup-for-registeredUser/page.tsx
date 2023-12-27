import { Button, Input } from "@/components";
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
        <div className="flex items-end mt-8 gap-6 flex-col ">
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email Address" />
          <Input type="password" placeholder="Password" />
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
        <Link href="/signup-for-rcm" className="text-[#EC583C]">
          {" "}
          Login Here
        </Link>
      </p>
    </div>
  );
};

export default page;
