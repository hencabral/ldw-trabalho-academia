import express from "express";
import { createTipoExercicio, updateTipoExercicio, deleteTipoExercicio, getTipoExercicio, getTiposExercicios } from "../controllers/tipoExercicioController.js";
import { verificarAtivo, verificarToken } from "../utils/verificarToken.js";

const router = express.Router();

router.post("/", verificarAtivo, createTipoExercicio);
router.put("/:id", verificarAtivo, updateTipoExercicio);
router.delete("/:id", verificarAtivo, deleteTipoExercicio);
router.get("/:id", verificarToken, getTipoExercicio);
router.get("/", verificarToken, getTiposExercicios);

export default router;