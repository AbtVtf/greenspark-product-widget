import React from "react";
import { Box } from "./styles";

type ColorBoxProps = {
  color: string;
  selected: boolean;
  onClick: () => void;
};

const ColorBox = ({ color, selected, onClick }: ColorBoxProps) => {
  return <Box bgcolor={color} selected={selected} onClick={onClick} />;
};

export default ColorBox;
