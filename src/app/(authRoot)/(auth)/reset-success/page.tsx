import React from "react";

const page = () => {
  return (
    <div className="flex w-full items-center shadow-2xl justify-center">
      <div className="w-full  flex-col justify-between">
        <div className="w-full flex flex-col items-center p-4 h-full lg:p-12  ">
          <img src="/reset-success.png" />

          <p className=" p-3 text-lg text-[#252530]/50 gap-1 italic flex items-center justify-center bg-white">
            Password Reset Successfully
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
