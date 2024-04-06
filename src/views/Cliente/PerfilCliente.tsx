import { useEffect } from "react";
import Footer from "../../components/Footer";
import { Section } from "../../components/Section";
import Header from "../../components/header";
import HeaderSesion from "../../components/headerSesion";
import { useNavigate } from "react-router-dom";

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
    }
  }, [token, roles, navigate]);

  if (!token) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow">
        {token ? <HeaderSesion /> : <Header />}
        <Section
          tittle="Perfil"
          description="Puedes modificar sus datos y ver sus reservaciones."
        />
      </div>
      <Footer />
    </div>

  );
}

export default PerfilCliente;
