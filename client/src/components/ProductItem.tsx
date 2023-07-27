import React from 'react'
import {Link} from 'react-router-dom'
import { Product ,Cart} from '../type/type'
import { useDispatch, useSelector  } from 'react-redux'
import { cartAction } from '../redux/slice/cart'
import { AppDispatch, RootState } from '../redux/store'
import { ProductAction } from '../redux/slice/product'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";


type Prop={
item:Product
}

export default function ProductItem({item}:Prop) {
  const dispatch = useDispatch<AppDispatch>();

   
 
  function addToCart(item: Product) {
   dispatch(cartAction.addtoCart(item))
  }
  return (
    <div key={item._id} className="shadow-2xl">
      <Card sx={{ maxWidth: 345 }}>
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
