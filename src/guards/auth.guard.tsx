import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const AuthGuard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isRedirected, setIsRedirected] = useState(false);

  useEffect(() => {
    const userSession = localStorage.getItem("USER_SESSION");
    if (!userSession) {
      navigate("/timely-sesion");
      return;
    }

    const user = JSON.parse(userSession);
    setUser(user);
  }, [navigate]);

  useEffect(() => {
    if (user && !isRedirected) {
      const redirectRoutes = {
        "estilista": "/timely-servicios-estilista",
        "cliente": "/timely-salones-cliente",
        "administrador": "/timely-salones-cliente",
      };

      const { rol, verificado } = user;
      if (rol && !verificado && redirectRoutes[rol]) {
        setIsRedirected(true);
        navigate(redirectRoutes[rol]);
      } 
    }
  }, [user, isRedirected, navigate]);

  return <></>;
};

export default AuthGuard;