import React, { useState } from "react";
import {
  Icon,
  InfoIcon,
  ProfileButtonContainer,
  Text,
  TextContainer,
  Tooltip,
} from "./styles";
import info from "../../assets/info.svg";

type CustomTextProps = {
  size: number;
  weight: "regular" | "bold";
  color: string;
  text: string;
  tooltipText?: string;
};

export const CustomText = ({
  size,
  weight,
  color,
  text,
  tooltipText,
}: CustomTextProps) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [hideTimeoutId, setHideTimeoutId] = useState<NodeJS.Timeout | null>(
    null
  );

  const showTooltip = () => {
    if (hideTimeoutId) {
      clearTimeout(hideTimeoutId);
      setHideTimeoutId(null);
    }
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    const id = setTimeout(() => {
      setTooltipVisible(false);
    }, 300);
    setHideTimeoutId(id);
  };

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
              onMouseEnter={showTooltip}
              onMouseLeave={hideTooltip}
            />
            {isTooltipVisible && (
              <Tooltip
                onMouseEnter={showTooltip}
                onMouseLeave={hideTooltip}
                isVisible={isTooltipVisible}
              >
                <Text size={14} weight="regular" color="#212121">
                  {tooltipText}
                </Text>
                <ProfileButtonContainer onClick={() => {}}>
                  <Text size={14} weight="regular" color="#3B755F">
                    View Public Profile
                  </Text>
                </ProfileButtonContainer>
              </Tooltip>
            )}
          </>
        )}
      </Text>
    </TextContainer>
  );
};
