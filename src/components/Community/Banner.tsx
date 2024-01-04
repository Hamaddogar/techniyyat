import React from "react";

const Banner = () => {
  return (
    <div className="relative ">
      <img
        className="h-[600px] rounded-2xl object-cover w-full"
        src="/banner-community.png"
      />
      <div className="w-1/2 h-[96%] m-3 flex flex-col items-start p-4 justify-center   rounded-3xl bg-black absolute top-0 bg-opacity-50 backdrop-blur-lg  drop-shadow-lg">
        <h1 className="font-bold text-[4.2vw] text-white ">
          <span className="text-[#EC583C]">Innovation</span>
          <br /> Through
          <br /> Collaboration
        </h1>
        <p className="text-white">
          Israel Living Lab embraces MIT’s Open Innovation methodology,
          fostering a culture of collaboration. Our accelerated innovation
          propels industries forward, bringing forth cutting-edge solutions.
        </p>
      </div>
    </div>
  );
};

export default Banner;
