import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Salon() {
  const token = localStorage.getItem("ACCESS_TOKEN");
  const roles = localStorage.getItem("USER_SESSION");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/timely-empresas");
    } else if (roles) {
      const userSession = JSON.parse(roles);
      const rol = userSession.rol;
      if (rol === "cliente") {
        navigate("/timely-empresas");
      }
    }
  }, [token, roles, navigate]);

  if (!token) {
    return null;
  }
  
  return (
    <div
      style={{ height: "91%" }}
      className="bg-white p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14 shadow-md"
    >
      <p style={{ textAlign: "center", fontSize: "2rem" }}>Salon</p>
    </div>
  );
}

export default Salon;