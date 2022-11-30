import express from "express";
import { createTipoExercicio, updateTipoExercicio, deleteTipoExercicio, getTipoExercicio, getTiposExercicios } from "../controllers/tipoExercicioController.js";
import { verificarAdmin, verificarToken } from "../utils/verificarToken.js";

const router = express.Router();

router.post("/", verificarAdmin, createTipoExercicio);
router.put("/:id", verificarAdmin, updateTipoExercicio);
router.delete("/:id", verificarAdmin, deleteTipoExercicio);
router.get("/:id", verificarToken, getTipoExercicio);
router.get("/", verificarToken, getTiposExercicios);

export default router;