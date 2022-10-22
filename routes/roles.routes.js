import { Router } from "express";
import { createRole } from "../controllers/Roles.controllers.js";

const router = Router();

router.get("/roles");
router.get("/roles/:id");
router.post("/roles", createRole);
router.put("/roles/:id");
router.delete("/roles/:id");

export default router;
