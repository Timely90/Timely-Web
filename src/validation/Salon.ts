import { FormEvent } from "react";
import axios from "axios";
import { mostrarMensaje } from "../components/toast";
const apiUrl = "https://nivelacion.up.railway.app/api/v1";

export const handleSubmitSalon = async (
  event: FormEvent,
  id: number,
  nombre: string,
  descripcion: string,
  capacidad: number,
  ubicacion: string,
  setNombre: React.Dispatch<React.SetStateAction<string>>,
  setDescripcion: React.Dispatch<React.SetStateAction<string>>,
  setCapacidad: React.Dispatch<React.SetStateAction<number>>,
  setUbicacion: React.Dispatch<React.SetStateAction<string>>,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
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

  console.log(id, nombre, descripcion, capacidad, ubicacion,);

};


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

// const dataAsig = {
//   nombre,
//   creditos,
// };

// if (id === 0) {
//   await axios
//     .post(`${apiUrl}/asignaturas`, dataAsig)
//     .then((response) => {
//       if ((response.data = 200)) {
//         mostrarMensaje("Asignatura agregada.", MensajeSuccToast);
//       }
//       iniciarEstados();
//     })
//     .catch((error) => {
//       if (error) {
//         mostrarMensaje(error.response.data.error, mensajeErrForm);
//       }
//     });
// } else {
//   await axios
//     .put(`${apiUrl}/asignaturas/${id}`, dataAsig)
//     .then((response) => {
//       if ((response.data = 200)) {
//         mostrarMensaje("Asignatura actualizada.", MensajeSuccToast);
//       }
//       iniciarEstados();
//     })
//     .catch((error) => {
//       if (error) {
//         mostrarMensaje(error.response.data.error, mensajeErrForm);
//       }
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