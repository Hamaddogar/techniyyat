import React from "react";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import Badge from "@mui/material/Badge";
const ProductDetailCard = ({
  logo: Logo,
  title,
  desc,
  badgeContent,
}: {
  logo: any;
  title: string;
  desc: string;
  badgeContent?: number;
}) => {
  return (
    <div className="flex p-3 items-center  rounded-lg border border-gray-100  w-full justify-between">
      <div className="w-full flex items-center gap-3">
        <Logo className="text-[#EC583C]" />
        <div>
          <p className="text-sm text-[#252530]/70">{title}</p>
          <h4 className="font-semibold text-lg">{desc}</h4>
        </div>
      </div>
      <Badge className="italic" color="error" badgeContent={badgeContent}>
        <ChatOutlinedIcon className="text-[#252530]/50" />
      </Badge>
    </div>
  );
};

export default ProductDetailCard;
