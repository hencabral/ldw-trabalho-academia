import Aluno from "../models/Aluno.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const login = async (req, res, next) => {
    try {
        const aluno = await Aluno.findOne({ email: req.body.email });
        if (!aluno) { return next(createError(404, "Aluno não encontrado.")); }
        const senhaValida = await req.body.senha === aluno.senha
        if (!senhaValida) { return next(createError(401, "Senha inválida.")); }
        const { senha, ...dados } = aluno._doc;
        const accessToken = jwt.sign({ id: aluno._id, admin: aluno.admin }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.cookie("accessToken", accessToken, { httpOnly: true }).status(200).json(dados);
    } catch (error) {
        next(error);
    }
};