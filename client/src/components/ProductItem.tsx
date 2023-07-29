import { Link } from "react-router-dom";
import { Product } from "../type/type";
import { useDispatch } from "react-redux";
import { cartAction } from "../redux/slice/cart";
import { AppDispatch } from "../redux/store";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

type Prop = {
  item: Product;
};

export default function ProductItem({ item }: Prop) {
  const dispatch = useDispatch<AppDispatch>();

  function addToCart(item: Product) {
    dispatch(cartAction.addtoCart(item));
  }
  return (
    <div key={item._id}>
      <Card className="shadow-2xl rounded-md border-1  border-gray-100 ">
        <CardActionArea>
          <Link to={`/menu/${item._id}`}>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt="green iguana"
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              £{item.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <button
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => addToCart(item)}
          >
            shop now
          </button>
        </CardActions>
      </Card>
    </div>
  );
}
