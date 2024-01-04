import React from "react";
import "./hackathon.css";
import { Navbar } from "@/components/Hackathon";
const layout = ({ children }: { children: any }) => {
  return (
    <main className="bg-[#03103c]   min-h-screen ">
      <Navbar />
      <div className=" mx-auto">{children}</div>
    </main>
  );
};

export default layout;
