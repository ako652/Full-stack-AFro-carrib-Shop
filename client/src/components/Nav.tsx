import React from "react";
import { Link } from "react-router-dom";

import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";



export default function Nav() {
 

  

  return (
    <div className="flex justify-between bg-slate-950 p-4 content-center text-center text-white">
      <div className="flex w-24 justify-center rounded-full bg-lime-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        AFRO-CARRIB
      </div>
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

        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <Link to="/login">
            <PersonAddAlt1Icon /> SIGN IN/REGISTER
          </Link>
        </button>
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <Link to="/cart">
            <AddShoppingCartIcon />
            CART
          </Link>
        </button>
      </div>
    </div>
  );
}
