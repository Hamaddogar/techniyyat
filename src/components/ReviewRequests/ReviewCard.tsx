import React from "react";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const ReviewCard = () => {
  return (
    <div className="bg-[#FDF5F4] space-y-2 rounded-lg p-3">
      <div className="flex  items-center justify-between">
        <div className="flex gap-3 items-center">
          <img
            className="w-10 h-10 rounded-full bg-center object-cover"
            src="https://media.istockphoto.com/id/1421312966/photo/mask.jpg?s=2048x2048&w=is&k=20&c=_TjaUn8iDWgcyPcsTn8Cr37JEQnDlS8afztmm0tmJ9k="
          />
          <p className="italic gap-3">Hassaan Ahmed</p>
        </div>
        <img className="w-[50px]" src="/fiveStar.png" />
      </div>
      <div className="space-y-2">
        <p className="text-[#252530]/70 italic">Business Description</p>
        <p className="text-[#252530]/70 italic">
          Lots of different plans to choose from, so I could find one that fit
          my needs and budget. Very easy to set-up my online server, there are
          step by step instructions that are easy.
        </p>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex items-center gap-2">
          <DoneOutlinedIcon className="text-[#65D0BD] border rounded-full p-1 text-[30px] border-[#65D0BD] " />
          <CloseOutlinedIcon className="text-[#EB4335] border rounded-full p-1 text-[30px] border-[#EB4335] " />
        </div>
        <div className="flex items-center gap-2">
          <CreateOutlinedIcon className="text-[#EB4335] border rounded-full p-1 text-[30px] border-[#EB4335] " />
          <DeleteOutlineOutlinedIcon className="text-white border rounded-full p-1 text-[30px] bg-[#EB4335] " />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
