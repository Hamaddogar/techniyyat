import Link from "next/link";
import React from "react";

const CreateNewButton = ({
  name,
  className = "",
  link,
}: {
  name: string;
  className?: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      className={`bg-[#EC583C] p-2 ${className} pr-4 rounded-full gap-2 max-lg:text-xs flex items-center text-white`}
    >
      <img className="bg-white rounded-full p-1" src="/plusIcon.png" />
      <p className="">New {name}</p>
    </Link>
  );
};

export default CreateNewButton;
