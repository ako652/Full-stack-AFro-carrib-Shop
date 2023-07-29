
import { Link } from "react-router-dom";

import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const StyledBadge:any = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Nav() {
  const cartList=useSelector((state:RootState)=>state.cart.cart)
  return (
    <div className="md:flex justify-between bg-slate-950 p-4 content-center text-center text-white  relative">
      <div className=" flex w-24 justify-center rounded-full bg-lime-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        AFRO-CARRIB
      </div>
      <div className="m-2 md:flex justify-center content-center  gap-10 ">
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/menu">Menu</Link>
        </p>

        <p>
          <Link to="/contact"> Contact</Link>
        </p>

        <button className="m-2 md:flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <Link to="/login">
            <PersonAddAlt1Icon /> SIGN IN/REGISTER
          </Link>
        </button>
        <button className=" m-2 md:flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <Link to="/cart">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cartList.length} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            Cart
          </Link>
        </button>
      </div>
    </div>
  );
}
