import { Request, Response } from "express";
import { ProductService } from "../service/productService.ts";
import { pool } from "../../../config/db.ts";

export const createProduct = async (req: Request, res: Response) => {
  try {
    console.log("Creating product with data:", req.body); // Debug log
    const { title, price, category, condition } = req.body;

    // TEMP seller (replace later with auth)
    const sellerId = "test-user-id";

    const query = `
      INSERT INTO products (title, price, category, condition, seller_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    const values = [title, price, category, condition, sellerId];
    console.log("Executing query:", query, "with values:", values); // Debug log
    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// declare global {
//   namespace Express {
//     interface Request {
//       user?: { id: string };
//     }
//   }
// }

// const service = new ProductService();

// export const createProduct = async (req: Request, res: Response) => {
//     console.log("Creating product with data:", req.body, "for user:", req.user); // Debug log
//   // const product = await service.createProduct(req.body, req.user!.id);
//   // console.log("Created product:", product); // Debug log
//   // res.json(product);
// };

export const getProducts = async (_: Request, res: Response) => {
  try {
    const result = await pool.query(
      "SELECT * FROM products ORDER BY created_at DESC"
    );

    res.json(result.rows);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, price, category, condition } = req.body;

    const query = `
      UPDATE products
      SET title = $1,
          price = $2,
          category = $3,
          condition = $4
      WHERE id = $5
      RETURNING *;
    `;

    const values = [title, price, category, condition, id];

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(result.rows[0]);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      message: "Product deleted successfully",
      data: result.rows[0]
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};