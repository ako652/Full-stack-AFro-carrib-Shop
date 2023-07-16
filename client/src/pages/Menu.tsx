import React, { useEffect, useState } from "react";
import image1 from "../assets/download.jpg";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchProduct } from "../redux/thunk/product";
import ProductItem from "../components/ProductItem";

export default function Menu() {
  const products = useSelector((state: RootState) => state.product.products);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  console.log(products)

  return <div className="m-20 grid grid-cols-3">
    {products.map((item)=>{
      return (<ProductItem item={item} />);
    })}
  </div>;
}
