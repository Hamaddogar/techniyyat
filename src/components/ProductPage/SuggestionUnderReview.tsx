import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const SuggestionUnderReview = ({
  suggestionIsOpen,
  closeSuggestion,
}: {
  suggestionIsOpen: any;
  closeSuggestion: any;
}) => {
  return (
    <div>
      <Transition appear show={suggestionIsOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeSuggestion}>
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
                    onClick={closeSuggestion}
                    className="w-full cursor-pointer text-[#232A35] flex items-end justify-end"
                  >
                    <CloseOutlinedIcon className="flex  w-full items-end" />
                  </div>
                  <img src="/Validation.png" />
                  <Dialog.Title
                    as="h3"
                    className="text-2xl space-y-3 font-medium leading-6 text-gray-900"
                  >
                    Your Suggestion is
                    <br /> Under Review
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Thank You! for suggesting us a new section, Committe
                      Member will review your request.
                    </p>
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

export default SuggestionUnderReview;
