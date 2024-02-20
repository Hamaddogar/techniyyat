import React from "react";
import { Button } from "..";

const Hero3 = () => {
  return (
    <div className="w-full h-full relative">
      <img className="w-full" src="/landing-hero-3.png" />
      <div className="absolute flex flex-col  h-full mx-auto left-10 w-[70%] top-16">
        <div className="w-full leading-none space-y-5">
          <h1 className="text-white text-[4.2vw] font-extrabold">
            Register and Market your Product, have Chance to join <br />
            <span className="text-[#F626D2]">Techniyyat Hackathon</span>
          </h1>
          <p className="text-white leading-tight">
            Calling all good technology vendors who are supporting Palestine and
            against the occupation activities of Israel ! We are excited to
            announce our upcoming hackathon, where you can showcase your
            products and compete for a chance to be recognized as a leading
            supporter of Palestine. Register your innovative vendor product and
            join us for an incredible event that will take place in one year.
          </p>
          <Button className="rounded-lg bg-[#F626D2]" value="Join Now" />
        </div>
      </div>
    </div>
  );
};

export default Hero3;
