import { Link } from "react-router-dom";

function CardHome() {
    const card = [
        {
            id: 1,
            enlace: "libros",
            name: "Libros",
            description: "Sumérgete en un mundo de aventuras, conocimiento y emociones con nuestra amplia selección de libros.",
            nameImage: "https://neuronup.com/wp-content/uploads/2023/03/benficios-de-la-lectura.jpg",
        },
        {
            id: 2,
            enlace: "peliculas",
            name: "Películas",
            description: "Embárcate en un viaje cinematográfico a través de mi selección de películas. Desde emocionantes aventuras hasta dramas conmovedores y comedias hilarantes, tenemos algo para cada gusto y estado de ánimo.",
            nameImage: "https://rccmedia.com.do/wp-content/uploads/2023/06/industria-del-cine.jpg",
        },
        {
            id: 3,
            enlace: "relatos",
            name: "Relatos",
            description: "Déjate cautivar por la magia de la narrativa con mi colección de relatos.",
            nameImage: "https://img.freepik.com/fotos-premium/pluma-tintero-escritorio_488220-35438.jpg",
        }

    ];

    return (
        <div className="flex flex-wrap justify-center gap-4 mt-10 ml-5 mr-5">
            {card.map((item) => (
                <div
                    key={item.id}
                    className="max-w-sm border rounded-lg shadow hover:shadow-lg  bg-gray-800 border-gray-700 transition duration-300"
                >
                    <Link to={`woody-${item.enlace.toLowerCase()}`}>
                        <img
                            className="rounded-t-lg"
                            src={item.nameImage}
                            alt={item.name}
                        />
                    </Link>
                    <div className="p-5">
                        <Link to={`woody-${item.enlace.toLowerCase()}`}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                                {item.name}
                            </h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-400">{item.description}</p>
                        <Link
                            to={`woody-${item.enlace}`}
                            className="text-white inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
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