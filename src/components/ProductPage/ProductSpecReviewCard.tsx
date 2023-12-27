import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const ProductSpecReviewCard = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <img
          className="w-[70px] rounded-full h-[70px] "
          src="https://media.istockphoto.com/id/487729847/photo/human-head-wire-frame-render.jpg?s=2048x2048&w=is&k=20&c=9JCRYczlmgEulFaizTZJRX_VtGMGck_ZRbjhPJoEhA8="
        />
        <div>
          <h3 className="text-xl italic ">Andrew Smith</h3>
          <h5 className="text-[#252530]/70 italic ">Review on section title</h5>
          <p className="text-[#252530]/70">
            Need to change title with Product Features
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input type="checkbox" />
        <CloseOutlinedIcon className="p-1 border border-black rounded-full" />
      </div>
    </div>
  );
};

export default ProductSpecReviewCard;
