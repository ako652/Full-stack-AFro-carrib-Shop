import { userAction } from "../slice/user";
import { AppDispatch } from "../store";
import axios from "axios";

export function getUser() {
  const url = "";
  return (dispatch: AppDispatch) => {
    axios
      .get(url)
      .then((data) => data.data)
      .then((user) => dispatch(userAction.userProfile(user)))
      .catch((error) => console.log(error));
  };
}
