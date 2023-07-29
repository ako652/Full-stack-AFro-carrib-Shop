import Products, { ProductDocument } from "../models/Products";
import { NotFoundError } from "../helpers/apiError";

export const getAllProducts = async (): Promise<ProductDocument[]> => {
  return await Products.find();
};
export const createProduct = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return await product.save();
};

export const getProductsById = async (
  productId: string
): Promise<ProductDocument> => {
  const foundProduct = await Products.findById(productId);
  if (!foundProduct) {
    throw new NotFoundError(`product ${productId} not found`);
  }
  return foundProduct;
};
