import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { Section } from "../components/Section";
import Header from "../components/header";
import HeaderSesion from "../components/headerSesion";
import { useEffect } from "react";

function Salones() {

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
          tittle="Salones"
          description="¡Bienvenido a mi salón de estilismo! Sumérgete en un mundo de creatividad y tendencias que te llevarán a través de transformaciones emocionantes, estilos conmovedores y looks irresistiblemente divertidos."
        />
      </div>
      <Footer />
    </div>

  );
}

export default Salones;
