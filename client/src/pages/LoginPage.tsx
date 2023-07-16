import * as React from "react";
import {Link} from 'react-router-dom'
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import TextField from "@mui/material/TextField";

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

export default function LoginPage({open,setOpen}:Props) {
   const handleClose = () => {
     setOpen(false);
   };
 
  return (
    <div>
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
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="filled-basic" label="password" variant="filled" />
          </DialogContentText>
          <DialogContentText>
            <Button variant="contained" sx={{ marginTop: "30px" }}>
              Login
            </Button>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Register</Button>
          <Button onClick={handleClose}>
            <Link to="/" >Close</Link>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
