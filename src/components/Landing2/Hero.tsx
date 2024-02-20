import React from "react";
import { Button } from "..";

const Hero = () => {
  return (
    <div className="w-full h-full relative">
      {" "}
      <img className="w-full" src="/home-landing.png" />
      <div className="w-1/2 gap-4 h-[50%]  bg-white/10 m-3 flex flex-col items-start p-4 justify-center   rounded-3xl  absolute top-[50%] translate-y-[-50%] bottom-0 bg-opacity-50 backdrop-blur-lg  drop-shadow-lg">
        <p className="text-white text-lg">
          Read <span className="text-[#EC583C] ">Reviews.</span> Write{" "}
          <span className="text-[#EC583C] ">Reviews.</span>
        </p>
        <h1 className="font-extrabold leading-none text-[4.2vw] text-white ">
          Make Informed
          <br /> <span className="text-[#EC583C]">Decisions</span>
        </h1>
        <div className="w-full rounded-lg">
          <input
            placeholder="Search for technologies"
            className="w-[70%] rounded-l-lg p-3"
          />
          <Button className="rounded-r-lg rounded-l-none" value="Search" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
