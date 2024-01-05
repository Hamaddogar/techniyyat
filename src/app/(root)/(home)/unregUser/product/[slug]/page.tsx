"use client";
import { Button } from "@/components";
import { Testimonial } from "@/components/HomeLayout";
import {
  HeadingAndDesc,
  ProductDetail,
  ProductSuggestion,
  ReviewModalRCM,
  SubmitReviewDialog,
  SuggestionUnderReview,
} from "@/components/ProductPage";
import { SubdomainCard } from "@/components/Subdomain";
import { companyCardConstants } from "@/constants/CompanyCard";
import { subdomainConstants } from "@/constants/SubdomainConstants";
import { FeaturedProductsLaunching } from "@/sections";
import { AboutVendor, Reviews, SuggestSection } from "@/sections/ProductPage";

import React, { useState } from "react";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const [suggestionIsOpen, setSuggestionIsOpen] = useState(false);
  const openSuggestion = () => {
    setSuggestionIsOpen(true);
  };
  const closeSuggestion = () => {
    setSuggestionIsOpen(false);
  };
  const [isProductSuggestionOpen, setIsProductSuggestionOpen] = useState(false);
  const closeProductSuggestion = () => {
    setIsProductSuggestionOpen(false);
  };
  const openProductSuggestion = () => {
    setIsProductSuggestionOpen(true);
  };
  const [isReviewRCMOpen, setIsReviewRCMOpen] = useState(false);
  const closeReviewRCMModal = () => {
    setIsReviewRCMOpen(false);
  };
  const openReviewRCMModal = () => {
    setIsReviewRCMOpen(true);
  };
  return (
    <div className="relative  ">
      <img className="w-full h-[200px] object-cover " src="/Banner.png" />
      <div className="max-w-[1440px] p-2 mx-auto ">
        <ProductDetail
          openReviewRCMModal={openReviewRCMModal}
          openModal={openModal}
        />
        <div className="flex w-full max-md:flex-col gap-5">
          <div className="w-full">
            <div className="mt-16 space-y-10 ">
              <HeadingAndDesc
                heading="Product Name"
                desc="Cisco Systems is a US-based publicly traded company, that develops, manufactures and sells hi-tech services and products for various sectors. Through its Israeli subsidiary, Cisco – Isra- el, Cisco Systems is currently involved in the establishment of technological hubs in the occupied the struc- tural dependency of the Palestinian economy on that of Israel."
              />
              <HeadingAndDesc
                heading="Product Specification"
                desc="Hostwinds provides dependable cloud solutions at a competitive price. Since founded in 2010, our primary compassion has been providing the best customer service and products to worldwide hosting customers. Our professional support remains available to our customers 24/7 and boasts a 99.9999% uptime guarantee. Hostwinds customers can rest assured knowing their hosting remains in dependable hands. Do you have limited space."
              />
            </div>
            <div className=" mt-6 ">
              <SuggestSection
                buttonVal="Suggest New Section"
                title={"Suggest Section About Vendor"}
                openSuggestion={openSuggestion}
              />
              <SuggestionUnderReview
                closeSuggestion={closeSuggestion}
                suggestionIsOpen={suggestionIsOpen}
              />
            </div>
            <div className="mt-8">
              <h1 className="text-2xl mb-7 font-semibold ">
                Vendor's other products
              </h1>
              <div className="grid md:grid-cols-4  w-full place-items-center grid-cols-2 lg:grid-cols-5 xl:grid-cols-7 gap-3">
                {subdomainConstants.map((item) => (
                  <SubdomainCard
                    href="/domains/num"
                    src={item.src}
                    name={item.name}
                  />
                ))}
              </div>
            </div>
            <div className="mt-8">
              <h1 className="text-xl mb-6 font-semibold">
                Alternative Vendors Solutions
              </h1>
              <div className="flex gap-4">
                {companyCardConstants.map((item) => (
                  <div
                    className="p-4 flex items-center justify-center rounded-lg w-[170px] border border-gray-200"
                    key={item.src}
                  >
                    <img className="" src={item.src} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <h1 className="text-xl mb-6 font-semibold">Promoted Vendors</h1>
              <div className="flex gap-4">
                {companyCardConstants.map((item) => (
                  <div
                    className="p-4 flex items-center justify-center rounded-lg w-[170px] border border-gray-200"
                    key={item.src}
                  >
                    <img className="" src={item.src} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6 items-center">
              <Reviews />
              <Button
                onClick={openModal}
                value="Write Review About This Vendor"
              />
            </div>
            <FeaturedProductsLaunching />
            <div className=" mx-auto pt-12 mt-5 bg-[#FFF8F9] w-full flex flex-col items-center p-4 gap-8">
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
        </div>
      </div>
      <SubmitReviewDialog closeModal={closeModal} isOpen={isOpen} />
    </div>
  );
};

export default page;
