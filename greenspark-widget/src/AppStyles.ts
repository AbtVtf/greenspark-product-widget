import styled from "styled-components";

const tabletBreakpoint = "768px";
export const WidgetsContainer = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  @media (max-width: ${tabletBreakpoint}) {
    flex-direction: column;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  width: 851px;
  justify-content: center;
  align-items: center;
  padding: 104px 36px 148px 36px;
  box-shadow: 0 42px 76px 0 rgba(0, 0, 0, 0.05),
    0px 27.22px 44.51px rgba(0, 0, 0, 0.038),
    0px 16.18px 24.21px rgba(0, 0, 0, 0.0304),
    0px 8.4px 12.35px rgba(0, 0, 0, 0.025),
    0px 3.42px 6.19px rgba(0, 0, 0, 0.0196),
    0px 0.78px 2.99px rgba(0, 0, 0, 0.012);
  @media (max-width: ${tabletBreakpoint}) {
    width: 100%;
    padding: 104px 20px 148px 20px; // Adjust padding if necessary for smaller screens
  }
`;

export const TitleWrapper = styled.div`
  width: 760px;
  margin-left: 10px;
  border-bottom: 2px solid #b0b0b0;
  height: 48px;
  @media (max-width: ${tabletBreakpoint}) {
    width: 100%;
    margin-left: 0;
    height: auto;
  }
`;
