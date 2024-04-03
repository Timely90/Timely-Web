import { FormEvent, useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import { handleSubmitPassUpEmail } from "../validation/sesion";

export interface UserData {
    name: string;
    email: string;
    telefone: string;
}

function PasswordUpEmail() {

    const [password, setPassword] = useState("");
    const [verPassword, setVerPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };

    const navigate = useNavigate();

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    }, [token, navigate]);

    if (!token) {
        return null;
    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSubmitPassEmail = async (event: FormEvent) => {
        const emailData = await handleSubmitPassUpEmail(event, password, verPassword, setPassword, setVerPassword);

        if (emailData) {
            const { tokens, name, email, telefone } = emailData;
            localStorage.setItem("ACCESS_TOKEN", tokens);
            const sessionData: UserData = {
                name, email, telefone
            };

            localStorage.setItem(
                "USER_SESSION",
                JSON.stringify(sessionData)
            );
            setTimeout(() => {
                navigate("/");
            }, 3000);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-900">
            <div className="flex-grow">
                <Header />
            </div>
            <div className=" container flex flex-col mx-auto bg-gray-900 rounded-lg pt-14 my-5">
                <div className=" flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                    <div className="flex items-center justify-center w-full lg:p-12">
                        <div className=" w-full h-full flex items-center xl:p-10">
                            <form onSubmit={handleSubmitPassEmail}
                                className={`mx-auto flex flex-col pb-6 text-center bg-gray-900 rounded-3xl ${windowWidth < 768 ? 'w-full' : ''}`}>
                                <h3 className="mb-3 text-4xl font-extrabold text-white">Contraseña</h3>
                                <p className="mb-4 text-white">Ingrese su nueva contraseña</p>
                                <p
                                    id="MensajeErrEmail"
                                    className=" hidden text-red-500 text-sm font-medium rounded-lg text-center"
                                ></p>
                                <p
                                    id="MensajeActEmail"
                                    className=" hidden text-green-500 text-sm font-medium rounded-lg text-center"
                                ></p>
                                <label htmlFor="email" className="mb-2 text-sm text-start text-white">
                                    Nueva contraseña
                                </label>
                                <div className="relative">
                                    <input
                                        id="text"
                                        type={showPassword ? "text" : "password"}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Ingresa su nueva contraseña"
                                        className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded"
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                                    >
                                        {showPassword ? (
                                            <p>Ocultar</p>
                                        ) : (
                                            <p>Mostrar</p>
                                        )}
                                    </button>
                                </div>

                                <label htmlFor="password" className="mb-2 text-sm text-start text-white">
                                    Verifique contraseña
                                </label>

                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword1 ? "text" : "password"}
                                        onChange={(e) => setVerPassword(e.target.value)}
                                        placeholder="Ingresa la verificación"
                                        className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded"
                                    />

                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility1}
                                        className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                                    >
                                        {showPassword1 ? (
                                            <p>Ocultar</p>
                                        ) : (
                                            <p>Mostrar</p>
                                        )}
                                    </button>
                                </div>

                                <button type="submit"
                                    className="w-full px-6 py-5 mb-36 mt-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded hover:bg-blue-700 focus:ring-4 focus:ring-purple-blue-100 bg-blue-600"
                                >
                                    Actualizar
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PasswordUpEmail;