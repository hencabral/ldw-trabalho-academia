import * as yup from "yup";
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import FormInput from "../components/utils/FormInput";
import FormCheckbox from "../components/utils/FormCheckbox";
import { isAuthenticated, getUser, authHeader, login } from "../services/authServices";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "senha":
                setSenha(value);
                break;
            default:
                break;
        }
    }

     async function handleSubmit(event) {
        event.preventDefault();
        login(email, senha)
        
     }

    return (
        <>
            <div className="container my-5" style={{ minWidth: "480px" }}>
                <div className="col-6 col-md-4 col-xl-3 mx-auto">
                    <p className="text-center" style={{ fontSize: "150px" }}>
                        🏋
                    </p>
                    <h1 className="text-center display-3">Academia</h1>
                    <hr />
                    <div className="d-flex justify-content-center align-items-center">
                        <h2>Login</h2>
                    </div>

                    <form onSubmit={handleSubmit} noValidate autoComplete="on">
                        <div>
                            <FormInput type="email" field="email" placeholder="fulano@email.com" label="E-mail" onChange={handleChange} value={email} error={errors?.email} />
                        </div>
                        <div>
                            <FormInput type="password" field="senha" placeholder="Senha" label="Senha" onChange={handleChange} value={senha} error={errors?.senha} />
                        </div>
                        <div>
                        </div>
                        <div className="mt-3">
                            <button type="submit" className="btn btn-dark btn-lg w-100">
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
