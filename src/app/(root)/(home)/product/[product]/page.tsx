"use client";
import { Button, DisclosureComp } from "@/components";
import {
  HeadingAndDesc,
  ProductDetail,
  ProductDetailCard,
  ProductSuggestion,
  ReviewModalRCM,
  SubmitReviewDialog,
  SuggestionUnderReview,
} from "@/components/ProductPage";
import { productDetailsConstants } from "@/constants/ProductDetails";
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
            <div className="mt-16 space-y-4 ">
              <DisclosureComp
                desc="Hostwinds provides dependable cloud solutions at a competitive price. Since founded in 2010, our primary compassion has been providing the best customer service and products to worldwide hosting customers. Our professional support remains available to our customers 24/7 and boasts a 99.9999% uptime guarantee. Hostwinds customers can rest assured knowing their hosting remains in dependable hands."
                title="What is TechCloud Services?"
              />
              <DisclosureComp
                desc="Hostwinds provides dependable cloud solutions at a competitive price. Since founded in 2010, our primary compassion has been providing the best customer service and products to worldwide hosting customers. Our professional support remains available to our customers 24/7 and boasts a 99.9999% uptime guarantee. Hostwinds customers can rest assured knowing their hosting remains in dependable hands."
                title="Product Description"
              />
              <div className="flex w-full border border-gray-100 rounded-lg p-4 justify-between items-center">
                <h1 className="text-2xl font-semibold">
                  Pricing Starting From
                </h1>
                <h2 className="text-[#EC583C] text-lg font-semibold ">
                  $12.49/Month
                </h2>
              </div>
            </div>
            {/* Product Details */}
            <div className="flex mt-20 flex-col">
              <h1 className="text-2xl font-semibold">Product Details</h1>
              <div className="flex max-md:flex-col mt-4 gap-4">
                {productDetailsConstants.map((item) => (
                  <ProductDetailCard
                    badgeContent={3}
                    desc={item.desc}
                    title={item.title}
                    logo={item.logo}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Reviews />
            </div>
          </div>
        </div>
      </div>
      <SubmitReviewDialog closeModal={closeModal} isOpen={isOpen} />
    </div>
  );
};

export default page;
