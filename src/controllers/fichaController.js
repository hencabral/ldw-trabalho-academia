import Ficha from "../models/Ficha.js";

export const createFicha = async (req, res, next) => {
    const ficha = new Ficha(req.body);
    try {
        const createdFicha = await ficha.save();
        res.status(201).json(createdFicha);
    } catch (error) {
        next(error);
    }
};
export const updateFicha = async (req, res, next) => {
    try {
        const updatedFicha = await Ficha.findByIdAndUpdate(req.params.id, {
            $set:
                req.body
        }, { new: true });
        res.status(200).json(updatedFicha);
    } catch (error) {
        next(error);
    }
};
export const deleteFicha = async (req, res, next) => {
    try {
        await Ficha.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Ficha excluída com sucesso." });
    } catch (error) {
        next(error);
    }
};
export const getFicha = async (req, res, next) => {
    try {
        const ficha = await Ficha.findById(req.params.id);
        res.status(200).json(ficha);
    } catch (error) {
        next(error);
    }
};
export const getFichas = async (req, res, next) => {
    try {
        const fichas = await Ficha.find();
        res.status(200).json(fichas);
    } catch (error) {
        next(error);
    }
};