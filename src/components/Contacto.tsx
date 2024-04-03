import { Link } from "react-router-dom";

function Contacto() {
    return (
        <div>
            <section className="bg-gray-900 dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
                        Sobre mí
                    </h1>
                    <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-gray-200">
                        Como ingeniero en sistemas especializado en desarrollo web, desktop, mobile, inteligencia artificial y hacking, me complace darles la más cordial bienvenida al Proyecto Woody Jacques.

                        Un emprendimiento que se erige como una empresa dedicada a la creación de relatos inspiradores. Nos enorgullece fusionar la riqueza de la literatura, el cine y los personajes emblemáticos para motivar a las personas a alcanzar sus sueños.
                    </p>
                    <Link
                        to={`https://api.whatsapp.com/send?phone=18098820434&text=Hola quiero conversar con Woody Jacques.`}
                        target="_blank"
                    >
                        <button className="text-white bottom-2.5 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                            Contáctanos
                        </button>
                    </Link>
                </div>
                <div className="bg-gradient-to-b to-transparent from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
            </section>
        </div>
    );
}

export default Contacto;
