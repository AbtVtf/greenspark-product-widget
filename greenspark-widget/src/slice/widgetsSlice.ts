import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { ProductWidget } from "../types/productWidgetType";

interface WidgetsState {
  widgets: ProductWidget[];
  activeWidgetId: number | null;
}

const initialState: WidgetsState = {
  widgets: [],
  activeWidgetId: null,
};

const widgetsSlice = createSlice({
  name: "widgets",
  initialState,
  reducers: {
    setWidgets: (state, action: PayloadAction<ProductWidget[]>) => {
      state.widgets = action.payload;
    },
    updateWidget: (state, action: PayloadAction<ProductWidget>) => {
      const index = state.widgets.findIndex((w) => w.id === action.payload.id);
      if (index !== -1) {
        state.widgets[index] = action.payload;
      }
    },
    updateWidgetColor: (
      state,
      action: PayloadAction<{ id: number; color: string }>
    ) => {
      console.log(action.payload, state.widgets[0]);
      const index = state.widgets.findIndex((w) => w.id === action.payload.id);
      if (index !== -1) {
        state.widgets[index].selectedColor = action.payload.color;
      }
    },
    updateLinkToProfile: (
      state,
      action: PayloadAction<{ id: number; isLinked: boolean }>
    ) => {
      console.log(action.payload);
      const index = state.widgets.findIndex((w) => w.id === action.payload.id);
      if (index !== -1) {
        state.widgets[index].linked = action.payload.isLinked;
      }
    },
    setActiveWidgetId: (state, action: PayloadAction<number>) => {
      state.widgets.forEach((widget) => {
        widget.active = false;
      });
      const index = state.widgets.findIndex((w) => w.id === action.payload);
      if (index !== -1) {
        state.widgets[index].active = true;
        state.activeWidgetId = action.payload;
      }
    },
  },
});

export const {
  setWidgets,
  updateWidget,
  setActiveWidgetId,
  updateWidgetColor,
  updateLinkToProfile,
} = widgetsSlice.actions;

export default widgetsSlice.reducer;

export const selectWidgets = (state: RootState) => state.widgets.widgets;
export const selectActiveWidgetId = (state: RootState) =>
  state.widgets.activeWidgetId;
