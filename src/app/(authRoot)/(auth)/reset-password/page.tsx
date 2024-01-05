"use client";
import { Button, Input } from "@/components";
import { ContinueWith } from "@/components/AuthLayout";
import ProviderButton from "@/components/Login/ProviderButton";
import Recaptcha from "@/components/Login/Recaptcha";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div className="flex w-full items-center shadow-2xl justify-center">
      <div className="w-full  flex-col justify-between">
        <div className="w-full p-4 h-full lg:p-12  ">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl italic">Reset Password</h1>
            <h4 className="text-[#252530]/70 text-xl ">
              Please enter the details to login an account
            </h4>
          </div>
          <div className="flex items-end mt-8 gap-6 flex-col ">
            <Input type="email" placeholder="Email Address" />
          </div>
          <div className="w-full mt-5 flex items-start justify-start">
            <Button
              onClick={() => router.push("/change-password")}
              className="italic cursor-pointer"
              value="Login Account"
            />
          </div>
          <p className=" p-3 text-lg text-[#252530]/50 gap-1 italic flex items-center justify-center bg-white">
            An email containing a link to reset your password has been sent to
            the email address associated with your account. Please check your
            email and follow the instructions to reset your password. If you do
            not receive the email within a few minutes, please check your spam
            folder. If you need further assistance, please contact our support
            team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
