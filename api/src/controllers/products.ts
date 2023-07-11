
// product controller here
import { Response, Request, NextFunction} from "express"
import { getAllProducts, getProductsById } from "../services/products"
import Product from "../models/Products"


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
     const productData = new Product({
       title: req.body.title,
       price: req.body.price,
       image: req.body.image,
       description: req.body.description,
     });

     res.status(200).json(productData);
    
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
