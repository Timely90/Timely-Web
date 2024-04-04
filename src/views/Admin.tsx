// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Admin() {
//     const navigate = useNavigate();
//     const token = localStorage.getItem("ACCESS_TOKEN");

//     useEffect(() => {
//         if (!token) {
//             navigate("/timely-empresas");
//             return;
//         }

//         const roles = localStorage.getItem("USER_SESSION");
//         if (roles) {
//             const userSession = JSON.parse(roles);
//             const rol = userSession.rol;
//             if (rol === "cliente") {
//                 navigate("/timely-empresas");
//                 return;
//             }
//         }
//     }, [token, navigate]);


//     return (
//         <div className="flex flex-col min-h-screen bg-purple-400">
//             <div>Admin</div>
//         </div>
//     );
// }

// export default Admin;


import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Modal } from "../components/toast";
// import { useAppDispatch } from "../app/hooks";
// import { logoutUser } from "../utilities/authenticateUser";
// import { Modal } from "../components/Toast";

function Admin() {
    const userSession = localStorage.getItem("USER_SESSION");

    //   const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [user, setuser] = useState({ nombre: null, correo: null });
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isAsideOpen, setIsAsideOpen] = useState(false);

    const toggleDropdown = () => {
        if (isDropdownVisible === false) {
            setIsDropdownVisible(true);
            setIsAsideOpen(false);
        } else {
            setIsDropdownVisible(false);
        }
    };

    const toggleAside = () => {
        setIsAsideOpen(!isAsideOpen);
        setIsDropdownVisible(false);
    };

    useEffect(() => {
        if (userSession) {
            const user = JSON.parse(userSession);
            setuser(user);
        } else {
            return navigate("/login");
        }
    }, [userSession, navigate]);

    const logOut = () => {
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("USER_SESSION");
        navigate("/timely-sesion");
    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-md">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button
                                onClick={toggleAside}
                                data-drawer-target="logo-sidebar"
                                data-drawer-toggle="logo-sidebar"
                                aria-controls="logo-sidebar"
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100focus:outline-none focus:ring-2 focus:ring-gray-200dark:text-gray-400 dark:hover:bg-gray-700dark:focus:ring-gray-600"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    ></path>
                                </svg>
                            </button>
                            <Link to="/" className="flex ml-2 md:mr-24">
                                <img
                                    src="https://res.cloudinary.com/dwc8h9wfn/image/upload/v1712240342/6094941_gmrpss.png"
                                    className="h-8 mr-3"
                                    alt="FlowBite Logo"
                                />
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-black">
                                    {" "}
                                    Timely{" "}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${isAsideOpen ? "" : "-translate-x-full"
                    } bg-white border-r border-gray-200 sm:translate-x-0 shadow-md`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
                    <ul className="space-y-2 font-medium">

                        <li>
                            <NavLink
                                to="/adminpayments"
                                className={`flex items-center p-2 text-black rounded-lg hover:bg-gray-300 `}
                                onClick={toggleAside}
                            >
                                <svg
                                    aria-hidden="true"
                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                    >
                                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Recibos</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/adminregistrations"
                                className={`flex items-center p-2 text-black rounded-lg hover:bg-gray-300 `}
                                onClick={toggleAside}
                            >
                                <svg
                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    Inscripciones
                                </span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/adminperiods"
                                className={`flex items-center p-2 text-black rounded-lg hover:bg-gray-300`}
                                onClick={toggleAside}
                            >
                                <svg
                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Períodos</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/adminsubjects"
                                className={`flex items-center p-2 text-black rounded-lg hover:bg-gray-300`}
                                onClick={toggleAside}
                            >
                                <svg
                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    Asignaturas
                                </span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/adminclassrooms"
                                className={`flex items-center p-2 text-black rounded-lg hover:bg-gray-300`}
                                onClick={toggleAside}
                            >
                                <svg
                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Aulas</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/adminsections"
                                className={`flex items-center p-2 text-black rounded-lg hover:bg-gray-300 `}
                                onClick={toggleAside}
                            >
                                <svg
                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"></path>
                                </svg>

                                <span className="flex-1 ml-3 whitespace-nowrap">Secciones</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/adminpoma"
                                className={`flex items-center p-2 text-black rounded-lg hover:bg-gray-300 `}
                                onClick={toggleAside}
                            >
                                <svg
                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                    <path
                                        fill-rule="evenodd"
                                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Poma</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="#"
                                className="flex items-center p-2 text-black rounded-lg hover:bg-gray-300"
                                onClick={showModal}
                            >
                                <svg
                                    aria-hidden="true"
                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Salir</span>
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </aside>

            <Modal
                onConfirm={() => {
                    logOut();
                    showModal();
                }}
                isVisible={isModalVisible}
                onClose={showModal}
                message="¿Estás seguro de cerrar sesión?"
            />

            <div
                className="p-4 sm:ml-64"
                style={{
                    background: "white",
                    height: "120vh",
                }}
            >
                <Outlet />
            </div>
        </>
    );
}

export default Admin;