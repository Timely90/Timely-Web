import { Link } from "react-router-dom";

function Contacto() {
  return (
    <div>
      <section className="bg-gradient-to-b to-transparent from-red-500">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-gray-900">
            Sobre nosotros
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48">
            Se trata de una aplicación web de gestión de turnos automatizados,
            donde se le advertirá al cliente días de antelaciones a su
            reservación, esta idea fue concretizada en el año 2024, en la
            universidad de UCATEBA, y busca como objetivo establecerse en el
            mercado con su nueva y novedosa aplicación.
          </p>
          <Link
            to={`https://api.whatsapp.com/send?phone=18096760675&text=Hola quiero conversar con Woody Jacques.`}
            target="_blank"
          >
            <button className="text-white bottom-2.5 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 bg-red-400 hover:bg-red-500 focus:ring-red-500">
              Contáctanos
            </button>
          </Link>
        </div>
        <div className="bg-gradient-to-b to-transparent from-red-500 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>
    </div>
  );
}

export default Contacto;
