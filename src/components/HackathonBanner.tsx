import React from "react";
import { Button } from ".";

const HackathonBanner = () => {
  return (
    <div className="relative mt-5 w-full ">
      <img className="w-full" src="/banner-hackathon.png" />
      <div className="max-w-[1100px] flex mx-auto ">
        <div className="absolute items-center h-full flex  top-0">
          <div className="w-full space-y-5">
            <h1 className="text-white text-3xl">Hackathon' 23</h1>
            <p className="text-white w-[60%] text-lg">
              Trustpilot is a review platform that’s open to everyone. Share
              your experiences to help others make better choices and encourage
              companies to up their game.
            </p>
            <Button
              className="border !bg-transparent italic border-white"
              value="Learn More"
            />
          </div>
          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HackathonBanner;
