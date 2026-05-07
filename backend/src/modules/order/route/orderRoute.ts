import { Router } from "express";
import { addToCart, getCart, getCartByUser, removeFromCart, updateQuantity } from "../controller/orderController.ts";

const router = Router();

router.post("/add", addToCart);
router.get("/list", getCart);
router.delete("/delete/:id", removeFromCart);
router.put("/edit/:id", updateQuantity);
router.get("/user", getCartByUser);

export default router;