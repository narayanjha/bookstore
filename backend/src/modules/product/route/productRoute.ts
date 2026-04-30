import { Router, Request, Response, NextFunction } from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controller/productController.ts";
import { upload } from "../../../shared/middleware/upload.ts";

const router = Router();
console.log("Product route loaded with upload middleware"); // Debug log
const handleOptionalUpload = (req: Request, res: Response, next: NextFunction) => {
  console.log("Product /add content-type:", req.headers["content-type"]); // Debug log
  if (req.is("multipart/form-data")) {
    return upload.single("image")(req, res, (err) => {
      if (err) return next(err);
      if (req.file) return next();
      upload.single("files")(req, res, next);
    });
  }
  next();
};

router.post("/add", handleOptionalUpload, createProduct);
router.put("/edit/:id", handleOptionalUpload, updateProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/", getProducts);

export default router;