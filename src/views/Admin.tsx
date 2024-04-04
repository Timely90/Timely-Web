import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
    const navigate = useNavigate();
    const token = localStorage.getItem("ACCESS_TOKEN");

    useEffect(() => {
        if (!token) {
            navigate("/timely-empresas");
            return;
        }

        const roles = localStorage.getItem("USER_SESSION");
        if (roles) {
            const userSession = JSON.parse(roles);
            const rol = userSession.rol;
            if (rol === "cliente") {
                navigate("/timely-empresas");
                return;
            }
        }
    }, [token, navigate]);


    return (
        <div className="flex flex-col min-h-screen bg-purple-400">
            <div>Admin</div>
        </div>
    );
}

export default Admin;
