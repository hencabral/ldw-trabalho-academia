import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import ConfirmModal from "../utils/ConfirmModal";
import { authHeader } from "../../services/authServices";

const TableFicha = ({ fichas, setFichas }) => {
    const [fichaExcluir, setFichaExcluir] = useState(null);
    const [modal, setModal] = useState(undefined);

    function confirmarExclusao(ficha) {
        setFichaExcluir(ficha);
        const confirmModal = new bootstrap.Modal("#confirmModal", {});
        setModal(confirmModal);
        confirmModal.show();
    }

    function excluirFicha() {
        axios
            .delete(`http://localhost:8080/api/fichas/${fichaExcluir._id}`, { headers: authHeader() })
            .then((data) => {
                const fichasAtualizadas = fichas.filter((ficha) => ficha._id !== fichaExcluir._id);
                setFichas(fichasAtualizadas);
                modal.hide();
                const informModal = new bootstrap.Modal("#informModal", {});
                informModal.show();
            })
            .catch((error) => {
                console.log(error);
                modal.hide();
            });
    }

    return fichas.length === 0 ? (
        <div className="alert alert-info">Nenhuma Ficha cadastrada</div>
    ) : (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Cod Ficha</th>
                        <th>Data Inicio</th>
                    </tr>
                </thead>
                <tbody>
                    {fichas.map((ficha) => (
                        <tr key={ficha._id}>
                            <td>{ficha._id}</td>
                            <td>{ficha.dataInicio}</td>
                            <td>
                                <Link className="btn btn-sm btn-warning me-1" to={`/fichas/alterar/${ficha._id}`}>
                                    <i className="bi bi-pen"></i>
                                </Link>
                                <button className="btn btn-sm btn-danger" onClick={() => confirmarExclusao(ficha)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ConfirmModal question={`Deseja realmente excluir a Ficha ${fichaExcluir?.nome}?`} action={excluirFicha} />
        </>
    );
};

export default TableFicha;