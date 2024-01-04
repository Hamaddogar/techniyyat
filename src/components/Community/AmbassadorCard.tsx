import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
const AmbassadorCard = () => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl shadow-lg ">
      <img src="/top-participant.png" className="h-32 object-cover w-32" />
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">Abdul Rehman</h2>
        <p className="text-[#252530]/70 w-[70%] ">
          Do you have limited space, but need best-in-class routing, voice and
          video, security, application performance, cloud connection, and
          wireless capabilities? Cisco 800 Series routers offer
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <LanguageIcon className="text-[#EC583C]" />
            <p className="text-sm">abdulrehman@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <LocationOnOutlinedIcon className="text-[#EC583C]" />
            <p className="text-xs">
              23 Ali Mosa St. - From El Trolly St. - From El Kabalat St. Cairo -
              Egypt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbassadorCard;
