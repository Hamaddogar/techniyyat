"use client";
import { Button, ReviewSubmittedSuccess } from "@/components";
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
import { SuggestionReview } from "@/components/UnregUser";
import { companyCardConstants } from "@/constants/CompanyCard";
import { subdomainConstants } from "@/constants/SubdomainConstants";
import { FeaturedProductsLaunching } from "@/sections";
import { AboutVendor, Reviews, SuggestSection } from "@/sections/ProductPage";
import Link from "next/link";

import React, { useState } from "react";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const [submitSucess, setSubmitSucess] = useState(false);
  const [suggestionIsOpen, setSuggestionIsOpen] = useState(false);
  const openSuggestion = () => {
    setSuggestionIsOpen(true);
  };
  const closeSuggestion = () => {
    setSuggestionIsOpen(false);
  };
  return (
    <div className="relative  ">
      <img className="w-full h-[200px] object-cover " src="/Banner.png" />
      <div className="max-w-[1440px] p-2 mx-auto ">
        <ProductDetail noSuggestButtons />
        <div className="flex items-center gap-4 text-xl mt-4">
          <Link
            className="text-[#EC583C] underline-offset-8 underline "
            href={"/unregUser/vendors/num"}
          >
            Vendors
          </Link>
          <Link href={"/unregUser/product/num"}>Products</Link>
        </div>
        <div className="flex w-full max-md:flex-col gap-5">
          <div className="w-full">
            <div className="mt-16 space-y-10 ">
              <HeadingAndDesc
                heading="About Vendor"
                desc="Cisco Systems is a US-based publicly traded company, that develops, manufactures and sells hi-tech services and products for various sectors. Through its Israeli subsidiary, Cisco – Isra- el, Cisco Systems is currently involved in the establishment of technological hubs in the occupied Palestinian territory and in the Syr- ian Golan, as well as, in the Naqab (Negev) region. The company is complicit in Israel’s expanding visual surveillance apparatus in Jerusalem and has won an Israeli Ministry of Defense (IMOD) tender to provide servers and IT support to the Israeli military. Further, through its Israeli subsidiary, Cisco Systems is involved in the emerging Palestin- ian hi-tech sector. This involvement takes the guise of technological development and job creation but in fact, contributes to the struc- tural dependency of the Palestinian economy on that of Israel."
              />
              <HeadingAndDesc
                heading="History Of Ownership"
                desc="Cisco was founded in December 1984 by Leonard Bosack and Sandy Lerner. In 1990, Cisco went public and its shareholders expanded to include institutional investors and individual shareholders. Over the years, Cisco's shareholder base has continued to grow as the company's market capitalization and shareholder value have increased. The company's stock has been traded on the NASDAQ stock exchange under the ticker symbol CSCO. As of 2021, some of the largest shareholders of Cisco include institutional investors such as The Vanguard Group, BlackRock, and State Street Corporation. Additionally, individual investors and employees who hold stock options and shares as part of their compensation also make up a significant portion of Cisco's shareholder base. The history of Cisco's shareholders reflects the company's growth and success in the technology industry, as well as the evolving landscape of investment and ownership in the stock market."
              />
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
            <div className=" mt-6 ">
              <SuggestSection
                openSuggestion={openSuggestion}
                buttonVal="Suggest New Section"
                title={"Suggest Section About Vendor"}
              />
              <SuggestionReview
                closeProductSuggestion={closeSuggestion}
                isProductSuggestionOpen={suggestionIsOpen}
              />
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
      <SubmitReviewDialog
        openReviewSuccess={() => setSubmitSucess(true)}
        closeModal={closeModal}
        isOpen={isOpen}
      />
      <ReviewSubmittedSuccess
        successIsOpen={submitSucess}
        closeSuccess={() => setSubmitSucess(false)}
      />
    </div>
  );
};

export default page;
