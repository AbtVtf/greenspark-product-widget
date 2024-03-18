import styled, { css } from "styled-components";

export const Box = styled.button<{ bgcolor: string; selected: boolean }>`
  width: 16px;
  height: 16px;
  background-color: ${({ bgcolor }) => bgcolor};
  border: none;
  cursor: pointer;
  outline: none;
  transition: opacity 0.2s ease;

  ${({ selected }) =>
    selected &&
    css`
      box-shadow: inset 0 0 0 1.5px #b0b0b0;
    `}

  &:hover {
    opacity: 0.8;
  }
`;
