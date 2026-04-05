import type { Request, Response } from "express";
import { OrderService } from "../service/orderService.ts";

declare global {
  namespace Express {
    interface Request {
      user?: { id: string };
    }
  }
}

const service = new OrderService();

export const createOrder = async (req: Request, res: Response) => {
  if (!req.user?.id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const order = await service.createOrder(req.body, req.user.id);
  res.json(order);
};