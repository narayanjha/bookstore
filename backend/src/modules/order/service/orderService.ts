import { OrderModel } from "../model/Order.ts";

export class OrderService {
  async createOrder(data: any, userId: string) {
    return OrderModel.create({
      ...data,
      user: userId
    });
  }
}