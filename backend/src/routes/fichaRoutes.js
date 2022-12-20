import express from "express";
import { createFicha, updateFicha, deleteFicha, getFicha, getFichas } from "../controllers/fichaController.js";
import { verificarAtivo, verificarToken } from "../utils/verificarToken.js";

const router = express.Router();

router.post("/", verificarAtivo, createFicha);
router.put("/:id", verificarAtivo, updateFicha);
router.delete("/:id", verificarAtivo, deleteFicha);
router.get("/:id", verificarToken, getFicha);
router.get("/", verificarToken, getFichas);

export default router;