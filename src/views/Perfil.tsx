import { useEffect } from "react";
import Footer from "../components/Footer";
import { Section } from "../components/Section";
import Header from "../components/header";
import HeaderSesion from "../components/headerSesion";
import { useNavigate } from "react-router-dom";

export interface UserData {
  name: string;
  email: string;
}

function Perfil() {

  const token = localStorage.getItem("ACCESS_TOKEN");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/timely-empresas");
    }
  }, [token, navigate]);

  if (!token) {
    return null;
  }

  const roles = localStorage.getItem("USER_SESSION");

  if (roles) {
    const userSession = JSON.parse(roles);
    const rol = userSession.rol;

    useEffect(() => {
      if (rol == "estilista") {
        navigate("/timely-admin");
      }
    }, [rol, navigate]);

    if (rol) {
      return null;
    }

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

export default Perfil;
