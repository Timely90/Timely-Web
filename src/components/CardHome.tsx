import { Link } from "react-router-dom";

function CardHome() {
  const card = [
    {
      id: 1,
      enlace: "empresas",
      name: "Empresas",
      description:
        "Sumérgete en un mundo de estilo, innovación y transformación con nuestra amplia selección de servicios y tratamientos.",
      nameImage:
        "https://www.ufv.es/cetys/blog/wp-content/uploads/2023/04/peluqueria-peluqueria-mujeres-trabajos-peluqueria-campana-profesional-scaled.jpg",
    },
    {
      id: 2,
      enlace: "servicios",
      name: "Servicios",
      description:
        "Embárcate en un viaje estilístico a través de la selección de servicios. Desde cortes y peinados emocionantes hasta coloraciones impactantes y tratamientos relajantes, tenemos algo para cada estilo y necesidad.",
      nameImage:
        "https://www.ftccollege.edu/wp-content/uploads/2023/08/Cosmetologia.jpg",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10 ml-5 mr-5">
      {card.map((item) => (
        <div
          key={item.id}
          className="max-w-sm border rounded-lg shadow hover:shadow-lg bg-gray-800 border-gray-700 transition duration-300"
        >
          <Link to={`woody-${item.enlace.toLowerCase()}`}>
            <img
              className="rounded-t-lg"
              src={item.nameImage}
              alt={item.name}
            />
          </Link>
          <div className="p-5">
            <Link to={`timely-${item.enlace.toLowerCase()}`}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                {item.name}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-400">{item.description}</p>
            <Link
              to={`timely-${item.enlace}`}
              className="text-white inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-purple-400 bg-purple-400 hover:bg-purple-500 focus:ring-purple-500"
            >
              Ver más
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardHome;
