import { FormEvent, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Section } from "../../components/Section";
import Header from "../../components/header";
import HeaderSesion from "../../components/headerSesion";
import { useNavigate } from "react-router-dom";
import { handleSubmitContrasena, obtenerUsersId } from "../../validation/Perfil";

export interface UserData {
  name: string;
  email: string;
}

function PerfilCliente() {

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
        navigate("/timely-estilistas-administrador");
      }
      if (rol === "secretario") {
        navigate("/timely-reservados-secretario");
      }
    }
  }, [token, roles, navigate]);

  if (!token) {
    return null;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [passsword2, setPassword2] = useState("");
  const [users, setUsers] = useState<any>(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setPassword("");
    setPassword2("");
  };

  const handleSubmit = (event: FormEvent) => {
    handleSubmitContrasena(
      event,
      password,
      passsword2,
      setPassword,
      setPassword2,
      setIsOpen
    );
  };

  useEffect(() => {
    obtenerUsersId()
      .then((data) => {
        setUsers(data);
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
          tittle="Perfil"
          description="Puedes modificar sus datos y ver sus reservaciones."
        />
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-10 ml-4 mr-4">
        <div
          className="hover:bg-gray-700 w-full max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700"
        >
          <div>
            <img
              className="rounded-t-lg w-96 h-64"
              src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"
            />
          </div>
          <div className="px-5 pb-5">
            {users && (
              <div>
                <div>
                  <h5 className="text-xl font-semibold tracking-tight text-white">
                    Nombre
                  </h5>
                </div>
                <p className="mb-3 font-normal text-gray-400">{users.name}</p>
                <div>
                  <h5 className="text-xl font-semibold tracking-tight  text-white">
                    Correo electrónico
                  </h5>
                </div>
                <p className="mb-3 font-normal text-gray-400">{users.email}</p>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-white">
              </span>
              <div onClick={toggleModal}
                className=" cursor-pointer text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-purple-600 hover:bg-purple-700 focus:ring-purple-800"
              >
                Cambiar contraseña
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          id="authentication-modal"
          aria-hidden="true"
          className="bg-gray-100 bg-opacity-50 formPer fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow-lg">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                data-modal-hide="authentication-modal"
                onClick={toggleModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-black">
                  Actualizar contraseña
                </h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <p
                      id="MensajeErrCont"
                      className=" hidden text-red-500 text-sm font-medium rounded-lg text-center"
                    ></p>
                    <label className="block mb-2 text-sm font-medium text-gray-500">
                      Contraseña
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-500">
                      Repita la contraseña
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                        placeholder="Contraseña"
                        value={passsword2}
                        onChange={(e) => setPassword2(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="mb-10 mt-5 w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Actualizar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>

  );

}

export default PerfilCliente;
