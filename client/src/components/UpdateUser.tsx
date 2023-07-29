import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { userAction } from "../redux/slice/user";
import { useNavigate } from "react-router-dom";

export default function UpdateUser() {
  const userDetails = useSelector((state: RootState) => state.user.user);
  const [formData, setFormData] = useState({
    email: userDetails?.email,
    password: userDetails?.password,
  });
  const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, password: event.target.value });
  };
  const updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: event.target.value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateUserInfo = () => {
    const token = localStorage.getItem("userToken");
    const url = `http://localhost:8000/users/${userDetails?._id}`;
    axios
      .put(url, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(userAction.userProfile(res.data));
          console.log(res.data);
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setFormData({ password: "", email: "" });
  };

  return (
    <div>
      <div className="space-y-12">
        <div className="m-2 border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Update Your Personal Information
          </h2>
          <p className=" m-2 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className=" flex justify-center flex-col gap-x-6 gap-y-8 ">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Old Password
              </label>
              <div>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className=" rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                New Password
              </label>
              <div>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  onChange={updatePassword}
                  className=" rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={updateEmail}
                  className="  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          <Link to="/login"> Cancel</Link>
        </button>
        <button
          type="submit"
          onClick={updateUserInfo}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </div>
  );
}
