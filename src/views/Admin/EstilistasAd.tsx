import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    }
  }, [token, roles, navigate]);

  if (!token) {
    return null;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [capacidad, setCapacidad] = useState(0);
  const [ubicacion, setUbicacion] = useState("");
  const [imagen, setImagen] = useState<File | null>(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setNombre("");
    setDescripcion("");
    setCapacidad(0);
    setUbicacion("");
    setId(0);
  };

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setImagen(e.target.files[0]);
  //   }
  // }

  const handleSubmit = () => {
    // handleSubmitSalon(
    //   event, id, nombre, descripcion, capacidad, ubicacion, imagen,
    //   // setNombre, setDescripcion, setCapacidad, setUbicacion, setIsOpen
    // );
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
                   
                  </div>

                  <div>
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
                      Capacidad
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                      placeholder="Capacidad del salón"
                      value={capacidad}
                      onChange={(e) => setCapacidad(Number(e.target.value))}
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

export default EstilistasAd;