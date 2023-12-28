import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const NavbarSearch = () => {
  return (
    <div className="border max-md:hidden p-1 rounded-full">
      <SearchOutlinedIcon sx={{ color: "#EC583C" }} />
      <input className="outline-none text-[#252530]/50" placeholder="Search" />
    </div>
  );
};

export default NavbarSearch;
