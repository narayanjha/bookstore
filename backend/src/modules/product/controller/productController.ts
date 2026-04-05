import { Request, Response } from "express";
import { ProductService } from "../service/productService.ts";

declare global {
  namespace Express {
    interface Request {
      user?: { id: string };
    }
  }
}

const service = new ProductService();

export const createProduct = async (req: Request, res: Response) => {
    console.log("Creating product with data:", req.body, "for user:", req.user); // Debug log
  const product = await service.createProduct(req.body, req.user!.id);
  console.log("Created product:", product); // Debug log
  res.json(product);
};

export const getProducts = async (_: Request, res: Response) => {
  const products = await service.getProducts();
  console.log("Fetched products:", products); // Debug log
  res.json(products);
};