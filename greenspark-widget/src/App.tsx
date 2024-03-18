import React, { useEffect } from "react";
import { useGetProductWidgetsQuery } from "./services/productWidgetsApi";
import { selectWidgets, setWidgets } from "./slice/widgetsSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import Widget from "./components/WidgetComponent";
import { AppContainer, TitleWrapper, WidgetsContainer } from "./AppStyles";
import { CustomText } from "./components/TextComponent";

function App() {
  const { data: widgetsData } = useGetProductWidgetsQuery();

  const dispatch = useAppDispatch();
  const widgets = useAppSelector(selectWidgets);

  useEffect(() => {
    if (widgetsData) {
      dispatch(setWidgets(widgetsData));
    }
  }, [widgetsData, dispatch]);

  return (
    <AppContainer>
      <TitleWrapper>
        <CustomText
          text="Per product widgets"
          size={26}
          weight="bold"
          color="#212121"
        />{" "}
      </TitleWrapper>

      <WidgetsContainer>
        {widgets?.map((widget) => (
          <Widget
            key={widget.id}
            id={widget.id}
            action={widget.action}
            type={widget.type}
            amount={widget.amount}
            active={widget.active}
            linked={widget.linked}
            selectedColor={widget.selectedColor}
          />
        ))}
      </WidgetsContainer>
    </AppContainer>
  );
}

export default App;
