"use client";
import { hackathonNavbarConstants } from "@/constants/HackathonNavbarConstants";
import React from "react";
import { Button } from "..";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="absolute p-7 flex items-center justify-between w-full top-0">
      <div className="flex gap-5 items-center">
        <Link href="/hackathon">
          <img src="/hackathon-logo.png" />
        </Link>
        <div className="flex gap-4">
          {hackathonNavbarConstants.map((item) => (
            <span className="text-[#B9B9BA] text-sm " key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-3">
        <Button
          onClick={() => router.push("/hackathon-login")}
          className="text-xs bg-[#F2994A] !rounded-md  "
          value="LOGIN"
        />
        <Button
          onClick={() => router.push("/hackathon-register")}
          className="text-xs bg-[#F2994A] !rounded-md  "
          value="REGISTER"
        />
      </div>
    </div>
  );
};

export default Navbar;
