import { Router } from "express";
import { addProductsElect } from "../controllers/Electrodomesticos.controllers.js";
import {
  createServicio,
  editServicio,
  findServiciosById,
} from "../controllers/Servicios.controllers.js";

const router = Router();

router.get("/");
router.get("/services/:id", findServiciosById);
router.get("/services/electrod/:id", addProductsElect);
router.post("/services", createServicio);
router.put("/services/:id", editServicio);
router.delete("/");

export default router;
