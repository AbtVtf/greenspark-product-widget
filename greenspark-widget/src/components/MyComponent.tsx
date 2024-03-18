import React from "react";
import { useGetProductWidgetsQuery } from "../services/productWidgetsApi";

const MyComponent = () => {
  const { data, error, isLoading } = useGetProductWidgetsQuery();
  console.log(data, error, isLoading);
  return <></>;
};

export default MyComponent;
