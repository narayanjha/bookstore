import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI as string,
  JWT_SECRET: process.env.JWT_SECRET as string,
  RAZORPAY_KEY: process.env.RAZORPAY_KEY as string,
  RAZORPAY_SECRET: process.env.RAZORPAY_SECRET as string,
  IMAGE_PATH: process.env.IMAGE_PATH || "public/assets/images"
};