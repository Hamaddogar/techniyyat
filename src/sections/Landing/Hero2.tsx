import { Button } from "@/components";
import React from "react";

const Hero2 = () => {
  return (
    <div className="w-full h-full relative">
      <img className="w-full" src="/lading-hero2.png" />
      <div className="absolute flex flex-col justify-evenly h-full mx-auto left-10 w-[40%] top-0">
        <div className="w-full space-y-5">
          <h1 className="text-white leading-none text-[4.2vw] font-extrabold">
            Join As An <span className="text-[#F626D2]">Ambassador</span>
          </h1>
          <p className="text-white">
            Join us in building a community-driven platform that empowers
            individuals, supports Palestine, and promotes ethical technology
            choices. Together, we can create positive change in the technology
            landscape.
          </p>
          <Button className="rounded-lg bg-[#F626D2]" value="Register Now" />
        </div>
        <div className="h-[2px] w-full bg-white" />
        <div className="w-full leading-none space-y-5">
          <h1 className="text-white text-[4.2vw] font-extrabold">
            Become a <span className="text-[#F626D2]">Contributor</span>
          </h1>
          <p className="text-white">
            With our user-friendly search function, you can easily find
            technology vendors that align with your values. Whether you are
            looking for technology to acquire or to just to get information
            about specific vendor, our database will help you make the right
            choice.
          </p>
          <Button className="rounded-lg bg-[#F626D2]" value="Register Now" />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
