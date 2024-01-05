import HackathonBanner from "@/components/HackathonBanner";
import { Banner, DomainCard, Testimonial } from "@/components/HomeLayout";
import { SubdomainCard } from "@/components/Subdomain";
import { domainConstants } from "@/constants/DomainConstants";
import { subdomainConstants } from "@/constants/SubdomainConstants";
import { FeaturedProductsLaunching } from "@/sections";
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

      <div className="max-w-[1480px]  w-full mx-auto ">
        <div className="flex mb-4 items-center justify-between">
          <h1 className="text-3xl font-semibold">Featured Categories</h1>
          <p className="text-[#EC583C]">View All Categories</p>
        </div>
        <div className="grid md:grid-cols-4  w-full place-items-center grid-cols-2 lg:grid-cols-5 xl:grid-cols-7 gap-3">
          {subdomainConstants.map((item, i) => (
            <SubdomainCard
              key={i}
              href={"/domains/num"}
              src={item.src}
              name={item.name}
            />
          ))}
        </div>
      </div>
      <FeaturedProductsLaunching />
      <HackathonBanner />
      <div className=" mx-auto bg-[#FFF8F9] pt-12 w-full flex flex-col items-center p-4 gap-8">
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
