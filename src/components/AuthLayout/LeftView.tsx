import React from "react";

const LeftView = () => {
  return (
    <div className="w-full max-lg:hidden min-h-screen bg-[#fdfdfd] p-8">
      <img className="w-36  bg-transparent" src="/logo.png" />
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center">
          <img className="w-[500px]" src="/bgEclipse.png" />
          <img className=" absolute w-[450px]  top-14" src="/inputAvatar.png" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <img className="w-[140px] " src="/fiveStar.png" />
          <h2 className="text-center italic font-semibold text-[1.5vw]">
            Fixed my broke fone.
            <br /> But I still can't get a <br />
            date on Tinder
          </h2>
          <span>
            Robert experienced <span className="text-[#EC583C]">Songfinch</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftView;
