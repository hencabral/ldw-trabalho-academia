import express from "express";
import { login } from "../controllers/authController.js";
import { verificarAtivo, verificarToken, verificarUsuario } from "../utils/verificarToken.js";

const router = express.Router();

router.post("/login", login);

router.get("/verificartoken", verificarToken, (req, res) => {
    res.status(200).json({ message: "Você está autenticado." });
});

router.get("/verificarusuario/:id", verificarUsuario, (req, res) => {
    res.status(200).json({ message: "O id passado é do usuário logado ou de um administrador." });
});

router.get("/verificarativo/:id", verificarAtivo, (req, res) => {
    res.status(200).json({ message: "O id passado é de um usuário ativo." });
});

export default router;
