import LeftView from "@/components/AuthLayout/LeftView";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex ">
      <LeftView />
      {children}
    </div>
  );
};

export default layout;
