import Link from "next/link";
import React from "react";

const DomainCard = ({ src, name }: { src: string; name: string }) => {
  return (
    <Link
      href="/domains/num"
      className="flex border  py-14 border-gray-200 flex-col items-center p-3 w-full"
    >
      <img className="w-[70px]" src={src} />
      <h3 className="text-center max-w-[120px] ">{name}</h3>
    </Link>
  );
};

export default DomainCard;
