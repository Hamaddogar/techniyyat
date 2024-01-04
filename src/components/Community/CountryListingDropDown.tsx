"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";

const CountryListingDropDown = () => {
  return (
    <div className="bg-white rounded-2xl p-4 w-full shadow-lg">
      <Disclosure>
        <Disclosure.Button className="py-2 w-full font-bold text-2xl flex items-start  ">
          Oceania (4)
        </Disclosure.Button>
        <Disclosure.Panel className="flex flex-col p-4 gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                className="h-8 object-contain rounded-md"
                src="https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg"
              />
              <h4 className="text-lg font-bold">Austrailia</h4>
            </div>
            <div className="text-[#EC583C] flex gap-4 ">
              <span>• Brisbane</span>
              <span>• Brisbane</span>
              <span>• Brisbane</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                className="h-8 object-contain rounded-md"
                src="https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg"
              />
              <h4 className="text-lg font-bold">New Zealand</h4>
            </div>
            <div className="text-[#EC583C] flex gap-4 ">
              <span>• Brisbane</span>
              <span>• Brisbane</span>
              <span>• Brisbane</span>
            </div>
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
};

export default CountryListingDropDown;
