import express from "express";
import { createInstrutor, updateInstrutor, deleteInstrutor, getInstrutor, getInstrutores } from "../controllers/instrutorController.js";
import { verificarAdmin, verificarToken } from "../utils/verificarToken.js";

const router = express.Router();

router.post("/", verificarAdmin, createInstrutor);
router.put("/:id", verificarAdmin, updateInstrutor);
router.delete("/:id", verificarAdmin, deleteInstrutor);
router.get("/:id", verificarToken, getInstrutor);
router.get("/", verificarToken, getInstrutores);

export default router;