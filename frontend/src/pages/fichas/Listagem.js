import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import TableFichas from "../../components/ficha/TableFicha";
import { authHeader } from "../../services/authServices";

import "./Listagem.css";

const Listagem = () => {
    const [fichas, setFichas] = useState([]);
    const [loading, setLoading] = useState(true);

    const carregarFichas = () => {
        axios
            .get("http://localhost:8080/api/fichas", { headers: authHeader() })
            .then((response) => {
                setFichas(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        carregarFichas();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Fichas</h1>
                <Link to="/fichas/cadastrar" className="btn btn-primary">
                    Novo
                </Link>
            </div>
            <hr />
            {loading ? <Loading /> : <TableFichas fichas={fichas} setFichas={setFichas} />}
        </>
    );
};

export default Listagem;