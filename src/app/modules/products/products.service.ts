import { TProducts } from "./products.interface";
import Product from "./products.model";

const createMovie = async (payload: TProducts) => {
  const product = new Product(payload);
  const result = await product.save();
  return result;
};

const getAllProducts = async (searchTerm?: string) => {
  // Search Term Implementation
  //   const { searchTerm } = query;
  let filter = {};
  if (searchTerm) {
    // const regex = new RegExp(searchTerm as string, "i");
    filter = {
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
        {
          price: { $regex: searchTerm, $options: "i" },
        },
      ],
    };
  }

  const result = await Product.find(filter);
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

const deleteProductById = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

export const ProductServices = {
  createMovie,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
