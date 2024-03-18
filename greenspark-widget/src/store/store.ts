import { configureStore } from "@reduxjs/toolkit";
import { productWidgetsApi } from "../services/productWidgetsApi";
import widgetsReducer from "../slice/widgetsSlice";

export const store = configureStore({
  reducer: {
    widgets: widgetsReducer,
    [productWidgetsApi.reducerPath]: productWidgetsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productWidgetsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
