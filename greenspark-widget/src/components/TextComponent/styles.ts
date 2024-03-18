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

export const Tooltip = styled.div<{ isVisible: boolean }>`
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  width: 248px;
  background-color: #ffffff;
  text-align: center;
  padding: 5px 0;
  border-radius: 4px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  gap: 12px;
  box-shadow: 0 42px 76px 0 rgba(0, 0, 0, 0.05),
    0px 27.22px 44.51px rgba(0, 0, 0, 0.038),
    0px 16.18px 24.21px rgba(0, 0, 0, 0.0304),
    0px 8.4px 12.35px rgba(0, 0, 0, 0.025),
    0px 3.42px 6.19px rgba(0, 0, 0, 0.0196),
    0px 0.78px 2.99px rgba(0, 0, 0, 0.012);
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

export const ProfileButtonContainer = styled.div`
  cursor: pointer;
`;
