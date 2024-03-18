import React from "react";
import { CheckboxContainer, Icon, StyledCheckbox } from "./styles";

type CheckboxProps = {
  className?: string;
  checked: boolean;
  onChange: () => void;
};

const Checkbox = ({ className, checked, onChange }: CheckboxProps) => (
  <CheckboxContainer className={className} onClick={onChange}>
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
