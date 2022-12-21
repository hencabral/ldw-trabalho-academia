import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import TableInstrutor from "../../components/instrutor/TableInstrutor";
import { authHeader } from "../../services/authServices";

import "./Listagem.css";

const Listagem = () => {
    const [instrutors, setInstrutor] = useState([]);
    const [loading, setLoading] = useState(true);

    const carregarInstrutors = () => {
        axios
            .get("http://localhost:8080/api/instrutores", { headers: authHeader() })
            .then((response) => {
                setInstrutor(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        carregarInstrutors();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Instrutores</h1>
                <Link to="/instrutores/cadastrar" className="btn btn-primary">
                    Novo
                </Link>
            </div>
            <hr />
            {loading ? <Loading /> : <TableInstrutor instrutors={instrutors} setInstrutor={setInstrutor} />}
        </>
    );
};

export default Listagem;