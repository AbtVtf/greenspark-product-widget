import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductWidget } from "../types/productWidgetType";

export const productWidgetsApi = createApi({
  reducerPath: "productWidgetsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.mocki.io/v2/" }),
  endpoints: (builder) => ({
    getProductWidgets: builder.query<ProductWidget[], void>({
      query: () => "016d11e8/product-widgets",
    }),
  }),
});

export const { useGetProductWidgetsQuery } = productWidgetsApi;
