import React from "react";
import { Button, Input } from "..";

const Banner = ({
  topHeading,
  mainHeading,
  placeholder,
}: {
  topHeading: string;
  mainHeading: React.ReactNode;
  placeholder: string;
}) => {
  return (
    <div className="relative">
      <img
        className="min-w-full object-center h-[200px] md:h-[300px] lg:h-[420px]"
        src="/Banner.png"
      />
      <div className="flex h-full w-full items-center justify-center gap-5 top-0 absolute flex-col">
        <h2 className="text-[#EC583C] italic max-md:text-xs text-xl font-semibold ">
          {topHeading}
        </h2>
        <h1 className="text-center max-md:text-sm text-3xl italic font-semibold ">
          {mainHeading}
        </h1>
        <div className="flex items-center md:w-[400px] w-[90%] lg:w-[600px] justify-between bg-white p-1 rounded-full">
          <Input
            type="text"
            className="border-none max-md:text-sm  w-full rounded-full "
            placeholder={placeholder}
          />
          <Button value="Search" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
