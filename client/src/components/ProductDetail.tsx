import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useParams } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { fetchProductDetails } from "../redux/thunk/product";


export default function ProductDetail() {
  const productDetail = useSelector(
    (state: RootState) => state.product.productDetail
  );
  const result = useParams();
  const productId = result.id;

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetails(productId));
    }
  }, [productId, dispatch]);

  return (
    <div>
      {productDetail ? (
        <div className="h-screen flex justify-center content-center m-2 shadow-2xl">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={productDetail.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {productDetail.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {productDetail.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                shop now
              </Button>
            </CardActions>
          </Card>
        </div>
      ) : (
        <div>no data</div>
      )}
    </div>
  );
}
