import { Router } from "express";
import productController from "../controller/product.controller"; // Assuming the controller file is located in the parent directory of the current file

const productRouter = Router();

// Endpoint to get all products
productRouter.get("/", productController.getAll);

// Endpoint to delete a product by ID
productRouter.delete("/:id", productController.deleteById);

// Endpoint to insert a new product
productRouter.post("/", productController.insertProduct);

// Endpoint to update an existing product by ID
productRouter.put("/:id", productController.updateProduct);

export default productRouter;
