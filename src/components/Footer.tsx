import { NavLink, Link } from "react-router-dom";

function Footer() {

    return (
        <footer className="rounded-lg shadow bg-white">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <NavLink to="https://timely12.netlify.app/" className="flex items-center mb-4 sm:mb-0">
                        <img src="https://res.cloudinary.com/dwc8h9wfn/image/upload/v1712240342/6094941_gmrpss.png" className="h-8 mr-3 rounded-full" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">
                            Timely
                        </span>
                    </NavLink>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-900">
                        <li>
                            <Link
                                to="/timely-salones-cliente"
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                Salones
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/timely-servicios-cliente"
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                Servicios
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <span className="block text-sm sm:text-center  text-gray-900">
                    © 2024{" "}
                    <Link
                        to="/"
                        className="hover:underline"
                        target="_blank"
                    >
                        Eliana™
                    </Link>
                    . Todos los derechos reservados.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
