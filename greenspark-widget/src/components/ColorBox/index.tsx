import React from "react";
import { Box } from "./styles";

type ColorBoxProps = {
  color: string;
  selected: boolean;
  onClick: () => void;
};

export const ColorBox: React.FC<ColorBoxProps> = ({
  color,
  selected,
  onClick,
}) => {
  return <Box bgcolor={color} selected={selected} onClick={onClick} />;
};
