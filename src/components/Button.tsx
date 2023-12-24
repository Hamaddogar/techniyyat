import React from "react";

const Button = ({
  value,
  className = "",
  ...props
}: {
  value: string;
  className?: string;
}) => {
  return (
    <button
      {...props}
      className={`${className} text-white rounded-full text-md p-3 px-5 bg-[#EC583C]`}
    >
      {value}
    </button>
  );
};

export default Button;