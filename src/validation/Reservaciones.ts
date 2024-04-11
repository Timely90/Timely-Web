import axios from "axios";
import { mostrarMensaje } from "../components/toast";
const apiUrl = "https://timely-backend-rouge.vercel.app";

export async function obtenerReservaciones() {
  try {
    const response = await axios.get(`${apiUrl}/reservados`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export function handleClickEl(reser: any) {
  const id = reser.id;
  const MensajeNegToast = document.getElementById("toast-negative");

  axios
    .delete(`${apiUrl}/reservados/${id}`)
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