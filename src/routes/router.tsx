import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Sesion from "../views/sesion";
import Register from "../views/register";
import EmailPassword from "../views/emailPassword";
import Emailverifi from "../views/emailVerifi";
import Error404 from "../views/Error404";
import PasswordUpEmail from "../views/PasswordUpEmail";
import Servicios from "../views/Servicios";
import Salones from "../views/Salones";
import Perfil from "../views/Perfil";
import Admin from "../views/Admin";
import AuthGuard from "../guards/auth.guard";
import Salon from "../views/admin/Salon";
import PerfilAd from "../views/admin/PerfilAd";
import Empleados from "../views/admin/Empleados";
import Reservados from "../views/admin/Reservados";
import ServiciosAd from "../views/admin/ServiciosAd";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/timely-salones", element: <Salones /> },
  { path: "/timely-servicios", element: <Servicios /> },
  { path: "/timely-perfil", element: <Perfil /> },
  { path: "/timely-sesion", element: <Sesion /> },
  { path: "/timely-register", element: <Register /> },
  { path: "/timely-password", element: <EmailPassword /> },
  { path: "/timely-emailverifi", element: <Emailverifi /> },
  { path: "/timely-passwordupemail", element: <PasswordUpEmail /> },
  { path: "/timely-perfil", element: <Perfil /> },
  { path: "/authguard", element: <AuthGuard /> },
  { 
    path: "/", 
    element: <Admin />,
    children: [
      { path: "/timely-salon", element: <Salon /> },
      { path: "/timely-perfilad", element: <PerfilAd /> },
      { path: "/timely-empleados", element: <Empleados /> },
      { path: "/timely-reservados", element: <Reservados /> },
      { path: "/timely-serviciosad", element: <ServiciosAd /> },
    ]
  },
  { path: "*", element: <Error404 /> },
]);

export default router;
