import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSubmitEstilista } from "../../validation/Estilista/Estilista";

function ServiciosEst() {
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
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [salon, setSalon] = useState("");
  const [horario, setHorario] = useState("");
  const [imagen, setImagen] = useState<File | null>(null);

  const [users, setUsers] = useState<
    { id: number; name: string; email: string, rol: string, isVerifi: boolean }[]
  >([]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setNombre("");
    setDescripcion("");
    setSalon("");
    setHorario("");
    setId(0);
  };

  const handleSubmit = (event: FormEvent) => {
    handleSubmitEstilista(
      event, id, nombre, descripcion, salon, horario, imagen, setId,
      setNombre, setDescripcion, setSalon, setHorario, setImagen, setIsOpen
    );
  };

  return (
    <div className=" bg-white p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14 shadow-md">
      <div className="text-black text-2xl mb-4 p-4 rounded-lg shadow-lg bg-gray-200 flex items-center justify-between">
        <p className="text-center">Servicios</p>
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
                  Salón
                </h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <p
                      id="MensajeErrForm"
                      className=" hidden text-red-500 text-sm font-medium rounded-lg text-center"
                    ></p>
                    <label className="block mb-2 text-sm font-medium text-gray-500">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                      placeholder="Nombre del salón"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-500">Seleccionar usuario</label>
                    <select
                      id="usuarios"
                      className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    >
                      <option value="">Seleccionar usuario</option>
                      {users.map((user) => (
                        <option key={user.id} value={user.email}>
                          {user.email}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-500">
                      Descripción
                    </label>
                    <textarea
                      id="asignatura"
                      placeholder="Descripción del salón"
                      className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                      value={descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}>
                    </textarea>
                    <input
                      type="number"
                      id="Idasignatura"
                      className="hidden bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                      value={id}
                      onChange={(e) => setId(Number(e.target.value))}
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-500">
                      Capacidad
                    </label>
                    <input
                      type="number"
                      id="nombre"
                      className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                      placeholder="Capacidad del salón"
                      value={capacidad}
                      onChange={(e) => setCapacidad(Number(e.target.value))}
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-500">
                      Ubicación
                    </label>
                    <input
                      type="text"
                      id="ubicacion"
                      className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                      placeholder="Ubucación del salón"
                      value={ubicacion}
                      onChange={(e) => setUbicacion(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-500">
                      Imagen
                    </label>
                    <input
                      type="file"
                      id="imagen"
                      accept="image/*"
                      className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                      onChange={(e) => setImagen(e.target.files ? e.target.files[0] : null)}
                    />
                  </div>

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
    </div>
  );
}

export default ServiciosEst;