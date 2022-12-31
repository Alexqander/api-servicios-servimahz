import { Router } from "express";
import { createRole, getRoles } from "../controllers/Roles.controllers.js";

const router = Router();

router.get("/roles", getRoles);
router.get("/roles,/:id");
router.post("/roles", createRole);
router.put("/roles/:id");
router.delete("/roles/:id");

export default router;
