import React from "react";
import { Button } from "..";

const ProductDetail = ({
  openModal,
  openReviewRCMModal,
}: {
  openModal: any;
  openReviewRCMModal: any;
}) => {
  return (
    <div className="flex w-full mx-auto items-center justify-center">
      <div className=" items-end  flex w-full justify-between  mx-auto ">
        <div className="flex gap-4   items-end">
          <img className="" src="/cisco800.png" />
          <div className="space-y-3 -mt-2 ">
            <h1 className="text-2xl">Cisco 800 Series Router</h1>
            <div className="flex -mt-2 items-center gap-4">
              <img className="w-[100px]" src="/fiveStar.png" />
              <p className="text-[#252530]/70">647 Reviews</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Button
            onClick={openReviewRCMModal}
            className="bg-white border !p-2 !px-3 border-[#EC583C] !text-[#EC583C]"
            value="Suggest Section"
          />
          <Button onClick={openModal} value="Write Review" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
