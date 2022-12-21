import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import TableGrupoMuscular from "../../components/grupomuscular/TableGrupoMuscular";
import { authHeader } from "../../services/authServices";

import "./Listagem.css";

const Listagem = () => {
    const [grupos, setGrupos] = useState([]);
    const [loading, setLoading] = useState(true);

    const carregarGrupoMuscular = () => {
        axios
            .get("http://localhost:8080/api/gruposmusculares", { headers: authHeader() })
            .then((response) => {
                setGrupos(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        carregarGrupoMuscular();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Grupos Musculares</h1>
                <Link to="/gruposmusculares/cadastrar" className="btn btn-primary">
                    Novo
                </Link>
            </div>
            <hr />
            {loading ? <Loading /> : <TableGrupoMuscular grupos={grupos} setGrupos={setGrupos} />}
        </>
    );
};

export default Listagem;