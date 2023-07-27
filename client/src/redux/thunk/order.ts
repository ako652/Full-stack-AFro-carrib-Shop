import axios from "axios";
import { AppDispatch } from "../store";
import { orderAction } from "../slice/order";

export function fetchOrderList(userId: string) {
  const url = `http://localhost:8000/order/${userId}`;
  return async (dispatch: AppDispatch) => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => dispatch(orderAction.getOrder(data)));
  };
}
