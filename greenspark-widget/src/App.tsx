import React, { useEffect, useState } from "react";
import { useGetProductWidgetsQuery } from "./services/productWidgetsApi";
import { selectWidgets, setWidgets } from "./slice/widgetsSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import Widget from "./components/WidgetComponent";

function App() {
  const { data: widgetsData } = useGetProductWidgetsQuery();
  console.log(widgetsData);
  const dispatch = useAppDispatch();
  const widgets = useAppSelector(selectWidgets);
  useEffect(() => {
    if (widgetsData) {
      dispatch(setWidgets(widgetsData));
    }
  }, [widgetsData, dispatch]);

  return (
    <div style={{ display: "flex", gap: "50px" }}>
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
    </div>
  );
}

export default App;
