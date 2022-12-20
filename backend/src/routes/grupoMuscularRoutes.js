import express from "express";
import { createGrupoMuscular, updateGrupoMuscular, deleteGrupoMuscular, getGrupoMuscular, getGruposMusculares } from "../controllers/grupoMuscularController.js";
import { verificarAtivo, verificarToken } from "../utils/verificarToken.js";

const router = express.Router();

router.post("/", verificarAtivo, createGrupoMuscular);
router.put("/:id", verificarAtivo, updateGrupoMuscular);
router.delete("/:id", verificarAtivo, deleteGrupoMuscular);
router.get("/:id", verificarToken, getGrupoMuscular);
router.get("/", verificarToken, getGruposMusculares);

export default router;