import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/" className="flex items-center">
                    <img src="https://res.cloudinary.com/dol6yfeoi/image/upload/v1711906350/unnamed_ulj6qg.jpg" alt="" className="h-8 mr-3 rounded-full" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                        Woody
                    </span>
                </NavLink>

                <div className="flex md:order-2">
                    <button
                        onClick={toggleMenu}
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`${isMenuOpen ? "block" : "hidden"
                        } items-center justify-between w-full md:flex md:w-auto md:order-1`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
                        <li>
                            <NavLink
                                to="/"
                                className={`block py-2 pl-3 pr-4 rounded ${location.pathname === "/"
                                    ? "text-blue-700"
                                    : "md:hover:text-blue-500"
                                    } text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/woody-libros"
                                className={`block py-2 pl-3 pr-4 rounded ${location.pathname.includes("/woody-libros")
                                    ? "text-blue-700"
                                    : "md:hover:text-blue-500"
                                    } text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}
                            >
                                Libros
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/woody-peliculas"
                                className={`block py-2 pl-3 pr-4 rounded ${location.pathname === "/woody-peliculas"
                                    ? "text-blue-700"
                                    : "md:hover:text-blue-500"
                                    } text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}
                            >
                                Películas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/woody-relatos"
                                className={`block py-2 pl-3 pr-4 rounded ${location.pathname === "/woody-relatos"
                                    ? "text-blue-700"
                                    : "md:hover:text-blue-500"
                                    } text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}
                            >
                                Relatos
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/woody-sesion"
                                className={`block py-1 pl-2 pr-2 rounded ${location.pathname === "/woody-sesion"
                                    ? "text-white"
                                    : "md:hover:text-white"
                                    } text-white bg-blue-600 hover:bg-blue-700 hover:text-white border-gray-700 my-1`}
                            >
                                Sesión
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/woody-register"
                                className={`block py-1 pl-2 pr-2 rounded ${location.pathname === "/woody-register"
                                    ? "text-white"
                                    : "md:hover:text-white"
                                    } text-white bg-blue-600 hover:bg-blue-700 hover:text-white border-gray-700 my-1`}
                            >
                                Registrate
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}

export default Header;

