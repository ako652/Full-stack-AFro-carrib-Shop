import mongoose, { Document } from "mongoose";

export type ProductOrderDocument = Document & {
  title: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
};

const ProductOrderSchema = new mongoose.Schema({
  title: {
    type: String,
    requried: true,
    unique: true,
  },
  price: {
    type: Number,
    requried: true,
    unique: true,
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

export type OrderDocument = Document & {
  date: Date;
  productList: ProductOrderDocument[];
  userId: string;
};
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
});

export default mongoose.model<OrderDocument>("Order", OrderSchema);
