import {
  Banner,
  DomainCard,
  FeaturedProductCard,
} from "@/components/HomeLayout";
import { SubdomainCard } from "@/components/Subdomain";
import { featuredProductsConstants } from "@/constants/FeaturedProductsConstants";
import { subdomainConstants } from "@/constants/SubdomainConstants";
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
    </div>
  );
};

export default page;
