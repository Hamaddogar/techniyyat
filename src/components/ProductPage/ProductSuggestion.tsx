import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ProductSpecReviewCard } from ".";
import { Button } from "..";

export default function ProductSuggestion({
  isProductSuggestionOpen,
  closeProductSuggestion,
}: {
  isProductSuggestionOpen: boolean;
  closeProductSuggestion: any;
}) {
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
            <div className="flex min-h-full  items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[90%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex gap-5 p-4 border-b border-gray-200 items-center">
                    <img
                      className="w-[100px] h-[100px] "
                      src="/productSuggestionLogo.png"
                    />
                    <h1 className="text-[1.4vw] italic ">
                      Showing Suggestions for Product
                      <br /> Specification Section of :
                    </h1>
                  </div>

                  <div className="mt-4 pt-12 gap-6 flex items-center ">
                    <img className="h-[140px] w-[140px] " src="/cisco800.png" />
                    <div className="space-y-3">
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
                  <div className=" border-b mt-5 pb-12 border-gray-200 ">
                    <h1 className="italic text-[2vw]">Product Specification</h1>
                    <div className="text-[#252530]/70 justify-between items-end flex">
                      <p className="w-[60%]">
                        Hostwinds provides dependable cloud solutions at a
                        competitive price. Since founded in 2010, our primary
                        compassion has been providing the best customer service
                        and products to worldwide hosting customers. Our
                        professional support remains available to our customers
                        24/7 and boasts a 99.9999% uptime guarantee. Hostwinds
                        customers can rest assured knowing their hosting remains
                        in dependable hands. Do you have limited space.
                      </p>
                      <img src="/editImg.png" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-[2vw] italic ">
                      Reviews on Product Specification
                    </h1>
                    <div className="space-y-6 mt-6 ">
                      <ProductSpecReviewCard />
                      <ProductSpecReviewCard />
                    </div>
                    <p className="text-[#252530]/70 mt-5 text-lg items-center text-center ">
                      Lots of different plans to choose from, so I could find
                      one that fit my needs and budget.
                      <br /> Very easy to set-up my online server, there are
                      step by step instructions that are easy.
                    </p>
                    <Button
                      onClick={closeProductSuggestion}
                      className="italic w-full mt-3 "
                      value="CONTINUE"
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
