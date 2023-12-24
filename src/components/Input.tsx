import React from "react";

const Input = ({
  type,
  placeholder,
  phone = false,
  className = "",
  ...props
}: {
  type: string;
  placeholder: string;
  phone?: boolean;
  className?: string;
}) => {
  return !phone ? (
    <input
      className={`${className} p-4 outline-none text-[#252530]/50 w-full border border-gray-200 rounded-lg `}
      {...props}
      placeholder={placeholder}
      type={type}
    />
  ) : (
    <div className="p-4 flex items-center outline-none gap-2 text-[#252530]/50 w-full border border-gray-200 rounded-lg ">
      <div className="pr-2 border-r border-gray-200 flex items-center gap-2">
        <img src="/uae-flag.png" />
        <span className="mr-2">+97</span>
      </div>
      <input
        className={`${className}  outline-none`}
        {...props}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Input;
