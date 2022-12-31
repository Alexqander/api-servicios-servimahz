import { Router } from "express";
import {
  createUser,
  updateUser,
  getUsers,
  getUser,
} from "../controllers/Users.controllers.js";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id");

export default router;
