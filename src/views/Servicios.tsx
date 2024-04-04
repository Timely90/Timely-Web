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

function Servicios() {

  const navigate = useNavigate();

  const tokens = localStorage.getItem("ACCESS_TOKEN");

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
        {tokens ? <HeaderSesion /> : <Header />}
        <Section
          tittle="Servicios"
          description="Bienvenido a mi colección de estilos, donde la creatividad y la experiencia se fusionan para ofrecerte una transformación única."
        />
      </div>
      <Footer />
    </div>

  );
}

export default Servicios;
