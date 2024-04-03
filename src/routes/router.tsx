import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Sesion from "../views/sesion";
import Register from "../views/register";
import EmailPassword from "../views/emailPassword";
import Emailverifi from "../views/emailVerifi";
import Error404 from "../views/Error404";
import PasswordUpEmail from "../views/PasswordUpEmail";
import Peliculas from "../views/Peliculas";
import Libros from "../views/Libros";
import Relatos from "../views/Relatos";
const router = createBrowserRouter([
  { path:"/", element: <Home /> },

  { path:"/woody-libros", element: <Libros /> },
  { path:"/woody-peliculas", element: <Peliculas /> },
  { path:"/woody-relatos", element: <Relatos /> },

  { path:"/woody-sesion", element: <Sesion /> },
  { path:"/woody-register", element: <Register /> },
  { path:"/woody-password", element: <EmailPassword /> },
  { path:"/woody-emailverifi", element: <Emailverifi /> },
  { path: "/woody-passwordupemail", element: <PasswordUpEmail /> },
  { path: "*", element: <Error404 /> },
]);

export default router;



