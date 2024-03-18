import styled from "styled-components";

export const Text = styled.span<{
  size: number;
  weight: "regular" | "bold";
  color: string;
}>`
  font-family: "Cabin", sans-serif;
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => (weight === "bold" ? "bold" : "normal")};
  color: ${({ color }) => color};
`;

export const Tooltip = styled.div`
  visibility: hidden;
  width: 120px;
  background-color: #f9f9f9;
  color: #3b755f;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;

  &:hover {
    visibility: visible;
    opacity: 1;
  }
`;

export const TextContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;

export const InfoIcon = styled.span`
  cursor: help;
  position: relative;
`;

export const Icon = styled.img`
  height: 10px;
  margin-bottom: 4px;
`;
