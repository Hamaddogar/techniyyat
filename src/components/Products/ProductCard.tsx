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
    <div className="flex items-center p-4 bg-white border-t border-gray-200 justify-between">
      <span className="w-full items-center justify-center flex">
        {productName}
      </span>
      <span className="w-full items-center justify-center flex">{vendor}</span>
      <span className="w-full items-center justify-center flex">
        {categories}
      </span>
      <span className="w-full items-center justify-center flex ml-3">
        {reviews}
      </span>
      <span
        className={`${
          status === "Active" ? "text-[#65D0BD]" : "text-[#EC583C]"
        } w-full items-center justify-center flex`}
      >
        {status}
      </span>
      <MoreHorizOutlinedIcon className="border border-[#252530]/30 rounded-full text-[#252530]/30" />
    </div>
  );
};

export default ProductCard;
