import { FormEvent, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/header";
import {
  handleSubmitUserSesion,
  handleSubmitVerifi,
} from "../validation/sesion";
import { useNavigate } from "react-router-dom";

export interface UserData {
  name: string;
  email: string;
  rol: string;
}

function Sesion() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("ACCESS_TOKEN");

  const urlParams = new URLSearchParams(window.location.search);
  const tokens = urlParams.get("token");

  useEffect(() => {
    if (token) {
      navigate("/timely-salones");
      return;
    }

    if (tokens) {
      verificarTokens(tokens);
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [token, tokens, navigate, verificarTokens]);


  async function verificarTokens(tokens: any) {
    const tokenData = await handleSubmitVerifi(tokens);

    if (tokenData) {
      const { token, name, email, rol } = tokenData;

      localStorage.setItem("ACCESS_TOKEN", token);

      const sessionData: UserData = {
        name,
        email,
        rol
      };

      localStorage.setItem("USER_SESSION", JSON.stringify(sessionData));

      setTimeout(() => {
        navigate("/authguard");
      }, 1000);
    }
  }

  const handleSubmitSesion = async (event: FormEvent) => {
    const sesionData = await handleSubmitUserSesion(
      event,
      email,
      password,
      setEmail,
      setPassword
    );

    if (sesionData) {
      const { token, name, email, rol } = sesionData;

      localStorage.setItem("ACCESS_TOKEN", token);

      const sessionData: UserData = {
        name,
        email,
        rol
      };

      localStorage.setItem("USER_SESSION", JSON.stringify(sessionData));

      setTimeout(() => {
        navigate("/authguard");
      }, 3000);

    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col min-h-screen bg-purple-400">
      <div className="flex-grow">
        <Header />
      </div>

      <div className="container flex flex-col mx-auto bg-purple-400 rounded-lg pt-14 my-5">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className=" ml-2 mr-2 w-full h-full flex items-center xl:p-10">
              <form
                onSubmit={handleSubmitSesion}
                className={`mx-auto flex flex-col pb-6 text-center bg-purple-400 rounded-3xl ${windowWidth < 768 ? "w-full" : ""
                  }`}
              >
                <h3 className="mb-3 text-4xl font-extrabold text-gray-900">
                  Sesión
                </h3>

                <p className="mb-4 text-gray-900">
                  Ingrese tu correo y contraseña
                </p>
                <p
                  id="MensajeErrUsuario"
                  className=" hidden text-gray-900 text-sm font-medium rounded-lg text-center"
                ></p>
                <p
                  id="MensajeActUsuario"
                  className=" hidden text-gray-900 text-sm font-medium rounded-lg text-center"
                ></p>
                <label
                  htmlFor="email"
                  className="mb-2 text-sm text-start text-gray-900"
                >
                  Correo*
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingresa tu correo"
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded"
                />
                <label
                  htmlFor="password"
                  className="mb-2 text-sm text-start text-gray-900"
                >
                  Contraseña*
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingresa tu contraseña"
                    className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded"
                  />

                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                  >
                    {showPassword ? <p>Ocultar</p> : <p>Mostrar</p>}
                  </button>
                </div>
                <div className=" mb-8">
                  <a
                    href="/timely-password"
                    className="mr-4 text-sm font-medium text-gray-900"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded bg-purple-500 hover:bg-purple-600 focus:ring-purple-700"
                >
                  Iniciar sesión
                </button>
                <p className="text-sm leading-relaxed text-gray-900">
                  ¿No tienes cuenta?{" "}
                  <a
                    href="/timely-register"
                    className="font-bold text-gray-900"
                  >
                    Create una aquí
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sesion;
