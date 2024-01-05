"use client";
import { Button, Input } from "@/components";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div className="flex w-full items-center shadow-2xl justify-center">
      <div className="w-full flex flex-col justify-between">
        <div className="w-full p-4 h-full lg:p-12  ">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl italic">Change Password</h1>
            <h4 className="text-[#252530]/70 text-xl ">
              Please enter new password
            </h4>
          </div>
          <div className="flex items-end mt-8 gap-6 flex-col ">
            <Input type="email" placeholder="Email Address" />
            <Input type="password" placeholder="Password" />
          </div>
          <p className=" p-3 text-lg text-[#252530]/50 gap-1 italic flex items-center justify-center bg-white">
            Please enter your new password in the field below. Make sure to
            choose a strong, unique password that you can easily remember.
          </p>
          <div className="w-full mt-5 flex items-center justify-start">
            <Button
              onClick={() => router.push("reset-success")}
              className="italic"
              value="Login Account"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
