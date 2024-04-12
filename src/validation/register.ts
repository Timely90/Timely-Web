import { FormEvent } from "react";
import { mostrarMensaje } from "../components/toast";
import axios from "axios";

const api = "https://timely-backend-rouge.vercel.app";
// const api = import.meta.env.VITE_APP_API_URL;

export const handleSubmitRegister = async (
  event: FormEvent,
  id: number,
  name: string,
  email: string,
  salon: string,
  rol: string,
  password: string,
  isVerified: boolean,
  isOpen: boolean,
  setId: React.Dispatch<React.SetStateAction<number>>,
  setName: React.Dispatch<React.SetStateAction<string>>,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setSalon: React.Dispatch<React.SetStateAction<string>>,
  setRol: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  setisVerify: React.Dispatch<React.SetStateAction<boolean>>,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
): Promise<boolean> => {
  event.preventDefault();
  const MensajeErrUsuario = document.getElementById("MensajeErrUsuario");

  if (name === "") {
    mostrarMensaje("Ingrese el nombre", MensajeErrUsuario);
    return false;
  }

  if (email === "") {
    mostrarMensaje("Ingrese el correo", MensajeErrUsuario);
    return false;
  }

  if(rol !== "cliente"){
    if (salon === "") {
      mostrarMensaje("Ingrese el salon", MensajeErrUsuario);
      return false;
    }
  }

  if (id === 0) {
    if (password === "") {
      mostrarMensaje("Ingrese la contraseña", MensajeErrUsuario);
      return false;
    }
  }

  function resetForm() {
    setId(0);
    setName("");
    setEmail("");
    setSalon("");
    setPassword("");
    setRol("");
    setisVerify(false);
    setIsOpen(false);
    console.log(isOpen);
  }

  try {
    let responseRegister;
    if (id === 0) {
      responseRegister = await axios.post(`${api}/auth/register`, { name, email, rol, salon, password, isVerified });
    } else {
      responseRegister = await axios.patch(`${api}/auth/update`, { id, name, email,});
    }
    resetForm();
    console.log(responseRegister);

    if (rol === "cliente") {
      return true;
    } else {
      window.location.reload();
    }
    return true;
  } catch (error: any) {
    const message = error.response?.data.message;
    mostrarMensaje(message, MensajeErrUsuario);
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