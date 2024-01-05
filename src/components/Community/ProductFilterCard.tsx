import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const ProductFilterCard = ({
  subheading,
  heading,
  logo,
}: {
  subheading: string;
  heading: string;
  logo: string;
}) => {
  return (
    <div className="flex p-4 items-center gap-2 border border-gray-200 rounded-lg">
      <img src={logo} />
      <div>
        <h2 className="text-[#252530]/70 text-sm">{heading}</h2>
        <h1 className="text-lg">
          {subheading} <KeyboardArrowDownOutlinedIcon />
        </h1>
      </div>
    </div>
  );
};

export default ProductFilterCard;
