import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { Section } from "../components/Section";
import Header from "../components/header";
import HeaderSesion from "../components/headerSesion";
import { useEffect } from "react";

export interface UserData {
  name: string;
  email: string;
  rol: string;
}

function Empresas() {

  const navigate = useNavigate();

  const tokens = localStorage.getItem("ACCESS_TOKEN");

  const roles = localStorage.getItem("USER_SESSION");

  if (roles) {
    const userSession = JSON.parse(roles);
    const rol = userSession.rol;
    console.log(rol);

    useEffect(() => {
      if (rol == "estilista") {
        navigate("/timely-salon");
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
          tittle="Empresas"
          description="¡Bienvenido a mi salón de estilismo! Sumérgete en un mundo de creatividad y tendencias que te llevarán a través de transformaciones emocionantes, estilos conmovedores y looks irresistiblemente divertidos."
        />
      </div>
      <Footer />
    </div>

  );
}

export default Empresas;
