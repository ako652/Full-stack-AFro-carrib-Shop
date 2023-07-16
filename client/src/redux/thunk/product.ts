import axios from "axios";
import { ProductAction } from "../slice/product";
import { AppDispatch } from "./../store";

export function fetchProduct() {
  const url = "http://localhost:8000/products";
  return (dispatch: AppDispatch) => {
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        dispatch(ProductAction.getProducts(data));
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  };
}
