import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerUsersEstilista } from "../../validation/Perfil";
import { handleSubmitRegister } from "../../validation/register";

function EstilistasAd() {

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
      if(rol === "secretario"){
        navigate("/timely-reservados-secretario");
      }
    }
  }, [token, roles, navigate]);

  if (!token) {
    return null;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setisVerified] = useState(true);
  const [rol, setRol] = useState('estilista');

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setName("");
    setEmail("");
    setPassword("");
    setRol("estilista");
    setId(0);
  };

  const handleSubmit = (event: FormEvent) => {
    handleSubmitRegister(
      event,
      id,
      name,
      email,
      rol,
      password,
      isVerified,
      isOpen,
      setId,
      setName,
      setEmail,
      setRol,
      setPassword,
      setisVerified,
      setIsOpen
    );
  };

  const [users, setUsers] = useState<
    { id: number; name: string; email: string, rol: string, isVerifi: boolean }[]
  >([]);

  useEffect(() => {
    obtenerUsersEstilista()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleActualizar = (
    id: number,
    name: string,
    email: string,
  ) => {
    setId(id);
    setName(name);
    setEmail(email);
    toggleModalAct();
  };

  const toggleModalAct = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" bg-white p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14 shadow-md">
      <div className="text-black text-2xl mb-4 p-4 rounded-lg shadow-lg bg-gray-200 flex items-center justify-between">
        <p className="text-center">Estilista</p>
        <button
          className="text-white bg-purple-400 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-400 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={toggleModal}
        >
          Agregar
        </button>
      </div>
      {isOpen && (
        <div
          id="authentication-modal"
          aria-hidden="true"
          className=" bg-gray-100 bg-opacity-50 fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center"
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
                  Estilistas
                </h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <p
                      id="MensajeErrUsuario"
                      className=" hidden text-red-500 text-sm font-medium rounded-lg text-center"
                    ></p>
                    <p
                      id="MensajeActUsuario"
                      className=" hidden text-green-500 text-sm font-medium rounded-lg text-center"
                    ></p>
                    <label className="block mb-2 text-sm font-medium text-gray-500">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                      placeholder="Ingrese el nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-500">
                      Correo
                    </label>
                    <input
                      type="email"
                      id="correo"
                      className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                      placeholder="Ingrese el correo"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {id === 0 && (
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-500">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                        placeholder="Ingrese la contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  )}

                  <div>
                    <button
                      type="submit"
                      className="mb-10 mt-5 w-full text-white bg-purple-400 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Registrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Correo
              </th>
              <th scope="col" className="px-6 py-3">
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((usuario, index) => (
              <tr
                key={index}
                className=" border-b bg-gray-900 border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-white"
                >
                  {usuario.name}
                </th>

                <td className="px-6 py-4">{usuario.email}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-500 hover:underline"
                    onClick={() =>
                      handleActualizar(
                        usuario.id,
                        usuario.name,
                        usuario.email
                      )
                    }
                  >
                    Actualizar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EstilistasAd;