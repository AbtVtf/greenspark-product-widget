import React from "react";
import { SwitchInput } from "./styles";

type ToggleProps = {
  selected: boolean;
  onToggle: () => void;
};

export const Toggle = ({ selected, onToggle }: ToggleProps) => {
  return (
    <SwitchInput
      className="switch"
      type="checkbox"
      checked={selected}
      onChange={onToggle}
    />
  );
};
