import { FormEvent } from "react";
import axios from "axios";
import { mostrarMensaje } from "../../components/toast";
const apiUrl = "https://timely-backend-rouge.vercel.app";

export const handleSerEstilista = async (
  event: FormEvent,
  id: number,
  nombre: string,
  salon: string,
  descripcion: string,
  horario: string,
  precio: number,
  imagen: File | null,
  setId: React.Dispatch<React.SetStateAction<number>>,
  setNombre: React.Dispatch<React.SetStateAction<string>>,
  setSalon: React.Dispatch<React.SetStateAction<string>>,
  setDescripcion: React.Dispatch<React.SetStateAction<string>>,
  setHorario: React.Dispatch<React.SetStateAction<string>>,
  setPrecio: React.Dispatch<React.SetStateAction<number>>,
  setImagen: React.Dispatch<React.SetStateAction<File | null>>,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  event.preventDefault();

  const mensajeErrForm = document.getElementById("MensajeErrForm");

  if (nombre === "") {
    mostrarMensaje("Ingrese el nombre", mensajeErrForm);
    return;
  }

  if (salon === "") {
    mostrarMensaje("Ingrese el salón", mensajeErrForm);
    return;
  }

  if (descripcion === "") {
    mostrarMensaje("Ingrese la descripción", mensajeErrForm);
    return;
  }

  if (horario === "") {
    mostrarMensaje("Ingrese el horario", mensajeErrForm);
    return;
  }

  if (precio === 0) {
    mostrarMensaje("Ingrese el precio", mensajeErrForm);
    return;
  }

  if (imagen === null) {
    mostrarMensaje("Seleccione una imagen", mensajeErrForm);
    return;
  }

  function resetForm() {
    setId(0);
    setNombre("");
    setSalon("");
    setDescripcion("");
    setHorario("");
    setPrecio(0);
    setImagen(null);
    setIsOpen(false);
  }

  const formData = new FormData();
  formData.append('nombre', nombre);
  formData.append("salon", salon);
  formData.append('descripcion', descripcion);
  formData.append('horario', horario);
  formData.append('precio', precio.toString());
  formData.append('imagen', imagen);

  try {
    const method = id === 0 ? 'post' : 'patch';
    const url = id === 0 ? `${apiUrl}/servicio` : `${apiUrl}/servicio/${id}`;
    await axios[method](url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    resetForm();
    window.location.reload();
  } catch (error: any) {
    const message = error.response?.data.message;
    mostrarMensaje(message, mensajeErrForm);
  }

};

export async function obtenerServicio() {
  try {
    const response = await axios.get(`${apiUrl}/servicio`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export function handleClickEl(servicio: any) {
  const id = servicio.id;
  const MensajeNegToast = document.getElementById("toast-negative");

  axios
    .delete(`${apiUrl}/servicio/${id}`)
    .then((response) => {
      if ((response.data = 200)) {
        window.location.reload();
      }
    })
    .catch((error) => {
      if (error) {
        mostrarMensaje(error.response.data.error, MensajeNegToast);
      }
    });
}
