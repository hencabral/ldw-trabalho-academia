import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import TableTipoExercicio from "../../components/exercicio/TabelaTipoExercicio";
import { authHeader } from "../../services/authServices";

import "./Listagem.css";

const Listagem = () => {
    const [tipoExercicios, setTipoExercicio] = useState([]);
    const [loading, setLoading] = useState(true);

    const carregarExercicios = () => {
        axios
            .get("http://localhost:8080/api/tiposexercicios", { headers: authHeader() })
            .then((response) => {
                setTipoExercicio(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        carregarExercicios();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Tipo Exercício</h1>
                <Link to="/tiposexercicios/cadastrar" className="btn btn-primary">
                    Novo
                </Link>
            </div>
            <hr />
            {loading ? <Loading /> : <TableTipoExercicio tipoExercicios={tipoExercicios} setTipoExercicio={setTipoExercicio} />}
        </>
    );
};

export default Listagem;