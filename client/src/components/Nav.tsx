import React from "react";
import { Link } from "react-router-dom";

import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

type Prop = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Nav({setOpen}:Prop) {
   const handleClickOpen = () => {
     setOpen(true);
   };

  

  return (
    <div className="flex justify-around bg-slate-950 p-4 content-center text-center text-white">
      <div> AFRO-CARRIB</div>
      <div className="flex gap-10">
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/menu">Menu</Link>
        </p>

        <p>
          <Link to="/contact"> Contact</Link>
        </p>

        <button onClick={handleClickOpen} className="bg-red-400 rounded-lg">
          <Link to="/login">
            <PersonAddAlt1Icon /> SIGN IN/REGISTER
          </Link>
        </button>
        <button className="bg-red-400 rounded-lg">
          <Link to="/cart">
            <AddShoppingCartIcon />
            CART
          </Link>
        </button>
      </div>
    </div>
  );
}
