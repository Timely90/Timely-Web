import { Link } from "react-router-dom";

function Emailverifi() {
    return (
        <div>
            <section >
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-gray-900">
                        Verificación
                    </h1>
                    <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-gray-900">
                        Revise su correo electónico que le hemos enviado un link.
                    </p>
                    <Link to="/timely-sesion">
                        <button className="text-white bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-red-500 hover:bg-red-400 focus:ring-red-500">
                            Ir a sesión
                        </button>
                    </Link>
                </div>
                <div className="bg-gradient-to-b to-transparent from-red-400 w-full h-full absolute top-0 left-0 z-0"></div>
            </section>
        </div>
    );
}

export default Emailverifi;