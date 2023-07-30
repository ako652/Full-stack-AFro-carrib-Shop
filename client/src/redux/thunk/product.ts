import axios from "axios";
import { ProductAction } from "../slice/product";
import { AppDispatch } from "./../store";

export function fetchProduct() {
  const url = "https://backend-tc6z.onrender.com/products";
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

export function fetchProductDetails(productId: string) {
  const url = `https://backend-tc6z.onrender.com/products/${productId}`;
  return async (dispatch: AppDispatch) => {
    const response = await axios.get(url);
    const data = await response.data;
    dispatch(ProductAction.getProductDetail(data));
  };
}
