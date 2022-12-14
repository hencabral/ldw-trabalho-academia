import express from "express"
import dotenv from "dotenv"
import connectDatabase from './config/db.js'
import alunoRoutes from "./routes/alunoRoutes.js"
import instrutorRoutes from "./routes/instrutorRoutes.js"
import grupoMuscularRoutes from "./routes/grupoMuscularRoutes.js"
import tipoExercicioRoutes from "./routes/tipoExercicioRoutes.js"
import fichaRoutes from "./routes/fichaRoutes.js"


import { errorHandling } from "./utils/error.js"

const app = express()
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(errorHandling)
app.use("/api/alunos", alunoRoutes)
app.use("/api/instrutores", instrutorRoutes)
app.use("/api/gruposmusculares", grupoMuscularRoutes)
app.use("/api/tiposexercicios", tipoExercicioRoutes)
app.use("/api/fichas", fichaRoutes)

app.listen(8080, () => {
    connectDatabase()
    console.log("Servidor rodando na porta 8080.")
});