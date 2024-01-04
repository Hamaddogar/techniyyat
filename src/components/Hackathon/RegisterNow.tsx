import React from "react";
import { Button } from "..";

const RegisterNow = () => {
  return (
    <div className="p-3 max-w-[1300px] w-full mx-auto bg-white px-5 flex items-center justify-between rounded-full">
      <div className="w-full flex-col flex items-center justify-center ">
        <h2 className="font-semibold">Register Now</h2>
        <p className="text-[#121218]/80 font-semibold">Are you Ready?</p>
      </div>
      <div className="border-l-2 flex flex-col text-start items-center justify-center w-full border-gray-300">
        <h2 className="font-semibold">Start Date</h2>
        <p className="text-[#121218]/80 font-semibold">Choose Date</p>
      </div>
      <div className="border-l-2 flex text-start flex-col items-center justify-center w-full border-gray-300">
        <h2 className="font-semibold">End Date</h2>
        <p className="text-[#121218]/80 font-semibold">Choose Date</p>
      </div>
      <div className="border-l-2 flex flex-col items-center justify-center w-full border-gray-300">
        <h2 className="font-semibold">Skills</h2>
        <p className="text-[#121218]/80 font-semibold">Number of Skills</p>
      </div>
      <Button className="bg-[#F2994A] w-full" value="Register Now" />
    </div>
  );
};

export default RegisterNow;
