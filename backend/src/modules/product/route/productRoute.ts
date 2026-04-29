import { Router } from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controller/productController.ts";

const router = Router();

router.post("/add", createProduct);
router.put("/edit/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/", getProducts);

export default router;