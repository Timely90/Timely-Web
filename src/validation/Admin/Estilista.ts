import { FormEvent } from "react";
import axios from "axios";
import { mostrarMensaje } from "../../components/toast";

const api = "https://timely-backend.vercel.app";
// const api = import.meta.env.VITE_APP_API_URL;

export const handleSubmitEst = async (
    event: FormEvent,
    id: number,
    name: string,
    email: string,
    rol: string,
    password: string,
    isVerified: boolean,
    setId: React.Dispatch<React.SetStateAction<number>>,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setRol: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setisVerify: React.Dispatch<React.SetStateAction<boolean>>,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
    event.preventDefault();
    const MensajeErrUsuario = document.getElementById("MensajeErrUsuario");
    const MensajeActUsuario = document.getElementById("MensajeActUsuario");

    if (name === "") {
        mostrarMensaje("Ingrese su nombre", MensajeErrUsuario);
        return false;
    }

    if (email === "") {
        mostrarMensaje("Ingrese su correo", MensajeErrUsuario);
        return false;
    }

    if (id === 0) {
        if (password === "") {
            mostrarMensaje("Ingrese su contraseña", MensajeErrUsuario);
            return false;
        }
    }

    function resetForm() {
        setId(0);
        setName("");
        setEmail("");
        setPassword("");
        setRol("estilista");
        setisVerify(false);
        setIsOpen(false);
    }

    try {
        let responseRegister;
        if (id === 0) {
            responseRegister = await axios.post(`${api}/auth/register`, { name, email, rol, password, isVerified });
        } else {
            responseRegister = await axios.patch(`${api}/auth/update`, { id, name, email });
        }
        const mensaje = responseRegister.data.message;
        mostrarMensaje(mensaje, MensajeActUsuario);
        resetForm();
        window.location.reload();
        return true;
    } catch (error:any) {
        const message = error.response?.data.message;
        mostrarMensaje(message, MensajeErrUsuario);
        resetForm();
        return false;
    }
    
};

export async function obtenerUsers() {
    try {
        const response = await axios.get(`${api}/auth/users`);
        return response.data;
    } catch (error) {
        throw error;
    }
}