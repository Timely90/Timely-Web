import axios from "axios";
import { FormEvent } from "react";
import { mostrarMensaje } from "../components/toast";

const api = "https://timely-backend-rouge.vercel.app";

export async function obtenerUsersEstilista() {
    try {
        const response = await axios.get(`${api}/auth/estilista`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function obtenerUsersEmpleado() {
    try {
        const response = await axios.get(`${api}/auth/empleado`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function obtenerUsersId() {
    const userSession = localStorage.getItem("USER_SESSION");
    if (userSession) {
        const parsedUser = JSON.parse(userSession);
        try {
            const response = await axios.get(`${api}/auth/admin${parsedUser.email}`);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export const handleSubmitContrasena = async (
    event: FormEvent,
    password: string,
    newPassword: string,
    setcontrasenaAnterior: React.Dispatch<React.SetStateAction<string>>,
    setnuevaContrasena: React.Dispatch<React.SetStateAction<string>>,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) =>  {
    event.preventDefault();

    const MensajeErr = document.getElementById("MensajeErrCont");

    if (password === "") {
        mostrarMensaje("Ingrese su contraseña", MensajeErr);
        return false;
    }

    if (newPassword === "") {
        mostrarMensaje("Repita la contraseña", MensajeErr);
        return false;
    }

    if (password !== newPassword) {
        mostrarMensaje("Las contraseña no coinciden.",MensajeErr);
        return false;
    }

    function resetForm() {
        setcontrasenaAnterior("");
        setnuevaContrasena("");
        setIsOpen(false);
    }

    try {
        const token = localStorage.getItem("ACCESS_TOKEN");
        const responseSesion = await axios.patch(`${api}/auth/update-password-email`, { password, newPassword }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        resetForm();
        window.location.reload();
        console.log(responseSesion);
        return true;
    } catch (error: any) {
        const message = error.response?.data.message;
        mostrarMensaje(message, MensajeErr);
        resetForm();
        return false;
    }
};