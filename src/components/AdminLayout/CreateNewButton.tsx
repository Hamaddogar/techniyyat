import React from "react";

const CreateNewButton = () => {
  return (
    <button className="bg-[#EC583C] p-2 pr-4 rounded-full gap-2 max-lg:text-xs flex items-center text-white">
      <img className="bg-white rounded-full p-1" src="/plusIcon.png" />
      <p className="">Create New</p>
    </button>
  );
};

export default CreateNewButton;
