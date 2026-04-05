import Razorpay from "razorpay";
import { ENV } from "../../config/env.ts";

const razorpay = new Razorpay({
  key_id: ENV.RAZORPAY_KEY,
  key_secret: ENV.RAZORPAY_SECRET
});

export class PaymentService {
  async createOrder(amount: number) {
    return razorpay.orders.create({
      amount: amount * 100,
      currency: "INR"
    });
  }
}