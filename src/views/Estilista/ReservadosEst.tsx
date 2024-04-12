import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleClickEl, obtenerReservaciones } from "../../validation/Reservaciones";
import { Modal } from "../../components/toast";

function ReservadosEst() {
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

  const [reserva, setReserva] = useState<
    { id: number; nombre: string; salon: string, descripcion: string, horario: string, precio: number, email: string }[]
  >([]);

  useEffect(() => {
    obtenerReservaciones()
      .then((data) => {
        console.log(data);
        setReserva(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className=" bg-white p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14 shadow-md">
      <div className="text-black text-2xl mb-4 p-4 rounded-lg shadow-lg bg-gray-200 flex items-center justify-between">
        <p className="text-center">Reservados</p>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
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
                Cliente
              </th>
              <th scope="col" className="px-6 py-3">
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
            {reserva.map((reser, index) => (
              <tr
                key={index}
                className=" border-b bg-gray-900 border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-white"
                >
                  {reser.nombre}
                </th>

                <td className="px-6 py-4">{reser.salon}</td>
                <td className="px-6 py-4">{reser.descripcion}</td>
                <td className="px-6 py-4">{reser.horario}</td>
                <td className="px-6 py-4">{reser.precio}</td>
                <td className="px-6 py-4">{reser.email}</td>
                <td className="px-6 py-4">
                  <a href="#"
                    onClick={showModal}
                    className="ml-8 font-medium text-red-500 hover:underline"
                  >
                    Eliminar
                  </a>
                  <Modal
                    onConfirm={() => {
                      handleClickEl(reser);
                      showModal();
                    }}
                    isVisible={isModalVisible}
                    onClose={showModal}
                    message="¿Estás seguro de eliminar el salon?"
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

export default ReservadosEst;