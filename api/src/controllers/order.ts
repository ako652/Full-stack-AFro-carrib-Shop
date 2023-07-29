import { NextFunction, Request, Response } from "express";
import Order from "../models/Order";

import { createOrder, getServiceOrder } from "../services/order";

export const createOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productOrder = new Order({
      userId: req.params.id,
      productList: req.body.productList,
    });
    const orders = await createOrder(productOrder);
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

export const getOrderbyId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const OrderId = req.params.orderId;
    const newOrderList = await getServiceOrder(OrderId);
    res.status(200).json(newOrderList);
  } catch (error) {
    next(error);
  }
};
