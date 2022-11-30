import express from "express";
import { createGrupoMuscular, updateGrupoMuscular, deleteGrupoMuscular, getGrupoMuscular, getGruposMusculares } from "../controllers/grupoMuscularController.js";
import { verificarAdmin, verificarToken } from "../utils/verificarToken.js";

const router = express.Router();

router.post("/", verificarAdmin, createGrupoMuscular);
router.put("/:id", verificarAdmin, updateGrupoMuscular);
router.delete("/:id", verificarAdmin, deleteGrupoMuscular);
router.get("/:id", verificarToken, getGrupoMuscular);
router.get("/", verificarToken, getGruposMusculares);

export default router;