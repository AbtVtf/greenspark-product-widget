import React from "react";
import { SwitchInput } from "./styles";

type ToggleProps = {
  selected: boolean;
  onToggle: () => void;
};

export const Toggle: React.FC<ToggleProps> = ({ selected, onToggle }) => {
  return (
    <SwitchInput
      className="switch"
      type="checkbox"
      checked={selected}
      onChange={onToggle}
    />
  );
};
