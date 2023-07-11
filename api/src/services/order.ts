import { OrderDocument } from "../models/Order";

export const createOrder=async(order:OrderDocument):Promise<OrderDocument>=>{
   return await order.save()
}