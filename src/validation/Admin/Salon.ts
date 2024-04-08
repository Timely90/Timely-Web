import { FormEvent } from "react";
import axios from "axios";
import { mostrarMensaje } from "../../components/toast";
const apiUrl = "https://timely-backend.vercel.app";

export const handleSubmitSalon = async (
  event: FormEvent,
  id: number,
  nombre: string,
  descripcion: string,
  capacidad: number,
  ubicacion: string,
  imagen: File | null,
  setId: React.Dispatch<React.SetStateAction<number>>,
  setNombre: React.Dispatch<React.SetStateAction<string>>,
  setDescripcion: React.Dispatch<React.SetStateAction<string>>,
  setCapacidad: React.Dispatch<React.SetStateAction<number>>,
  setUbicacion: React.Dispatch<React.SetStateAction<string>>,
  setImagen: React.Dispatch<React.SetStateAction<File | null>>,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  event.preventDefault();

  const mensajeErrForm = document.getElementById("MensajeErrForm");

  if (nombre === "") {
    mostrarMensaje("Ingrese el nombre", mensajeErrForm);
    return;
  }

  if (descripcion === "") {
    mostrarMensaje("Ingrese la descripción", mensajeErrForm);
    return;
  }

  if (capacidad <= 0) {
    mostrarMensaje("Ingrese la capacidad", mensajeErrForm);
    return;
  }

  if (ubicacion === "") {
    mostrarMensaje("Ingrese la ubicación", mensajeErrForm);
    return;
  }

  if (imagen === null) {
    mostrarMensaje("Seleccione una imagen", mensajeErrForm);
    return;
  }

  function resetForm() {
    setId(0);
    setNombre("");
    setDescripcion("");
    setCapacidad(0);
    setUbicacion("");
    setImagen(null);
    setIsOpen(false);
  }

  const formData = new FormData();
  formData.append('nombre', nombre);
  formData.append('descripcion', descripcion);
  formData.append('capacidad', capacidad.toString());
  formData.append('ubicacion', ubicacion);
  formData.append('imagen', imagen);

  try {
    const method = id === 0 ? 'post' : 'patch';
    const url = id === 0 ? `${apiUrl}/salon` : `${apiUrl}/salon/${id}`;
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

export async function obtenerSalon() {
  try {
    const response = await axios.get(`${apiUrl}/salon`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export function handleClickEl(salones: any) {
  const id = salones.id;
  const MensajeNegToast = document.getElementById("toast-negative");

  axios
    .delete(`${apiUrl}/salon/${id}`)
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
