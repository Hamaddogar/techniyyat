import React from "react";

const Testimonial = () => {
  return (
    <div className="flex max-md:flex-col gap-4 items-center">
      <div className=" w-full ">
        <img src="/fiveStar.png" />
        <h2 className="text-3xl h-full font-semibold max-w-sm ">
          Fixed my broke phone. But I still can't get a date on tinder
        </h2>
      </div>
      <div className="w-full">
        <img
          className="w-full object-cover max-lg:h-[400px] h-[550px] "
          src="https://images.unsplash.com/photo-1703533136832-2e91ef1a746f?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default Testimonial;
