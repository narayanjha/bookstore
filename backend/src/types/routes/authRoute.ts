import { Router } from "express";
import { register, login } from "../../modules/auth/controller/authController.ts";

const router = Router();

router.post("/register", register);
router.post("/login", login);

export default router;