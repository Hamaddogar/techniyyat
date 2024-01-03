import HackathonBanner from "@/components/HackathonBanner";
import {
  Banner,
  DomainCard,
  FeaturedProductCard,
  Testimonial,
} from "@/components/HomeLayout";
import { SubdomainCard } from "@/components/Subdomain";
import { featuredProductsConstants } from "@/constants/FeaturedProductsConstants";
import { subdomainConstants } from "@/constants/SubdomainConstants";
import { FeaturedProductsLaunching } from "@/sections";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner
        topHeading="Home > Infrastructure"
        mainHeading="Infrastructure Technologies"
        placeholder="Find in Infrastructure Technologies"
      />
      <div className="space-y-4 p-7">
        <h2 className="font-semibold italic text-lg">Sub Domains</h2>
        <div className="grid md:grid-cols-4  w-full place-items-center grid-cols-2 lg:grid-cols-5 xl:grid-cols-7 gap-3">
          {subdomainConstants.map((item) => (
            <SubdomainCard src={item.src} name={item.name} />
          ))}
        </div>
      </div>
      <div className="space-y-4 p-7">
        <h2 className="font-semibold italic text-lg">
          Featured Products in Infrastructure
        </h2>
        <div className="space-y-7">
          {featuredProductsConstants.map((item) => (
            <FeaturedProductCard
              desc={item.desc}
              src={item.src}
              name={item.name}
            />
          ))}
        </div>
      </div>
      <FeaturedProductsLaunching />
      <HackathonBanner />
      <div className=" mx-auto pt-12 bg-[#FFF8F9] w-full flex flex-col items-center p-4 gap-8">
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
