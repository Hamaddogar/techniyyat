import React from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
const VendorCard = ({
  vendorName,
  productsOffering,
  reviews,
  status,
  categories,
}: {
  vendorName: string;
  productsOffering: string;
  reviews: string;
  status: string;
  categories: string;
}) => {
  return (
    <div className="flex max-md:text-[10px] items-center py-4 bg-white border-t text-[#252530]/70 border-gray-200 justify-between">
      <span className="">{vendorName}</span>
      <span className="">{productsOffering}</span>
      <span className="">{categories}</span>
      <span className="">{reviews}</span>
      <span
        className={`${
          status === "Active" ? "text-[#65D0BD]" : "text-[#EC583C]"
        } `}
      >
        {status}
      </span>
      <MoreHorizOutlinedIcon className="border border-[#252530]/30 rounded-full text-[#252530]/30" />
    </div>
  );
};

export default VendorCard;
