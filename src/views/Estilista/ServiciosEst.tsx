import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleClickEl, handleSerEstilista, obtenerServicio } from "../../validation/Estilista/ServicioEst";
import { obtenerSalon } from "../../validation/Admin/Salon";
import { Modal } from "../../components/toast";

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

  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [salon, setSalon] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [horario, setHorario] = useState("");
  const [precio, setPrecio] = useState(0);
  const [imagen, setImagen] = useState<File | null>(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setNombre("");
    setSalon("");
    setDescripcion("");
    setHorario("");
    setId(0);
  };

  const handleSubmit = (event: FormEvent) => {
    handleSerEstilista(
      event, id, nombre, salon, descripcion, horario, precio, imagen, setId,
      setNombre, setSalon, setDescripcion, setHorario, setPrecio, setImagen, setIsOpen
    );
  };

  const [servicio, setServicio] = useState<
    {
      id: number;
      nombre: string;
      salon: string;
      descripcion: string;
      horario: string;
      precio:number;
      archives: [
        {
          id: number;
          filename: string;
        }
      ];
    }[]
  >([]);

  useEffect(() => {
    obtenerServicio()
      .then((data) => {
        setServicio(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [salones, setSalones] = useState<
    {
      id: number;
      nombre: string;
      email: string;
      descripcion: string;
      capacidad: number;
      ubicacion: string;
      archives: [
        {
          id: number;
          filename: string;
        }
      ];
    }[]
  >([]);

  useEffect(() => {
    obtenerSalon()
      .then((data) => {
        setSalones(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleActualizar = (
    id: number,
    nombre: string,
    salon: string,
    descripcion: string,
    horario: string,
    precio:number,
  ) => {
    setId(id);
    setNombre(nombre);
    setSalon(salon);
    setDescripcion(descripcion);
    setHorario(horario);
    setPrecio(precio);
    toggleModalAct();
  };

  const toggleModalAct = () => {
    setIsOpen(!isOpen);
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
                  Servicios
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
                      placeholder="Nombre del servicio"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-500">Salon</label>
                    <select
                      id="usuarios"
                      className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                      value={salon}
                      onChange={(e) => setSalon(e.target.value)}
                    >
                      <option value="">Seleccionar salon</option>
                      {salones.map((salon) => (
                        <option key={salon.id} value={salon.nombre}>
                          {salon.nombre}
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
                      placeholder="Descripción del servicio"
                      className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                      value={descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}>
                    </textarea>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-500">
                      Horario
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                      placeholder="Horario del servicio"
                      value={horario}
                      onChange={(e) => setHorario(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-500">
                      Precio
                    </label>
                    <input
                      type="number"
                      id="nombre"
                      className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                      placeholder="Horario del servicio"
                      value={precio}
                      onChange={(e) => setPrecio(Number(e.target.value))}
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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Imagen
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Salon
              </th>
              <th scope="col" className="px-6 py-3">
                Descripción
              </th>
              <th scope="col" className="px-6 py-3">
                Horario
              </th>
              <th scope="col" className="px-6 py-3">
                Precio
              </th>
              <th scope="col" className="px-6 py-3">
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
            {servicio.map((servicio, index) => (
              <tr
                key={index}
                className="border-b bg-gray-900 border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {servicio.archives && servicio.archives.length > 0 && servicio.archives[0].filename ? (
                    <img className="h-12 w-18" src={servicio.archives[0].filename} alt="" />
                  ) : (
                    <span className="text-white">No hay imagen</span>
                  )}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-white"
                >
                  {servicio.nombre}
                </th>
                <td className="px-6 py-4">{servicio.salon}</td>
                <td className="px-6 py-4">{servicio.descripcion}</td>
                <td className="px-6 py-4">{servicio.horario}</td>
                <td className="px-6 py-4">{servicio.precio}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-500 hover:underline"
                    onClick={() =>
                      handleActualizar(
                        servicio.id,
                        servicio.nombre,
                        servicio.salon,
                        servicio.descripcion,
                        servicio.horario,
                        servicio.precio
                      )
                    }
                  >
                    Actualizar
                  </a>
                  <a href="#"
                    onClick={showModal}
                    className="ml-8 font-medium text-red-500 hover:underline"
                  >
                    Eliminar
                  </a>
                  <Modal
                    onConfirm={() => {
                      handleClickEl(salon);
                      showModal();
                    }}
                    isVisible={isModalVisible}
                    onClose={showModal}
                    message="¿Estás seguro de eliminar el servicio?"
                  />
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServiciosEst;