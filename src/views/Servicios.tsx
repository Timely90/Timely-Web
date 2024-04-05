import { useEffect } from "react";
import Footer from "../components/Footer";
import { Section } from "../components/Section";
import Header from "../components/header";
import HeaderSesion from "../components/headerSesion";
import { useNavigate } from "react-router-dom";

function Servicios() {

  const token = localStorage.getItem("ACCESS_TOKEN");
  const roles = localStorage.getItem("USER_SESSION");

  const navigate = useNavigate();

  useEffect(() => {
    if (roles) {
      const userSession = JSON.parse(roles);
      const rol = userSession.rol;
      if (rol === "estilista") {
        navigate("/timely-salon");
      }
    }
  }, [ roles, navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow">
        {token ? <HeaderSesion /> : <Header />}
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
