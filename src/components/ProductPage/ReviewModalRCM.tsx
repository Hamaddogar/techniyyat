import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Button, DropDown, TextArea } from "..";

const ReviewModalRCM = ({
  isReviewRCMOpen,
  closeReviewRCMModal,
}: {
  isReviewRCMOpen: boolean;
  closeReviewRCMModal: any;
}) => {
  return (
    <div>
      <Transition appear show={isReviewRCMOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeReviewRCMModal}
        >
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
                <Dialog.Panel className="w-full flex flex-col items-start  max-w-[700px] transform overflow-hidden gap-4 rounded-2xl bg-white p-6   shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900"
                  >
                    Write a Review
                  </Dialog.Title>
                  <div className="mt-4 w-full pt-12 gap-6 flex items-center ">
                    <img className="h-[140px] w-[140px] " src="/cisco800.png" />
                    <div className="space-y-3 flex flex-col items-start ">
                      <p className="text-[#EC583C]">
                        Cloud Infrastructure {">"} Networking {">"} Routers{" "}
                        {">"} Cisco
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

                  <div className="flex  py-5 w-full items-center gap-4">
                    <img
                      className="w-[70px] rounded-full h-[70px] "
                      src="https://media.istockphoto.com/id/487729847/photo/human-head-wire-frame-render.jpg?s=2048x2048&w=is&k=20&c=9JCRYczlmgEulFaizTZJRX_VtGMGck_ZRbjhPJoEhA8="
                    />
                    <div className="flex flex-col items-start">
                      <h3 className="text-xl italic ">Andrew Smith</h3>

                      <p className="text-[#252530]/70">
                        Your review will be posted publicly on the web. Learn
                        More
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <h2>Overall Ratings</h2>
                    <img className="w-[70px]" src="/fiveStar.png" />
                  </div>
                  <div className="w-full flex flex-col items-start ">
                    <h3 className="italic font-semibold">Reviews</h3>
                    <TextArea placeholder="Share details of your own experience at this place.... " />
                  </div>
                  <div className="w-full py-4 border-y border-gray-200 flex items-center justify-between">
                    <h4 className="font-semibold italic">
                      Review as James Cooper
                    </h4>
                  </div>
                  <div className="w-full flex items-center justify-center">
                    <Button
                      className="italic !rounded-none"
                      value="Post A Review"
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ReviewModalRCM;
