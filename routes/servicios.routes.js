import { Router } from "express";
import {
  createServicio,
  updateServicio,
} from "../controllers/Servicios.controllers.js";

const router = Router();

router.get("/");
router.get("/");
router.post("/services", createServicio);
router.put("/services/:id", updateServicio);
router.delete("/");

export default router;
