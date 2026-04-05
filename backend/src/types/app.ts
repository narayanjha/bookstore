import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoute.ts";
import productRoutes from "../modules/product/route/productRoute.ts";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

export default app;