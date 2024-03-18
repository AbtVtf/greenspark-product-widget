import styled from "styled-components";

export const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  border-radius: 8px;
  width: 221px;
  height: 167px;
  min-width: 221px;
`;

export const WidgetHeader = styled.div<{
  type: string;
}>`
  display: flex;
  gap: 10px;
  border-radius: 5.95px;
  height: 66px;
  background-color: ${({ type }) =>
    type === "carbon" ? "#F2EBDB" : type === "trees" ? "#3B755F" : "#2E3A8C"};
  align-items: center;
  justify-content: flex-start;
  padding: 0 5px;
`;

export const Logo = styled.img`
  width: 43px;
  height: 100px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 100%;
  justify-content: center;
`;

export const WidgetContent = styled.div`
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const WidgetRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 24px;
  align-items: center;
  //   padding: 0 3px;
`;

export const ColorBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 96px;
`;

export const CheckboxContainer = styled.div`
  margin-right: 3px;
`;
