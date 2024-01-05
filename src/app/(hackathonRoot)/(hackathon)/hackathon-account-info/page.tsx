import { Button, Input } from "@/components";
import React from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import PersonIcon from "@mui/icons-material/Person";
const page = () => {
  return (
    <div className=" min-w-full flex min-h-screen ">
      <div className="w-[70%] mt-16 mx-auto flex items-center  leading-none min-h-screen ">
        <div className="w-full max-w-[80%] mx-auto">
          <h1 className="text-[3vw] text-white font-semibold ">Account Info</h1>
          <p className="text-[#B9B9BA] mt-3 font-semibold">
            Edit Personal Information
          </p>
          <div className="flex items-end gap-3">
            <div className="relative mt-8 w-max">
              <img
                className="rounded-full border border-white h-[150px] object-cover w-[150px] "
                src="/top-participant.png"
              />
              <div className="w-full text-white flex items-center justify-center h-full rounded-full border border-white absolute top-0 bg-[#FFA85A]/60 ">
                <PersonIcon sx={{ fontSize: "70px" }} />
              </div>
              <div className="text-white absolute bottom-0 right-4 w-max rounded-full border border-white bg-[#FFA85A]">
                <FileUploadOutlinedIcon />
              </div>
            </div>
            <p className="text-white font-semibold text-lg">Edit Profile Pic</p>
          </div>

          <div className="flex w-full gap-8 mt-7 ">
            <div className="space-y-4 w-full">
              <p className="text-[#B9B9BA] text-sm ">Full Name</p>
              <Input
                type="text"
                className="bg-transparent w-full text-[#B9B9BA] border focus:border-[#FFA85A] border-[#FFA85A]/15"
                placeholder=""
              />
            </div>
            <div className="space-y-4 w-full">
              <p className="text-[#B9B9BA] text-sm ">Email Address</p>
              <Input
                type="email"
                className="bg-transparent w-full focus:border-[#FFA85A] text-[#B9B9BA] border border-[#FFA85A]/15 "
                placeholder=""
              />
            </div>
          </div>
          <div className="flex w-full gap-8 mt-7 ">
            <div className="space-y-4 w-full">
              <p className="text-[#B9B9BA] text-sm ">Location</p>
              <Input
                type="text"
                className="bg-transparent w-full text-[#B9B9BA] border focus:border-[#FFA85A] border-[#FFA85A]/15"
                placeholder=""
              />
            </div>
            <div className="space-y-4 w-full">
              <p className="text-[#B9B9BA] text-sm ">Date Of Birth</p>
              <Input
                type="text"
                className="bg-transparent w-full focus:border-[#FFA85A] text-[#B9B9BA] border border-[#FFA85A]/15 "
                placeholder=""
              />
            </div>
          </div>
          <div className="space-y-4 mt-4  w-[50%]">
            <p className="text-[#B9B9BA] text-sm ">Nationality</p>
            <Input
              type="text"
              className="bg-transparent w-full focus:border-[#FFA85A] text-[#B9B9BA] border border-[#FFA85A]/15 "
              placeholder=""
            />
          </div>
          <Button
            className="bg-[#F2994A] mt-8 rounded-md "
            value="Create Account"
          />
        </div>
      </div>
      <div className="w-[30%] min-h-screen bg-no-repeat bg-right-top  bg-[url(/shooting-star.png)]"></div>
    </div>
  );
};

export default page;
