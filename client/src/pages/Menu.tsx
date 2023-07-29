import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchProduct } from "../redux/thunk/product";
import ProductItem from "../components/ProductItem";
import {motion as m} from 'framer-motion'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Menu() {
  const products = useSelector((state: RootState) => state.product.products);
  const IsLoading=useSelector((state:RootState)=>state.product.IsLoading)


  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  console.log(products);
  

  return (
    <m.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-gray-900 absolute  bg-orange-100  top-30 left-0  "
    >
      {!IsLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", margin: "50px", }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className="m-6 grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {products.map((item) => {
            return <ProductItem item={item} key={item._id} />;
          })}
        </div>
      )}
    </m.div>
  );
}
