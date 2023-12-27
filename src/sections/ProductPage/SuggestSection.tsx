import { Button, Input, TextArea } from "@/components";
import React from "react";

const SuggestSection = ({ openSuggestion }: { openSuggestion: any }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl italic ">Suggest Section</h2>
      <Input type="text" placeholder="Section Title" />
      <TextArea placeholder="Write description about section" />
      <Button onClick={openSuggestion} value="Submit" className="w-[200px]" />
    </div>
  );
};

export default SuggestSection;
