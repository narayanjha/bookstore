import type { Request, Response } from "express";
import { PaymentService } from "../service/paymentService.ts";

const service = new PaymentService();

export const createPayment = async (req: Request, res: Response) => {
  const order = await service.createOrder(req.body.amount);
  res.json(order);
};