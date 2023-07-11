import { NextFunction, Request, Response } from "express";

import order from "../models/Order";
import { createOrder } from "../services/order";

export const createOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productOrder = new order({
      userId: req.params.id,
      productList: req.body.productList,
    });
    const orders = await createOrder(productOrder);
  } catch (error) {
    next(error);
  }
};
