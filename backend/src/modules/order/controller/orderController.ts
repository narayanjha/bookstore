import { Request, Response } from "express";
import { pool } from "../../../config/db.ts";

export const addToCart = async (req: Request, res: Response) => {
  try {
    const { product_id, quantity } = req.body;

    // 👇 replace later with auth
    const userId = req.body.user_id || "test-user";

    // 🔍 check if already exists
    const existing = await pool.query(
      "SELECT * FROM cart WHERE user_id=$1 AND product_id=$2",
      [userId, product_id]
    );

    let result;

    if (existing.rows.length > 0) {
      // 🔁 update quantity
      result = await pool.query(
        "UPDATE cart SET quantity = quantity + $1 WHERE user_id=$2 AND product_id=$3 RETURNING *",
        [quantity || 1, userId, product_id]
      );
    } else {
      // ➕ insert new
      result = await pool.query(
        "INSERT INTO cart (user_id, product_id, quantity) VALUES ($1,$2,$3) RETURNING *",
        [userId, product_id, quantity || 1]
      );
    }

    res.json(result.rows[0]);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getCart = async (req: Request, res: Response) => {
  const userId = req.query.user_id;
  if (!userId) {
    return res.status(400).json({ error: "Missing user_id query parameter" });
  }
  const result = await pool.query(
    `SELECT c.*, p.title, p.price, p.image_url 
     FROM cart c
     JOIN products p ON c.product_id = p.id
     WHERE c.user_id = $1`,
    [userId]
  );

  res.json(result.rows);
};

export const removeFromCart = async (req: Request, res: Response) => {
  const { id } = req.params;

  await pool.query("DELETE FROM cart WHERE id=$1", [id]);

  res.json({ message: "Removed from cart" });
};

export const updateQuantity = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { quantity } = req.body;

  const result = await pool.query(
    "UPDATE cart SET quantity=$1 WHERE id=$2 RETURNING *",
    [quantity, id]
  );

  res.json(result.rows[0]);
};

export const getCartByUser = async (req: Request, res: Response) => {
  try {
    // 👇 from query or later from auth
    const userId = req.query.user_id as string;

    if (!userId) {
      return res.status(400).json({ message: "user_id is required" });
    }

    const query = `
      SELECT 
        c.id AS cart_id,
        c.quantity,
        c.created_at,
        p.id AS product_id,
        p.title,
        p.price,
        p.category,
        p.condition,
        p.image_url
      FROM cart c
      JOIN products p ON c.product_id = p.id
      WHERE c.user_id = $1
      ORDER BY c.created_at DESC;
    `;

    const result = await pool.query(query, [userId]);

    res.json({
      count: result.rows.length,
      items: result.rows
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};