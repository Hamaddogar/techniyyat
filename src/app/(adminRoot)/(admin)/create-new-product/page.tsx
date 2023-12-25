import { Button, DropDown, Input, TextArea } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="bg-white flex p-7 rounded-xl">
      <div className="w-[80%] flex mx-auto">
        <div className="w-[30%] flex">
          <img
            className="w-[200px] object-cover rounded-lg h-[200px]"
            src="https://images.unsplash.com/photo-1703371169541-7f743764127e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="w-[70%] flex flex-col gap-5">
          <div className="flex gap-5 w-full">
            <Input type="text" className="w-full" placeholder="Product Name" />
            <DropDown value="Product Type" />
          </div>
          <div className="flex gap-5 w-full">
            <Input type="text" className="w-full" placeholder="HQ Location" />
            <DropDown value="Founded Year" />
          </div>
          <div className="flex gap-5 w-full">
            <Input
              type="email"
              className="w-full"
              placeholder="Email Address"
            />
            <Input type="text" className="w-full" placeholder="Phone Number" />
          </div>
          <Input
            type="text"
            className="w-full"
            placeholder="Price Starting From"
          />
          <TextArea placeholder="What is price about" />
          <TextArea placeholder="Product Description" />
          <div className="w-full flex justify-center">
            <Button value="Create Product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
