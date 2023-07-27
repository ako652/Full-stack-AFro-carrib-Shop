import mongoose, { Document } from "mongoose";

export type ProductDocument = Document & {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const ProductSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
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
  image: {
    type: String,
  },
});

export default mongoose.model<ProductDocument>("Products", ProductSchema);
