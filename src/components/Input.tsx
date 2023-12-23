import React from "react";

const Input = ({
  type,
  placeholder,
  className = "",
  ...props
}: {
  type: string;
  placeholder: string;
  className?: string;
}) => {
  return (
    <input
      className={`${className} p-4 outline-none text-[#252530]/50 w-full border border-gray-200 rounded-lg `}
      {...props}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
