import { LeftView } from "@/components/AuthLayout";
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
