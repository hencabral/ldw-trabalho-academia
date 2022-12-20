import Aluno from "../models/Aluno.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const login = async (req, res, next) => {
    try {
        const aluno = await Aluno.findOne({ email: req.body.usuario });
        if (!aluno) {
            return next(createError(404, "Aluno não encontrado."));
        }
        const senhaValida = await bcrypt.compare(req.body.senha, aluno.senha);
        if (!senhaValida) {
            return next(createError(401, "Senha inválida."));
        }
        const { _id, email, nome, ...dados } = aluno._doc;
        const accessToken = jwt.sign({ id: aluno._id, ativo: aluno.ativo }, process.env.JWT_SECRET, { expiresIn: "1h" });
        //res.cookie("token", accessToken, { httpOnly: false }).status(200).json(dados);
        res.status(200).json({ id: _id, email, nome, ativo: aluno.ativo, accessToken });
    } catch (error) {
        next(error);
    }
};