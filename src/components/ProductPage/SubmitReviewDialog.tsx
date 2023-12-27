import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Button, DropDown, TextArea } from "..";

const SubmitReviewDialog = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: any;
}) => {
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
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
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900"
                  >
                    Write a Review
                  </Dialog.Title>
                  <img src="/fiveStar.png" />

                  <DropDown value="Review On" />
                  <TextArea placeholder="Write the Review" />
                  <Button
                    onClick={closeModal}
                    className="w-full"
                    value="Submit Review"
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default SubmitReviewDialog;
