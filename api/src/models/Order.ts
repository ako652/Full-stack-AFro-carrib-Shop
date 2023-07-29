import mongoose, { Document } from "mongoose";
import { ProductDocument } from "./Products";

export type ProductOrderDocument = ProductDocument & {
  quantity: number;
};
export type OrderDocument = Document & {
  date: Date;
  productList: ProductOrderDocument[];
  userId: string;
};

const ProductOrderSchema = new mongoose.Schema({
  title: {
    type: String,
    requried: true,
  },
  price: {
    type: Number,
    requried: true,
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  image: {
    type: String,
  },
});

const OrderSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  productList: [ProductOrderSchema],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  total: {
    type: Number,
  },
});

export default mongoose.model<OrderDocument>("Order", OrderSchema);
