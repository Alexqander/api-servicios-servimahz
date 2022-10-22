import { Router } from "express";
import { createUser, updateUser } from "../controllers/Users.controllers.js";

const router = Router();

router.get("/users");
router.get("/users/:id");
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id");

export default router;
