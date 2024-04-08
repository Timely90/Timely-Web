import axios from "axios";
import { FormEvent } from "react";
import { mostrarMensaje } from "../../components/toast";

const api = "https://timely-backend.vercel.app";

export async function obtenerUsers() {
    try {
        const response = await axios.get(`${api}/auth/users`);
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
) => {
    event.preventDefault();

    const MensajeErr = document.getElementById("MensajeErrCont");

    if (password === "") {
        mostrarMensaje("Ingrese la contraseña anterior", MensajeErr);
        return;
    }

    if (newPassword === "") {
        mostrarMensaje("Ingrese la nueva contraseña", MensajeErr);
        return;
    }

    if (password !== newPassword) {
        mostrarMensaje("Las contraseña no coinciden.",MensajeErr);
        return;
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
        const tokens = responseSesion.data.tokens;
        return { tokens };
    } catch (error: any) {
        const message = error.response?.data.message;
        mostrarMensaje(message, MensajeErr);
        resetForm();
        return null;
    }
};