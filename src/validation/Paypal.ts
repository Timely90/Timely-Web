
import axios from "axios";
const api = "https://timely-backend-rouge.vercel.app";

export async function handleSubmitPaypal(email: string, id: number, precio: number) {
    try {
        const token = localStorage.getItem("ACCESS_TOKEN");
        const responsePaypal = await axios.get(`${api}/paypal/create/${id}?precio=${precio}&email=${email}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const primerEnlace = responsePaypal.data.primerEnlace;
        const hrefDelEnlace = primerEnlace.href;
        window.location.href = hrefDelEnlace;
    } catch (error) {
        throw error;
    }
}

