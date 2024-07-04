import { TProducts } from "./products.interface";
import Product from "./products.model";

const createMovie = async (payload: TProducts) => {
  const product = new Product(payload);
  const result = await product.save();
  return result;
};

const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

const getProductById = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProductById = async (
  id: string,
  updateData: Partial<TProducts>
) => {
  const result = await Product.findByIdAndUpdate(id, updateData, { new: true });
  return result;
};

export const ProductServices = {
  createMovie,
  getAllProducts,
  getProductById,
  updateProductById,
};
