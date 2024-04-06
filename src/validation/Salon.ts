import { FormEvent } from "react";
import axios from "axios";
import { mostrarMensaje } from "../components/toast";
const apiUrl = "https://timely-backend.vercel.app";

export const handleSubmitSalon = async (
  event: FormEvent,
  id: number,
  nombre: string,
  descripcion: string,
  capacidad: number,
  ubicacion: string,
  imagen: File | null,
  // setNombre: React.Dispatch<React.SetStateAction<string>>,
  // setDescripcion: React.Dispatch<React.SetStateAction<string>>,
  // setCapacidad: React.Dispatch<React.SetStateAction<number>>,
  // setUbicacion: React.Dispatch<React.SetStateAction<string>>,
  // setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  event.preventDefault();

  const mensajeErrForm = document.getElementById("MensajeErrForm");
  const MensajeSuccToast = document.getElementById("toast-success");

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

  const formData = new FormData();
  formData.append('nombre', nombre);
  formData.append('descripcion', descripcion);
  formData.append('capacidad', capacidad.toString());
  formData.append('ubicacion', ubicacion);
  formData.append('imagen', imagen);

  if (id === 0) {
    try {
      const response = await axios.post(`${apiUrl}/salon`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 200) {
        mostrarMensaje("Salón agregado.", MensajeSuccToast);
      }
    } catch (error) {
      console.log(error);
    }
  }
};


// if (error.response) {
//   mostrarMensaje(error.response.data.error, mensajeErrForm);
// } else {
//   mostrarMensaje("Ocurrió un error al procesar la solicitud.", mensajeErrForm);
// }

// function iniciarEstados() {
//   setIsOpen(false);
//   setNombre("");
//   setCreditos(0);

//   obtenerAsignaturas()
//     .then((data) => {
//       setAsignaturas(data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }


// export function handleClickEl(
//   asignatura: any,
//   setAsignaturas: React.Dispatch<
//     React.SetStateAction<{ id: number; nombre: string; creditos: number }[]>
//   >
// ) {
//   const id = asignatura.id;
//   const MensajeSuccToast = document.getElementById("toast-success");
//   const MensajeNegToast = document.getElementById("toast-negative");

//   axios
//     .delete(`${apiUrl}/asignaturas/${id}`)
//     .then((response) => {
//       if ((response.status = 200)) {
//         mostrarMensaje("Asignatura eliminada.", MensajeSuccToast);
//       }

//       obtenerAsignaturas()
//         .then((data) => {
//           setAsignaturas(data);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     })
//     .catch((error) => {
//       if (error) {
//         mostrarMensaje(error.response.data.error, MensajeNegToast);
//       }
//     });
// }

// export async function obtenerAsignaturas() {
//   try {
//     const response = await axios.get(`${apiUrl}/asignaturas`);
//     return response.data.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }