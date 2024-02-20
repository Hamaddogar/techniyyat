"use client";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
  Button,
  DropDown,
  Input,
  ReviewSubmittedSuccess,
  TextArea,
} from "../../";
const VendorSuggestionModal = ({
  isOpenfirstModal,
  closeModal,
}: {
  isOpenfirstModal: any;
  closeModal: any;
}) => {
  const [isEditProductSectionOpen, setIsEditProductSectionOpen] =
    useState(false);

  const handleContinue = () => {
    closeModal();
    setIsEditProductSectionOpen(true);
  };
  return (
    <>
      <Transition appear show={isOpenfirstModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40" />
          </Transition.Child>

          <div className="fixed w-full inset-0 overflow-y-auto">
            <div className="flex max-md:w-full min-h-full  items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-md:w-full max-w-[90%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex  gap-5 p-4 border-b border-gray-200 items-center">
                    <h1 className="text-[1.4vw] font-bold max-md:text-xs  ">
                      Showing Suggestions for Vendor Section
                    </h1>
                  </div>

                  <div className="mt-4 pt-12 gap-6 flex max-md:flex-col items-center ">
                    <img className="h-[140px] w-[140px] " src="/cisco800.png" />
                    <div className="space-y-3">
                      <p className="text-[#EC583C]">
                        {"Cloud Infrastructure > Networking  > Routers > Cisco"}
                      </p>
                      <h1 className="text-3xl italic ">
                        Cisco 800 Series Router
                      </h1>
                      <div className="text-[#252530]/70 flex items-center gap-2 ">
                        <img className="w-[100px]" src="/fiveStar.png" />
                        <p>647 Reviews</p>
                      </div>
                    </div>
                  </div>
                  <div className=" border-b space-y-2 mt-5 pb-12 border-gray-200 ">
                    <h1 className="font-bold max-md:text-xl text-[2vw]">
                      About Vendor
                    </h1>
                    <div className="text-[#252530]/70 justify-between items-end flex">
                      <p className=" max-md:w-full w-[90%]">
                        Hostwinds provides dependable cloud solutions at a
                        competitive price. Since founded in 2010, our primary
                        compassion has been providing the best customer service
                        and products to worldwide hosting customers. Our
                        professional support remains available to our customers
                        24/7 and boasts a 99.9999% uptime guarantee. Hostwinds
                        customers can rest assured knowing their hosting remains
                        in dependable hands. Do you have limited space.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h1 className="font-bold max-md:text-xl text-[2vw]">
                      Reviews on About Vendor
                    </h1>
                    <div className="flex flex-col mt-4 gap-7">
                      {[1, 2].map((item) => (
                        <VendorSectionReviewCard key={item} />
                      ))}
                    </div>
                    <Button
                      onClick={handleContinue}
                      className="italic w-full mt-3 "
                      value="Continue"
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <EditProductSection
        isEditProductSectionOpen={isEditProductSectionOpen}
        onClose={() => setIsEditProductSectionOpen(false)}
      />
    </>
  );
};

export default VendorSuggestionModal;

const VendorSectionReviewCard = () => {
  return (
    <div className="flex flex-col gap-6 p-5 border rounded-lg border-[#252530]/10">
      <div className="w-full flex p-4 border-b border-[#252530]/10 justify-between items-center">
        <div className="flex gap-2">
          <img
            className="w-14 h-14 rounded-full"
            src="/top-review-product-img.png"
          />
          <div>
            <h3 className="font-bold text-lg">Hassaan Ahmed</h3>
            <span className="text-[#EC583C]">Technical Analyst</span>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex items-center gap-3">
            <span>TA Reviewed</span>
            <input type="checkbox" />
          </div>
          <div className="flex items-center gap-3">
            <span>RCM Reviewed</span>
            <input type="checkbox" />
          </div>
        </div>
      </div>
      <h2 className="text-[#252530]/70 text-xl">
        Need to change title with Product Features
      </h2>
      <p className="text-[#252530]/50 text-sm">12/12/2023</p>
    </div>
  );
};

const EditProductSection = ({ isEditProductSectionOpen, onClose }: any) => {
  const [reviewSuccess, setReviewSuccess] = useState(false);
  const [reviewReject, setReviewReject] = useState(false);
  const handleReviewSubmit = () => {
    onClose();
    setReviewSuccess(true);
  };
  const handleReviewReject = () => {
    onClose();
    setReviewReject(true);
  };
  return (
    <>
      <Transition appear show={isEditProductSectionOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40" />
          </Transition.Child>

          <div className="fixed w-full inset-0 overflow-y-auto">
            <div className="flex max-md:w-full min-h-full  items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-md:w-full max-w-[90%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex  gap-5 p-4 border-b border-gray-200 items-center">
                    <h1 className="text-[1.4vw] font-bold max-md:text-xs  ">
                      Showing Suggestions for Vendor Section
                    </h1>
                  </div>

                  <div className="mt-4 pt-12 gap-6 flex max-md:flex-col items-center ">
                    <img className="h-[140px] w-[140px] " src="/cisco800.png" />
                    <div className="space-y-3">
                      <p className="text-[#EC583C]">
                        {"Cloud Infrastructure > Networking  > Routers > Cisco"}
                      </p>
                      <h1 className="text-3xl italic ">
                        Cisco 800 Series Router
                      </h1>
                      <div className="text-[#252530]/70 flex items-center gap-2 ">
                        <img className="w-[100px]" src="/fiveStar.png" />
                        <p>647 Reviews</p>
                      </div>
                    </div>
                  </div>
                  <div className=" border-b space-y-2 mt-5 pb-12 border-gray-200 ">
                    <h1 className="font-bold max-md:text-xl text-[2vw]">
                      About Vendor
                    </h1>
                    <div className="text-[#252530]/70 justify-between items-end flex">
                      <p className=" max-md:w-full w-[90%]">
                        Hostwinds provides dependable cloud solutions at a
                        competitive price. Since founded in 2010, our primary
                        compassion has been providing the best customer service
                        and products to worldwide hosting customers. Our
                        professional support remains available to our customers
                        24/7 and boasts a 99.9999% uptime guarantee. Hostwinds
                        customers can rest assured knowing their hosting remains
                        in dependable hands. Do you have limited space.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h1 className="font-bold max-md:text-xl text-[2vw]">
                      Original Product Specification
                    </h1>
                    <div>
                      <div className="flex flex-col mt-4 gap-7">
                        <div className="space-y-2">
                          <h1 className="font-semibold text-lg">
                            Section Title
                          </h1>
                          <Input type="text" placeholder="Section Title" />
                        </div>
                        <div className="space-y-2">
                          <h1 className="font-semibold text-lg">
                            Section Description
                          </h1>
                          <TextArea placeholder="Section Description" />
                        </div>
                      </div>
                      <h1 className="font-bold max-md:text-xl text-[2vw]">
                        Product Specification Suggestion for Reviewal
                      </h1>
                      <div className="space-y-2">
                        <h1 className="font-semibold text-lg">
                          Product Specification
                        </h1>
                        <TextArea placeholder="Product Specification" />
                        <div className="w-full flex items-center gap-3 justify-end">
                          <span>Mark this suggestion as top</span>
                          <input required type="checkbox" />
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Button
                          className="italic w-full mt-3 "
                          value="Assign for TA Review"
                        />
                        <Button
                          onClick={handleReviewReject}
                          className="italic w-full mt-3 "
                          value="Reject Review on Suggestion"
                        />
                        <Button
                          onClick={handleReviewSubmit}
                          className="italic w-full mt-3 "
                          value="Post Suggestion after Review"
                        />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <ReviewSubmittedSuccess
        successIsOpen={reviewSuccess}
        closeSuccess={() => setReviewSuccess(false)}
      />
    </>
  );
};

// Review Rejected
const ReviewReject = ({
  rejectIsOpen,
  closeReject,
}: {
  rejectIsOpen: any;
  closeReject: any;
}) => {
  return (
    <Transition appear show={rejectIsOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeReject}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full flex flex-col items-center max-w-md transform overflow-hidden gap-4 rounded-2xl bg-white p-6  align-middle shadow-xl transition-all">
                <div
                  onClick={closeReject}
                  className="w-full cursor-pointer text-[#232A35] flex items-end justify-end"
                >
                  <CloseOutlinedIcon className="flex  w-full items-end" />
                </div>
                <img src="/Validation.png" />
                <Dialog.Title
                  as="h3"
                  className="text-2xl space-y-3 font-medium leading-6 text-gray-900"
                >
                  Are you sure you want to reject this section?
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Thank You! for reviewing, Committe Member will review your
                    request
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Button className="italic w-full mt-3 " value="No" />
                  <Button className="italic w-full mt-3 " value="Yes" />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
