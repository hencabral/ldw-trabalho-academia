import express from "express";
import { createInstrutor, updateInstrutor, deleteInstrutor, getInstrutor, getInstrutores } from "../controllers/instrutorController.js";
import { verificarAtivo, verificarToken } from "../utils/verificarToken.js";

const router = express.Router();

router.post("/", verificarAtivo, createInstrutor);
router.put("/:id", verificarAtivo, updateInstrutor);
router.delete("/:id", verificarAtivo, deleteInstrutor);
router.get("/:id", verificarToken, getInstrutor);
router.get("/", verificarToken, getInstrutores);

export default router;