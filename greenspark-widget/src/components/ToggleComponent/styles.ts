import styled from "styled-components";

export const SwitchInput = styled.input`
  position: relative;
  height: 20.05px;
  width: 40.11px;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  border-radius: 9999px;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
  border: 1px solid #afc6bd;
  &:checked {
    background-color: #3b755f;
    border: 1px solid #b0b0b0;
  }

  &::before {
    position: absolute;
    content: "";
    left: calc(39px - 40px);
    top: -1.5px;
    display: block;
    height: 20.05px;
    width: 20.05px;
    cursor: pointer;
    border: 1px solid #f2ebdb;
    border-radius: 9999px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 3px 10px rgba(100, 116, 139, 0.327);
  }

  &:hover::before {
    box-shadow: 0 0 0px 4px rgba(175, 198, 189, 0.5);
  }

  &:checked:hover::before {
    box-shadow: 0 0 0px 4px rgba(175, 198, 189, 0.5);
  }

  &:checked:before {
    transform: translateX(100%);
    border-color: #3b755f;
  }
`;
