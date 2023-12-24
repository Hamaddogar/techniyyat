import React from "react";

const NotifButton = ({ Icon }: { Icon: any }) => {
  return (
    <div className="bg-[#FDF5F4] p-2 rounded-full text-[#EC583C] ">
      <Icon sx={{ fontSize: 20 }} />
    </div>
  );
};

export default NotifButton;
