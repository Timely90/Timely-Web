import { useEffect } from "react";
import Footer from "../components/Footer";
import { Section } from "../components/Section";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const token = localStorage.getItem("ACCESS_TOKEN");

  useEffect(() => {
    if (token) {
      navigate("/woody-libros");
    }
  }, [token, navigate]);

  if (token) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="flex-grow">
        <Header />
        <Section
          tittle="Timely"
          description="Conectando estilistas y clientes para crear looks increíbles juntos."
        />
      </div>
      {/* <CardHome />
      <RedesHome />
      <Contacto /> */}
      <Footer />
    </div>
  );
}

export default Home;
