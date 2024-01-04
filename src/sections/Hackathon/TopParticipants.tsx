import { Button } from "@/components";
import { TopParticipant } from "@/components/Hackathon";
import { TopParticipantsConstants } from "@/constants/TopParticipantsConstants";
import React from "react";

const TopParticipants = () => {
  return (
    <div className="flex max-w-[1300px] mx-auto flex-col mt-9 items-center">
      <h1 className="text-[#FFA85A] font-semibold text-2xl ">
        Top Participants
      </h1>
      <p className="text-[#B9B9BA] mt-2 font-semibold ">
        The harder you work for something, the greater you’ll feel when you
        achieve it.
      </p>
      <div className="grid mt-3 max-w-[1300px] gap-4 mx-auto grid-cols-3">
        {TopParticipantsConstants.map((item) => (
          <TopParticipant
            desc={item.desc}
            name={item.name}
            image={item.image}
            position={item.position}
          />
        ))}
      </div>
      <Button
        className="bg-transparent mt-6 rounded-lg border border-[#F2994A] text-[#F2994A] "
        value="Load More"
      />
    </div>
  );
};

export default TopParticipants;
