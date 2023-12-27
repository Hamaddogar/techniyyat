import { Banner, DomainCard, Testimonial } from "@/components/HomeLayout";
import { domainConstants } from "@/constants/DomainConstants";
import React from "react";

const page = () => {
  return (
    <div className="flex min-w-full  flex-col gap-12">
      <Banner
        mainHeading={
          <h1>
            Find Tech Landscape Companies
            <br /> You Can Trust & Review
          </h1>
        }
        placeholder="Find Rating and Reviews"
        topHeading={"Read Reviews, Write Reviews"}
      />
      <h1 className="text-[2.3vw] italic items-center justify-center flex">
        Select a Domain
      </h1>
      <div className="max-w-[1400px]  w-full mx-auto ">
        <div className="grid w-full gap-8 mx-auto px-2 grid-cols-2 md:grid-cols-4 place-content-center place-items-center items-center justify-center ">
          {domainConstants.map((item) => (
            <DomainCard key={item.src} name={item.name} src={item.src} />
          ))}
        </div>
      </div>
      <div className=" mx-auto bg-[#FFF8F9] w-full flex flex-col items-center p-4 gap-8">
        <div className=" w-full flex  flex-col gap-8  max-w-[1400px] mx-auto">
          <h5 className="text-[#EC583C] text-center text-lg italic ">
            Your Side of Stories
          </h5>
          <h1 className="text-3xl text-center font-semibold italic ">
            Each Review Has a Personal Story
          </h1>
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default page;
