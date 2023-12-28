import React from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
const UserCard = ({
  username,
  email,
  phone,
  location,
  status,
}: {
  username: string;
  email: string;
  phone: string;
  location: string;
  status: string;
}) => {
  return (
    <div className="flex max-md:flex-col max-md:gap-2 text-[#252530]/70 items-center p-4 bg-white border-t border-gray-200 justify-between">
      <span>{username}</span>
      <span>{email}</span>
      <span>{phone}</span>
      <span>{location}</span>
      <span
        className={`${
          status === "Active" ? "text-[#65D0BD]" : "text-[#EC583C]"
        }`}
      >
        {status}
      </span>
      <MoreHorizOutlinedIcon className="border order-[#252530]/30 rounded-full text-[#252530]/30" />
    </div>
  );
};

export default UserCard;
