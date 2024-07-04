import { Request, Response } from "express";
import { ProductServices } from "./products.service";

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductServices.createMovie(productData);

  res.json({
    success: true,
    message: "Product Create Successfully!",
    data: result,
  });
};


const getAllProducts = async (req: Request, res: Response) => {
  const searchTerm = req.query.searchTerm as string | undefined;
  try {
    // console.log(searchTerm);
    const result = await ProductServices.getAllProducts(searchTerm);
    // console.log(result);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Could not fetched ${searchTerm} Products`,
      error,
    });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const result = await ProductServices.getProductById(id);
    if (result) {
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not fetched Products",
      error,
    });
  }
};

const updateProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    // console.log(updateData)
    // console.log(id);
    const result = await ProductServices.updateProductById(id, updateData);
    if (result) {
      res.status(200).json({
        success: true,
        message: "Products Updated successfully!",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not Updated Products",
      error,
    });
  }
};

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductServices.deleteProductById(id);
    if (result) {
      res.status(200).json({
        success: true,
        message: "Deleted Product Successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not Deleted Products",
      error,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
