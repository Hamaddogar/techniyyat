"use client";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
const Recaptcha = () => {
  const handleChange = () => {};
  return (
    <div className="w-full flex items-center mt-4 justify-center">
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!}
        onChange={handleChange}
      />
    </div>
  );
};

export default Recaptcha;
