import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
  margin-bottom: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${({ checked }) => (checked ? "#3B755F" : "transparent")};
  border: ${({ checked }) =>
    !checked ? "2px solid black" : "2px solid #3B755F"};
  border-radius: 3px;
  transition: all 150ms;
  z-index: 2;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 37px;
    height: 37px;
    background: rgba(175, 198, 189, 0.5);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 150ms ease-in-out;
    z-index: -1;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
  }
`;
