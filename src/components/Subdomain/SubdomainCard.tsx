import Link from "next/link";
import React from "react";

const SubdomainCard = ({ src, name }: { src: string; name: string }) => {
  return (
    <Link
      href="/product/num"
      className="flex border text-[#121218]/60 font-semibold justify-center p-3 h-[160px]  border-gray-200 flex-col items-center  w-full"
    >
      <img className="w-[60px]" src={src} />
      <h3 className="text-center max-w-[120px] ">{name}</h3>
    </Link>
  );
};

export default SubdomainCard;
