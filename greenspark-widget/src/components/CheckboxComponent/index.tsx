import React from "react";
import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from "./styles";

type CheckboxProps = {
  className?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  checked,
  onChange,
}) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} onChange={onChange} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
