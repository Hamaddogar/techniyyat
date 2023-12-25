import React from "react";

const TextArea = ({ placeholder }: { placeholder: string }) => {
  return (
    <textarea
      className="p-4 outline-none text-[#252530]/50 w-full border border-gray-200 rounded-lg"
      placeholder={placeholder}
      rows={5}
    />
  );
};

export default TextArea;
