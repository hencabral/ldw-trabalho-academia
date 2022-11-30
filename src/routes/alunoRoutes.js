import express from "express";
import { createAluno, updateAluno, deleteAluno, getAluno, getAlunos } from "../controllers/alunoController.js";
import { verificarAdmin, verificarToken, verificarUsuario } from "../utils/verificarToken.js";

const router = express.Router();

router.post("/", createAluno);
router.put("/:id", verificarUsuario, updateAluno);
router.delete("/:id", verificarAdmin, deleteAluno);
router.get("/:id", verificarToken, getAluno);
router.get("/", verificarToken, getAlunos);

export default router;