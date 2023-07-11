
// product controller here
import { Response, Request, NextFunction} from "express"
import {
  getAllProducts,
  getProductsById,
  createProduct,
} from "../services/products";
import product from "../models/Products"


export const getProducts= async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const productList= await getAllProducts()
        res.status(200).json(productList)
    } catch (error) {
        res.status(500);
        next(error);
    }

}
export const creatProductData= async(req:Request, res:Response, next:NextFunction)=>{
try {
     const productData = new product({
       title: req.body.title,
       price: req.body.price,
       image: req.body.image,
       description: req.body.description,
     });
    const products = await createProduct(productData);
     res.status(200).json(products);
    
} catch (error) {
     res.status(500);
     next(error);
}
   

}
export const getProductId=async(req:Request, res:Response, next:NextFunction)=>{
  
  try {
    const productId = req.params.id;
    const product=await getProductsById(productId)
    res.status(200).json(product)

  } catch (error) {
     res.status(500);
     next(error);
  }
}
