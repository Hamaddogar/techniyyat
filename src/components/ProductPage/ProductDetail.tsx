import React from "react";
import { Button } from "..";

const ProductDetail = ({
  openModal,
  openReviewRCMModal,
  noSuggestButtons,
}: {
  openModal?: any;
  openReviewRCMModal?: any;
  noSuggestButtons?: boolean;
}) => {
  return (
    <div className="flex w-full mx-auto items-center justify-center">
      <div className=" items-end max-md:flex-col max-md:gap-4 max-md:items-center flex w-full justify-between  mx-auto ">
        <div className="flex gap-4   items-end">
          <img className="max-md:w-[120px]" src="/cisco800.png" />
          <div className="space-y-3 -mt-2 ">
            <h1 className="text-3xl font-semibold ">TechCloud Services</h1>
            <div className="flex -mt-2 items-center gap-4">
              <img className="w-[100px]" src="/fiveStar.png" />
              <p className="text-[#252530]/70">647 Reviews</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          {!noSuggestButtons && (
            <>
              <Button
                onClick={openReviewRCMModal}
                className="bg-white border !p-2 !px-3 border-[#EC583C] !text-[#EC583C]"
                value="Contact Vendor"
              />
              <Button onClick={openModal} value="Write Review" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
