import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";

import { userAction } from "../redux/slice/user";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginPage({ open, setOpen }: Props) {
const [formData, setFormData] = useState({
  email: "",
  password: "",
});

const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({ ...formData, email: event.target.value });
};

const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({ ...formData, password: event.target.value });
};
const navigate = useNavigate();
const dispatch = useDispatch();
const submitUserLogin = () => {
  const url = "http://localhost:8000/users/login";
  axios.post(url, formData).then((res) => {
    if (res.status === 200) {
      dispatch(userAction.userProfile(res.data.userData));

      const userToken = res.data.token;
      localStorage.setItem("userToken", userToken);
      navigate("/users");
    }
    console.log(res.data);
  });
};
const submitUserInfos=()=>{
  navigate("/register")
}
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className=" h-screen bg-current">
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"SIGN UP /SIGN IN"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={emailHandler}
            />
            <TextField
              id="filled-basic"
              label="password"
              variant="filled"
              onChange={passwordHandler}
            />
          </DialogContentText>
          <DialogContentText>
            <Button
              variant="contained"
              sx={{ marginTop: "30px" }}
              onClick={submitUserLogin}
            >
              Login
            </Button>
          </DialogContentText>
          <div className="text-sm">
            <a
            
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              <Link to="/update">Forgot password?</Link>
            </a>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={submitUserInfos}>Register</Button>
          <Button onClick={handleClose}>
            <Link to="/">Close</Link>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
