import axios from "axios";
const apiUrl = "https://stark-backend-pink.vercel.app";

export async function obtenerCategorias() {
    try {
        const response = await axios.get(`${apiUrl}/categories`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function obtenerLibros() {
    try {
        const libros = await axios.get(`${apiUrl}/books`);
        return libros.data;
    } catch (error) {
        throw error;
    }
}
