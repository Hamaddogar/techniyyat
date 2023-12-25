import React from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
const ProductCard = ({
  productName,
  vendor,
  categories,
  reviews,
  status,
}: {
  productName: string;
  vendor: string;
  categories: string;
  reviews: string;
  status: string;
}) => {
  return (
    <div className="flex items-center py-4 bg-white border-t border-gray-200 justify-between">
      <span className="">{productName}</span>
      <span className="">{vendor}</span>
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

export default ProductCard;
