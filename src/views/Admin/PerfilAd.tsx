import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSubmitContrasena, obtenerUsersId } from "../../validation/Perfil";

function PerfilAd() {
  const token = localStorage.getItem("ACCESS_TOKEN");
  const roles = localStorage.getItem("USER_SESSION");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/timely-salones-cliente");
    } else if (roles) {
      const userSession = JSON.parse(roles);
      const rol = userSession.rol;
      if (rol === "cliente") {
        navigate("/timely-salones-cliente");
      }
      if (rol === "estilista") {
        navigate("/timely-servicios-estilista");
      }
      if (rol === "secretario") {
        navigate("/timely-reservados-secretario");
      }
    }
  }, [token, roles, navigate]);

  if (!token) {
    return null;
  }

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setPassword("");
    setPassword2("");
  };

  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [passsword2, setPassword2] = useState("");
  const [users, setUsers] = useState<any>(null);

  useEffect(() => {
    obtenerUsersId()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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

  return (
    <div className="bg-white p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14 shadow-md">
      <div className="flex flex-col items-center md:flex-row md:items-start md:justify-center">
        <a className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl border-gray-700 bg-gray-800">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Perfil
            </h5>
            {users && (
              <>
                <p className="mb-3 font-normal text-gray-300">
                  Nombre: <b>{users.name}</b>
                </p>
                <p className="mb-3 font-normal text-gray-300">
                  Apellido: <b>{users.email}</b>
                </p>
              </>
            )}
          </div>
        </a>
      </div>
      <div className="btn-container flex justify-center">
        <button
          className=" max-w-xl mt-4 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-3 md:px-5 py-2.5"
          onClick={toggleModal}
        >
          Cambiar contraseña
        </button>
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
    </div>
  );
}

export default PerfilAd;

