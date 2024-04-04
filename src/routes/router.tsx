import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Sesion from "../views/sesion";
import Register from "../views/register";
import EmailPassword from "../views/emailPassword";
import Emailverifi from "../views/emailVerifi";
import Error404 from "../views/Error404";
import PasswordUpEmail from "../views/PasswordUpEmail";
import Servicios from "../views/Servicios";
import Empresas from "../views/Empresas";
import Perfil from "../views/Perfil";
import Admin from "../views/Admin";
const router = createBrowserRouter([

  { path:"/", element: <Home /> },

  { path:"/timely-empresas", element: <Empresas /> },
  { path:"/timely-servicios", element: <Servicios /> },
  { path:"/timely-perfil", element: <Perfil /> },
  { path:"/timely-admin", element: <Admin /> },

  { path:"/timely-sesion", element: <Sesion /> },
  { path:"/timely-register", element: <Register /> },
  { path:"/timely-password", element: <EmailPassword /> },
  { path:"/timely-emailverifi", element: <Emailverifi /> },
  { path: "/timely-passwordupemail", element: <PasswordUpEmail /> },
  { path: "*", element: <Error404 /> },
]);

export default router;



