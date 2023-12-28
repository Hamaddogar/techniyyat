import React from "react";

const AboutVendor = () => {
  return (
    <div className=" max-h-max rounded-xl md:w-[70%]  ">
      <div className="bg-[#FDF5F4] space-y-6 rounded-xl p-6 ">
        <h2 className="text-[#EC583C]  italic text-xl font-semibold">
          About Vendor
        </h2>
        <div className="space-y-6">
          <img className="h-12 w-12" src="/cube.png" />
          <h3 className="text-2xl italic ">TechnoCloud Service</h3>
          <p className="text-[#252530]/70">
            Do you have limited space, but need best-in-class routing, voice and
            video, security, application performance, cloud connection, and
            wireless capabilities? Cisco 800 Series routers offer
          </p>
        </div>
        <div className="flex  items-start gap-4 text-[#252530]/70 ">
          <img className="max-h-5 object-contain " src="/loc-marker.png" />
          <p>
            23 Ali Mosa St. - From El Trolly St. - From El Kabalat St. Cairo -
            Egypt
          </p>
        </div>
        <div className="flex gap-4 text-[#252530]/70 ">
          <img className="max-h-5 object-contain " src="/users.png" />
          <p>ABC Companies, Aswan Companies</p>
        </div>
      </div>
    </div>
  );
};

export default AboutVendor;
