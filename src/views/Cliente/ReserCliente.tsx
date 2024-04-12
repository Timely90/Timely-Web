import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Section } from "../../components/Section";
import Header from "../../components/header";
import HeaderSesion from "../../components/headerSesion";
import { useNavigate } from "react-router-dom";
import { obtenerReservaciones } from "../../validation/Reservaciones";
import { Link } from "react-router-dom";

interface Reserva {
    id: number;
    nombre: string;
    salon: string;
    descripcion: string;
    horario: string;
    precio: number;
    email: string;
}

function ReservacionesCliente() {

    const token = localStorage.getItem("ACCESS_TOKEN");
    const roles = localStorage.getItem("USER_SESSION");

    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/timely-salones-cliente");
        } else if (roles) {
            const userSession = JSON.parse(roles);
            const rol = userSession.rol;
            if (rol === "estilista") {
                navigate("/timely-servicios-estilista");
            }
            if (rol === "administrador") {
                navigate("/timely-salones-administrador");
              }
            if (rol === "secretario") {
                navigate("/timely-reservados-secretario");
            }
        }
    }, [token, roles, navigate]);

    if (!token) {
        return null;
    }

    const [reserva, setReserva] = useState<
        { id: number; nombre: string; salon: string, descripcion: string, horario: string, precio: number, email: string }[]
    >([]);

    useEffect(() => {
        obtenerReservaciones()
            .then((data: Reserva[]) => {
                const userSession = localStorage.getItem("USER_SESSION");
                if (userSession) {
                    const parsedUser = JSON.parse(userSession);
                    const email = parsedUser.email;
                    const reservasFiltradas = data.filter(reserva => reserva.email === email);
                    setReserva(reservasFiltradas);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="flex-grow">
                {token ? <HeaderSesion /> : <Header />}
                <Section
                    tittle="Reservaciones"
                    description="Aquí podras ver todas tus reservaciones."
                />
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-10 ml-4 mr-4">
                {reserva.length === 0 ? (
                    <div className="flex items-center h-full">
                        <p className="mr-4 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-3xl text-gray-900">
                            Cargando tus reservaciones...
                        </p>
                        <svg
                            aria-hidden="true"
                            className="mb-2 w-10 h-10 mr-2 animate-spin text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                    </div>
                ) : (
                    reserva.map((reser) => (
                        <div
                            key={reser.id}
                            className="hover:bg-gray-700 w-full max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700"
                        >
                            <div>
                                <img className="rounded-t-lg h-80 w-full" src="https://cloudbeds-fcfc.kxcdn.com/wp-content/uploads/2022/05/iStock-1068158510-scaled-e1669046834676.jpg" />
                            </div>
                            <div className="px-5 pb-5">
                                <div>
                                    <h5 className="text-xl font-semibold tracking-tight  text-white">
                                        {reser.nombre}
                                    </h5>
                                </div>
                                <p className="mb-3 font-normal text-gray-400">
                                    {reser.descripcion}
                                </p>
                                <h5 className="text-xl font-semibold tracking-tight text-white">
                                    {reser.horario}
                                </h5>
                                <h5 className="text-xl font-semibold tracking-tight text-white">
                                    {reser.precio} Dop
                                </h5>
                                <div className="flex items-center justify-between">
                                    <Link
                                        to={`https://api.whatsapp.com/send?phone=18096760675&text=Quiero contactarme con Timely.`}
                                        target="_blank"
                                    >
                                        <div
                                            className=" cursor-pointer text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-purple-600 hover:bg-purple-700 focus:ring-purple-800"
                                        >
                                            Soluciones
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <Footer />
        </div>

    );

}

export default ReservacionesCliente;
