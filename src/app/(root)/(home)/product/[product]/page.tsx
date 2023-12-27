"use client";
import { Button } from "@/components";
import {
  HeadingAndDesc,
  ProductDetail,
  ProductSuggestion,
  ReviewModalRCM,
  SubmitReviewDialog,
  SuggestionUnderReview,
} from "@/components/ProductPage";
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
    <div className="relative">
      <img className="w-full h-[200px] object-cover " src="/Banner.png" />
      <div className="max-w-[1440px] mx-auto ">
        <ProductDetail
          openReviewRCMModal={openReviewRCMModal}
          openModal={openModal}
        />
        <div className="flex gap-5">
          <div className="w-full">
            <div className="mt-16 space-y-10 ">
              <HeadingAndDesc
                heading="About Product"
                desc="Hostwinds provides dependable cloud solutions at a competitive price. Since founded in 2010, our primary compassion has been providing the best customer service and products to worldwide hosting customers. Our professional support remains available to our customers 24/7 and boasts a 99.9999% uptime guarantee. Hostwinds customers can rest assured knowing their hosting remains in dependable hands. Do you have limited space, but need best-in-class routing, voice and video, security, application performance, cloud connection, and wireless capabilities? Cisco 800 Series routers offer all that in a single device. They are well suited for customer premises and priced for small and midsize businesses."
              />
              <HeadingAndDesc
                heading="Product Specification"
                desc="Hostwinds provides dependable cloud solutions at a competitive price. Since founded in 2010, our primary compassion has been providing the best customer service and products to worldwide hosting customers. Our professional support remains available to our customers 24/7 and boasts a 99.9999% uptime guarantee. Hostwinds customers can rest assured knowing their hosting remains in dependable hands. Do you have limited space."
              />
              <Button
                onClick={openProductSuggestion}
                className="bg-white border !p-2 !px-4 border-[#EC583C] !text-[#EC583C]"
                value="Suggest Section"
              />
            </div>
            <div className=" mt-6 ">
              <SuggestSection openSuggestion={openSuggestion} />
              <SuggestionUnderReview
                closeSuggestion={closeSuggestion}
                suggestionIsOpen={suggestionIsOpen}
              />
            </div>
            <div>
              <Reviews />
            </div>
          </div>
          <AboutVendor />
        </div>
      </div>
      <SubmitReviewDialog closeModal={closeModal} isOpen={isOpen} />
      <ProductSuggestion
        isProductSuggestionOpen={isProductSuggestionOpen}
        closeProductSuggestion={closeProductSuggestion}
      />
      <ReviewModalRCM
        closeReviewRCMModal={closeReviewRCMModal}
        isReviewRCMOpen={isReviewRCMOpen}
      />
    </div>
  );
};

export default page;
