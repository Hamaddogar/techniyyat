import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ProductSpecReviewCard, SuggestionUnderReview } from "../ProductPage";
import { Button, Input, ReviewSubmittedSuccess, TextArea } from "..";

export default function SuggestionReview({
  isProductSuggestionOpen,
  closeProductSuggestion,
}: {
  isProductSuggestionOpen: boolean;
  closeProductSuggestion: any;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = () => {
    closeProductSuggestion();
    setIsOpen(true);
  };
  return (
    <>
      <Transition appear show={isProductSuggestionOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeProductSuggestion}
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
                    <img
                      className="md:w-[70px] max-md:h-[70px] h-[70px] "
                      src="/chats.png"
                    />
                    <h1 className="text-[1.4vw] max-md:text-xs italic ">
                      Showing Suggestions for Product
                      <br /> Specification Section of :
                    </h1>
                  </div>

                  <div className="mt-4 pt-12 gap-6 flex max-md:flex-col items-center ">
                    <img className="h-[140px] w-[140px] " src="/cisco800.png" />
                    <div className="space-y-3">
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
                    <h1 className="italic max-md:text-xl text-[2vw]">
                      Product Specification
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
                  <div>
                    <h1 className="text-[2vw] max-md:text-xl mt-2 italic ">
                      Product Specification
                    </h1>
                    <div className="flex flex-col mt-4 gap-7">
                      <div className="space-y-2">
                        <h1 className="font-semibold text-lg">Section Title</h1>
                        <Input type="text" placeholder="Section Title" />
                      </div>
                      <div className="space-y-2">
                        <h1 className="font-semibold text-lg">
                          Section Description
                        </h1>
                        <TextArea placeholder="Section Description" />
                      </div>
                    </div>
                    <Button
                      onClick={handleSubmit}
                      className="italic w-full mt-3 "
                      value="Post Product Section Suggustion"
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <ReviewSubmittedSuccess
        closeSuccess={() => setIsOpen(false)}
        successIsOpen={isOpen}
      />
    </>
  );
}
