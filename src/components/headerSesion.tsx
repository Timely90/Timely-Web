import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "./toast";

function HeaderSesion() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const logOut = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("USER_SESSION");
    navigate("/timely-sesion");
  };

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://timely12.netlify.app/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://res.cloudinary.com/dwc8h9wfn/image/upload/v1712240342/6094941_gmrpss.png"
              className="h-8"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap" />
            Timely
            <span />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button" onClick={showModal}
              className="text-white bg-purple-400 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-500 font-medium rounded-lg text-sm px-4 py-2 text-center "
            >
              Salir
            </button>
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
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a
                  href="/timely-salones-cliente"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-purple-500 md:hover:bg-transparent md:hover:text-purple-500 md:p-0"
                >
                  Salones
                </a>
              </li>
              <li>
                <a
                  href="/timely-servicios-cliente"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-purple-500 md:hover:bg-transparent md:hover:text-purple-500 md:p-0"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="/timely-perfil-cliente"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-purple-500 md:hover:bg-transparent md:hover:text-purple-500 md:p-0"
                >
                  Perfil
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal
        onConfirm={() => {
          logOut();
          showModal();
        }}
        isVisible={isModalVisible}
        onClose={showModal}
        message="¿Estás seguro de cerrar sesión?"
      />
    </div>

  );
}

export default HeaderSesion;

