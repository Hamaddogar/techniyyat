import React from "react";

const Testimonial = () => {
  return (
    <div className="flex max-md:flex-col gap-4 items-center">
      <div className=" w-full space-y-4">
        <img src="/landing-test-logo.png" />
        <h2 className="text-3xl h-full font-semibold max-w-sm ">
          Wondershare Virbo
        </h2>
        <img src="/fiveStar.png" />
        <p className="w-[90%]">
          Scitum is the largest information security integrator company, with
          presence in Mexico and other Latin American countries. Scitum's focus
          is aimed at meeting the needs of our clients, and we have services
          that comprehensively cover the security cycle, including consulting
          services and managed services. We are part of Telmex and Grupo Carso,
          which provides us with great support and financial capacity to
          undertake complex and large-scale projects.
        </p>
        <h3 className="text-xl">
          Robert experienced <span className="text-[#EC583C]">Songfinch</span>
        </h3>
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
