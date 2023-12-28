import React from "react";
import { NavbarSearch, NotifButton } from ".";
import { notifButton } from "@/constants/NotifButtons";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Navbar = () => {
  return (
    <div className="p-4 justify-between flex items-center w-full">
      <h1 className="text-xl italic ">Dashboard</h1>
      <div className="flex items-center gap-4">
        <NavbarSearch />
        <SearchOutlinedIcon sx={{ color: "#EC583C" }} />
        {notifButton.map((item, i) => (
          <NotifButton key={i} Icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
