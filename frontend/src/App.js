import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leiaute from "./pages/Leiaute";
import Principal from "./pages/Principal";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Ativos from "./pages/alunos/Ativos";

import Aluno from "./pages/alunos/Listagem";
import CadastroAluno from "./pages/alunos/Cadastro";
import AlteracaoAluno from "./pages/alunos/Alteracao";

import GrupoMuscular from "./pages/grupomuscular/Listagem";
import CadastroGrupoMuscular from "./pages/grupomuscular/Cadastro";
import AlteraGrupoMuscular from "./pages/grupomuscular/Alteracao";

import Instrutor from "./pages/instrutor/Listagem";
import CadastroInstrutor from "./pages/instrutor/Cadastro";
import AlteraInstrutor from "./pages/instrutor/Alteracao";

import TipoExercicio from "./pages/tipoExercicio/Listagem";
import CadastroTipoExercicio from "./pages/tipoExercicio/Cadastro";
import AlteraTipoExercicio from "./pages/tipoExercicio/Alteracao";

import Ficha from "./pages/fichas/Listagem";
import CadastroFicha from "./pages/fichas/Cadastro";
import AlteraFicha from "./pages/fichas/Alteracao";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Leiaute />}>
                        <Route index element={<Principal />} />
                        <Route path="alunos">
                            <Route index element={<Aluno />} />
                            <Route path="cadastrar" element={<CadastroAluno />} />
                            <Route path="alterar/:id" element={<AlteracaoAluno />} />
                        </Route>
                        <Route path="ativos" element={<Ativos />} />
                        <Route path="gruposmusculares">
                            <Route index element={<GrupoMuscular />} />
                            <Route path="cadastrar" element={<CadastroGrupoMuscular />} />
                            <Route path="alterar/:id" element={<AlteraGrupoMuscular />} />
                        </Route>
                        <Route path="instrutores">
                            <Route index element={<Instrutor />} />
                            <Route path="cadastrar" element={<CadastroInstrutor />} />
                            <Route path="alterar/:id" element={<AlteraInstrutor />} />
                        </Route>
                        <Route path="tiposexercicios">
                            <Route index element={<TipoExercicio />} />
                            <Route path="cadastrar" element={<CadastroTipoExercicio />} />
                            <Route path="alterar/:id" element={<AlteraTipoExercicio />} />
                        </Route>
                        <Route path="fichas">
                            <Route index element={<Ficha />} />
                            <Route path="cadastrar" element={<CadastroFicha />} />
                            <Route path="alterar/:id" element={<AlteraFicha />} />
                        </Route>
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;