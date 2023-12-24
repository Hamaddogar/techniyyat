import React from "react";

const DropDown = ({ value }: { value: string }) => {
  return (
    <div className="relative  border border-gray-200 rounded-lg p-4 text-[#252530]/50 w-full inline-block text-left">
      <button
        type="button"
        className="w-full flex items-center justify-between font-medium leading-5 text-[#252530]/50 transition duration-150 ease-in-out  rounded-md group "
      >
        {value}
        <svg
          className="w-4 h-4 ml-2  "
          fill="none"
          stroke="#EC583C"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {/* <div className="absolute right-0 mt-2 space-y-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Option 1
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Option 2
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Option 3
        </a>
      </div> */}
    </div>
  );
};

export default DropDown;
