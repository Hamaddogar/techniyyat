"use client";
import { Disclosure } from "@headlessui/react";
import React from "react";

const DisclosureComp = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="border p-4 border-gray-100">
      <Disclosure>
        <Disclosure.Button className="text-2xl font-semibold">
          <p>{title}</p>
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500 mt-4 ">
          <span className="text-[#252530]/50 ">{desc}</span>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
};

export default DisclosureComp;
