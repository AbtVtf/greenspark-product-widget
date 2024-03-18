import React, { useState } from "react";
import { Icon, InfoIcon, Text, TextContainer, Tooltip } from "./styles";
import info from "../../assets/info.svg";

type CustomTextProps = {
  size: number;
  weight: "regular" | "bold";
  color: string;
  text: string;
  tooltipText?: string;
};

export const CustomText: React.FC<CustomTextProps> = ({
  size,
  weight,
  color,
  text,
  tooltipText,
}) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  return (
    <TextContainer>
      <Text size={size} weight={weight} color={color}>
        {text}
        {tooltipText && (
          <>
            <InfoIcon />
            <Icon
              src={info}
              alt="info"
              onMouseEnter={() => setTooltipVisible(true)}
              onMouseLeave={() => setTooltipVisible(false)}
            />
            {isTooltipVisible && (
              <Tooltip
                onMouseEnter={() => setTooltipVisible(true)}
                onMouseLeave={() => setTooltipVisible(false)}
              >
                {tooltipText}
              </Tooltip>
            )}
          </>
        )}
      </Text>
    </TextContainer>
  );
};
