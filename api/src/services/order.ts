import { NotFoundError } from "../helpers/apiError";
import Order, { OrderDocument } from "../models/Order";

export const createOrder=async(order:OrderDocument):Promise<OrderDocument>=>{
   return await order.save()
}

export const getServiceOrder=async(userId:string):Promise<OrderDocument[]>=>{
   const foundOrder =await Order.find({userId:userId}).populate({
      path:'userId'
   })
   if(!foundOrder){
    throw new NotFoundError(`order with userId ${userId} not found`)
   }
   return foundOrder
}