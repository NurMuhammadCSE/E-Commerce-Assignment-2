import express from "express";
import { ProductController } from "./products.controller";

const router = express.Router();
router.post("/products", ProductController.createProduct);
router.get("/products", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);
router.put("/:id", ProductController.updateProductById);
router.delete('/:id', ProductController.deleteProductById)

export const ProductsRoutes = router;
