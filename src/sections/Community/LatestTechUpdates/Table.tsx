import React from "react";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { tableConstants } from "@/constants/TableConstants";
const Table = () => {
  return (
    <table className="w-full ">
      <thead className="w-full ">
        <tr className="flex w-full text-[#9291A5] justify-between">
          <th className="w-full font-medium text-center">Update Type</th>
          <th className="w-full justify-center text-center font-medium flex items-center ">
            <LanguageOutlinedIcon />
            Domains
          </th>
          <th className="w-full font-medium justify-center flex items-center text-center">
            <PersonOutlineOutlinedIcon />
            Name of Person
          </th>
          <th className="w-full font-medium flex justify-center items-center text-center">
            <CalendarTodayOutlinedIcon />
            Date & Time
          </th>
        </tr>
      </thead>
      <tbody className="w-full flex flex-col gap-7 mt-4 ">
        {tableConstants.map((item) => (
          <tr className="w-full flex items-center justify-between">
            <td
              className={`w-full ${
                item.updateType === "Added"
                  ? "text-[#EC583C]"
                  : "text-[#615E83]"
              } text-center`}
            >
              {item.updateType}
            </td>
            <td className="w-full text-[#121218]/70 text-center underline underline-offset-1">
              {item.domains}
            </td>
            <td className="w-full flex items-center justify-center gap-2 text-center">
              <img src={item.avatar} />
              {item.name}
            </td>
            <td className="w-full text-center">{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
