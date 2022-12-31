import { Router } from "express";
import { generateJwt } from "../controllers/Users.controllers.js";

const router = Router();

router.post("/login", loginUser);
router.post("/auth", createUser);

export default router;
