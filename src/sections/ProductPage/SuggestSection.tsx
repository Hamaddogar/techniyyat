import { Button, Input, TextArea } from "@/components";
import React from "react";

const SuggestSection = ({
  openSuggestion,
  title,
  buttonVal,
}: {
  openSuggestion?: any;
  title?: any;
  buttonVal?: string;
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl italic ">{title || "Suggest Section"}</h2>
      <Input type="text" placeholder="Section Title" />
      <TextArea placeholder="Write description about section" />
      <Button
        onClick={openSuggestion}
        value={buttonVal ? buttonVal : "Submit"}
        className=""
      />
    </div>
  );
};

export default SuggestSection;
