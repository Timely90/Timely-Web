import { createBrowserRouter } from "react-router-dom";

// Views de general 
import Home from "../views/Home";
import Sesion from "../views/sesion";
import Register from "../views/register";
import EmailPassword from "../views/emailPassword";
import Emailverifi from "../views/emailVerifi";
import PasswordUpEmail from "../views/PasswordUpEmail";

// Views de verificacion
import AuthGuard from "../guards/auth.guard";
import Error404 from "../views/Error404";

// Views de clientes
import ServiciosCliente from "../views/Cliente/ServiciosCliente";
import SalonesCliente from "../views/Cliente/SalonesCliente";
import PerfilCliente from "../views/Cliente/PerfilCliente";

// Views de estilista
import PerfilEst from "../views/Estilista/PerfilEst";
import EmpleadosEst from "../views/Estilista/EmpleadosEst";
import ReservadosEst from "../views/Estilista/ReservadosEst";
import ServiciosEst from "../views/Estilista/ServiciosEst";
import EstilistaEst from "../views/Estilista/EstilistaEst";

// View de administrador
import AdminstradorAd from "../views/Admin/AdministradorAd";
import PerfilAd from "../views/Admin/PerfilAd";
import EstilistasAd from "../views/Admin/EstilistasAd";
import SalonesAd from "../views/Admin/SalonesAd";
import SecretarioSec from "../views/Secretario/SecretarioSec";
import PerfilSec from "../views/Secretario/PerfilSec";
import ReservadosSec from "../views/Secretario/ReservadosSec";
import ReservacionesCliente from "../views/Cliente/ReserCliente";

const router = createBrowserRouter([

  // Rutas generales
  { path: "/", element: <Home /> },
  { path: "/timely-sesion", element: <Sesion /> },
  { path: "/timely-register", element: <Register /> },
  { path: "/timely-password", element: <EmailPassword /> },
  { path: "/timely-emailverifi", element: <Emailverifi /> },
  { path: "/timely-passwordupemail", element: <PasswordUpEmail /> },

  // Rutas de cliente
  { path: "/timely-perfil-cliente", element: <PerfilCliente /> },
  { path: "/timely-salones-cliente", element: <SalonesCliente /> },
  { path: "/timely-servicios-cliente", element: <ServiciosCliente /> },
  { path: "/timely-reservaciones-cliente", element: <ReservacionesCliente /> },

  // Rutas de Estilista
  {
    path: "/",
    element: <EstilistaEst />,
    children: [
      { path: "/timely-perfil-estilista", element: <PerfilEst /> },
      { path: "/timely-empleados-estilista", element: <EmpleadosEst /> },
      { path: "/timely-reservados-estilista", element: <ReservadosEst /> },
      { path: "/timely-servicios-estilista", element: <ServiciosEst /> },
    ]
  },

  // Rutas de Secretario
  {
    path: "/",
    element: <SecretarioSec/>,
    children: [
      { path: "/timely-perfil-secretario", element: <PerfilSec /> },
      { path: "/timely-reservados-secretario", element: <ReservadosSec /> },
    ]
  },

  // Rutas de Administrador
  {
    path: "/",
    element: <AdminstradorAd />,
    children: [
      { path: "/timely-perfil-administrador", element: <PerfilAd /> },
      { path: "/timely-estilistas-administrador", element: <EstilistasAd /> },
      { path: "/timely-salones-administrador", element: <SalonesAd /> },
    ]
  },

  // Rutas de intervencion
  { path: "*", element: <Error404 /> },
  { path: "/authguard", element: <AuthGuard /> },
]);

export default router;
