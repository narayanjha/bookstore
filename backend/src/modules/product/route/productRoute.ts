import { Router } from "express";
import { createProduct, getProducts } from "../controller/productController.ts";

const router = Router();

router.post("/add", createProduct);
router.get("/", getProducts);

export default router;