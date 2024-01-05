import { Button } from "@/components";
import { OurSponsers, RegisterNow } from "@/components/Hackathon";
import { OurFeatures, TopParticipants } from "@/sections/Hackathon";
import React from "react";

const page = () => {
  return (
    <div className=" w-full flex flex-col gap-16 mx-auto ">
      <div className="flex min-h-[95vh] max-w-[1300px] mx-auto  w-full items-center justify-center">
        <div className="w-full space-y-5 h-full">
          <h1 className="text-[#FFA85A] font-semibold text-[3vw] leading-none ">
            Welcome to
            <br /> Technology Startups
            <br /> Competition Hackathon
          </h1>
          <p className="text-[#B9B9BA]">
            The harder you work for something, the greater you’ll
            <br /> feel when you achieve it.
          </p>
          <Button value="Call For Sponsers" className="bg-[#F2994A]" />
        </div>
        <img src="/robot-runnng.png" />
      </div>
      <div className="bg-[url(/hackathon-frame.png)] flex flex-col gap-16 mx-auto bg-center">
        <RegisterNow />
        <OurFeatures />
      </div>
      <TopParticipants />
      <OurSponsers />
      <div className="flex flex-col mt-6 items-center">
        <h1 className="text-2xl text-center text-white font-semibold">
          From ideas to <span className="text-[#FFA85A]">impact.</span> Join the{" "}
          <span className="text-[#FFA85A]">hackathon</span>
          <br /> and make your mark.
        </h1>
        <img src="/frame.png" />
      </div>
    </div>
  );
};

export default page;
