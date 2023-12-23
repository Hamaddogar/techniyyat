import React from "react";

const ProviderButton = ({
  providerImage,
  providerName,
}: {
  providerImage: string;
  providerName: string;
}) => {
  return (
    <div className="flex border justify-center rounded-md border-gray-200 p-3 items-center gap-3 w-full">
      <img className="w-8 h-8" src={providerImage} />
      <p className="text-lg text-[#252530]">Continue With {providerName}</p>
    </div>
  );
};

export default ProviderButton;
