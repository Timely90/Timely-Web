import { FormEvent } from "react";
import { mostrarMensaje } from "../components/toast";
import axios from "axios";

const api = "https://woody-backend.vercel.app";
// const api = import.meta.env.VITE_APP_API_URL;

export const handleSubmitUsers = async (
  event: FormEvent,
  name: string,
  email: string,
  rol: string,
  password: string,
  isVerified: boolean,
  setName: React.Dispatch<React.SetStateAction<string>>,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setRol: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  setisVerify: React.Dispatch<React.SetStateAction<boolean>>
): Promise<boolean> => {
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

  if (rol == "") {
    mostrarMensaje("Ingrese su rol", MensajeErrUsuario);
    return false;
  }

  if (password === "") {
    mostrarMensaje("Ingrese su contraseña", MensajeErrUsuario);
    return false;
  }

  function resetForm() {
    setName("");
    setEmail("");
    setRol("");
    setPassword("");
    setisVerify(false);
  }

  try {
    const responseRegister = await axios.post(`${api}/auth/register`, { name, email, rol, password, isVerified });
    const mensaje = responseRegister.data.message;
    mostrarMensaje(mensaje, MensajeActUsuario);
    resetForm();
    return true;
  } catch (error: any) {
    const message = error.response?.data.message;
    mostrarMensaje(message, MensajeErrUsuario);
    resetForm();
    return false;
  }
};

export interface emailData {
  email: string
}

export const handleSubmitEmail = async (
  event: FormEvent,
  email: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
): Promise<emailData | null> => {
  event.preventDefault();
  const MensajeErr = document.getElementById("MensajeErr");
  const MensajeAct = document.getElementById("MensajeAct");

  if (email === "") {
    mostrarMensaje("Ingrese su correo electrónico", MensajeErr);
    return null;
  }

  function resetForm() {
    setEmail("");
  }

  try {
    const responseEmail = await axios.post(`${api}/auth/email`, { email });
    resetForm();
    mostrarMensaje(responseEmail.data.message, MensajeAct);
    return { email };
  } catch (error: any) {
    const message = error.response?.data.message;
    mostrarMensaje(message, MensajeErr);
    resetForm();
    return null;
  }
};