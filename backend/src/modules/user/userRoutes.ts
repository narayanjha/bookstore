import { Router, Request, Response, NextFunction } from "express";
import {changePassword, getUser,updateUser} from "./userController";
import {upload} from "../../shared/middleware/upload.ts";

const router = Router();

const handleOptionalUpload = (req: Request, res: Response, next: NextFunction) => {
  console.log("User profile image /add content-type:", req.headers["content-type"]); // Debug log
  if (req.is("multipart/form-data")) {
    return upload.single("profile_image")(req, res, (err) => {
      if (err) return next(err);
      if (req.file) return next();
      upload.single("files")(req, res, next);
    });
  }
  next();
};

// GET USER
router.get("/:id", getUser);

// UPDATE USER
router.put("/:id",handleOptionalUpload,updateUser);

// CHANGE PASSWORD
router.put("/changepassword/:id",changePassword);

export default router;