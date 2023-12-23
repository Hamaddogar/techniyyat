import { Button, Input } from "@/components";
import ProviderButton from "@/components/Login/ProviderButton";
import Recaptcha from "@/components/Login/Recaptcha";
import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full p-4 lg:p-12 shadow-2xl h-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl italic">Login</h1>
          <h4 className="text-[#252530]/70 text-xl ">
            Please enter the details to login an account
          </h4>
        </div>
        <div className="flex items-end mt-8 gap-6 flex-col ">
          <Input type="email" placeholder="Email Address" />
          <Input type="password" placeholder="Password" />
          <p className="text-[#252530]/70 -mt-1">
            Forgot Password? <span className="text-[#EC583C]">Reset Now</span>
          </p>
        </div>
        <div className="w-full mt-5 flex items-center justify-center">
          <Button className="italic" value="Login Account" />
        </div>
        <div className="flex gap-2 mt-4 items-center">
          <div className="h-[2px] w-full bg-gray-100" />
          <span className="text-lg italic min-w-max">Or Continue With</span>
          <div className="h-[2px] w-full bg-gray-100" />
        </div>
        <div className="flex max-md:flex-col gap-5 mt-5">
          <ProviderButton
            providerImage="/googleIcon.png"
            providerName="Google"
          />
          <ProviderButton providerImage="/appleIcon.png" providerName="Apple" />
        </div>
        <Recaptcha />
      </div>
      <p className=" p-3 text-lg text-[#252530]/70 gap-1 italic font-semibold bottom-0 flex items-center border-t border-gray-200 justify-center bg-white">
        Already Have an Account?{" "}
        <span className="text-[#EC583C]"> Login Here</span>
      </p>
    </div>
  );
};

export default page;
