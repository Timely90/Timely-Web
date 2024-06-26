import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/Footer";
import { handleSubmitRegister } from "../validation/register";

function Register() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setisVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rol, setRol] = useState('cliente');
  const [salon, setSalon] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const token = localStorage.getItem("ACCESS_TOKEN");

  useEffect(() => {
    if (token) {
      navigate("/timely-salones-cliente");
    }
  }, [token, navigate]);

  if (token) {
    return null;
  }

  const handleSubmit = async (event: FormEvent) => {
    const registrationSuccessful = await handleSubmitRegister(
      event,
      id,
      name,
      email,
      salon,
      rol,
      password,
      isVerified,
      isOpen,
      setId,
      setName,
      setEmail,
      setSalon,
      setRol,
      setPassword,
      setisVerified,
      setIsOpen,
    );

    if (registrationSuccessful) {
      setTimeout(() => {
        navigate("/timely-emailverifi");
      }, 3000);
    }
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-purple-400">
      <div className="flex-grow">
        <Header />
      </div>
      <div className="container flex flex-col mx-auto bg-purple-400 rounded-lg pt-14 my-5">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="ml-2 mr-2 w-full h-full flex items-center xl:p-10">
              <form
                onSubmit={handleSubmit}
                className={`mx-auto flex flex-col pb-6 text-center bg-purple-400 rounded-3xl ${windowWidth < 768 ? "w-full" : ""
                  }`}
              >
                <h3 className="mb-4 text-4xl font-extrabold text-gray-900">
                  Registro
                </h3>
                <div className="flex items-center mb-3">
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                  <p className="mx-4 text-white">CLIENTE</p>
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                </div>
                <p
                  id="MensajeErrUsuario"
                  className=" hidden text-gray-900 text-sm font-medium rounded-lg text-center"
                ></p>
                <p
                  id="MensajeActUsuario"
                  className=" hidden text-gray-900 text-sm font-medium rounded-lg text-center"
                ></p>
                <label className="mb-2 text-sm text-start text-gray-900">
                  Nombre*
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Ingresa tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 rounded"
                />
                <label className="mb-2 text-sm text-start text-gray-900">
                  Correo*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Ingresa tu correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 rounded"
                />
                <label className="mb-2 text-sm text-start text-gray-900">
                  Contraseña*
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 rounded"
                  />

                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                  >
                    {showPassword ? <p>Ocultar</p> : <p>Mostrar</p>}
                  </button>
                </div>
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded bg-purple-500 hover:bg-purple-600 focus:ring-purple-700"
                  >
                    Registrate
                  </button>
                </div>
                <p className="text-sm leading-relaxed text-gray-900">
                  ¿Tienes cuenta?{" "}
                  <a href="/timely-sesion" className="font-bold text-gray-900">
                    Inicia sesión aquí
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

export default Register;
