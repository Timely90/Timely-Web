import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
        navigate("/timely-estilistas-administrador");
      }
    }
  }, [token, roles, navigate]);

  if (!token) {
    return null;
  }

  return (
    <div className=" bg-white p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14 shadow-md">
      <div className="text-black text-2xl mb-4 p-4 rounded-lg shadow-lg bg-gray-200 flex items-center justify-between">
        <p className="text-center">Reservados</p>
      </div>
      </div>
  );
}

export default ReservadosEst;