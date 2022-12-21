import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import ConfirmModal from "../utils/ConfirmModal";
import { authHeader } from "../../services/authServices";

const TableGrupoMuscular = ({ grupos, setGrupos }) => {
    const [grupoExcluir, setGrupoExcluir] = useState(null);
    const [modal, setModal] = useState(undefined);

    function confirmarExclusao(grupo) {
        setGrupoExcluir(grupo);
        const confirmModal = new bootstrap.Modal("#confirmModal", {});
        setModal(confirmModal);
        confirmModal.show();
    }

    function excluirGrupoMuscular() {
        axios
            .delete(`http://localhost:8080/api/gruposmusculares/${grupoExcluir._id}`, { headers: authHeader() })
            .then((data) => {
                const gruposAtualizados = grupos.filter((grupo) => grupo._id !== grupoExcluir._id);
                setGrupos(gruposAtualizados);
                modal.hide();
                const informModal = new bootstrap.Modal("#informModal", {});
                informModal.show();
            })
            .catch((error) => {
                console.log(error);
                modal.hide();
            });
    }

    return grupos.length === 0 ? (
        <div className="alert alert-info">Nenhum grupo muscular cadastrado</div>
    ) : (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {grupos.map((grupo) => (
                        <tr key={grupo._id}>
                            <td>{grupo.nome}</td>
                            <td>
                                <Link className="btn btn-sm btn-warning me-1" to={`/gruposmusculares/alterar/${grupo._id}`}>
                                    <i className="bi bi-pen"></i>
                                </Link>
                                <button className="btn btn-sm btn-danger" onClick={() => confirmarExclusao(grupo)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ConfirmModal question={`Deseja realmente excluir o grupo muscular ${grupoExcluir?.nome}?`} action={excluirGrupoMuscular} />
        </>
    );
};

export default TableGrupoMuscular;