import Header from "../components/header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { handleSubmitEmail } from "../validation/register";
import { FormEvent, useEffect, useState } from "react";

function EmailPassword() {

  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const token = localStorage.getItem("ACCESS_TOKEN");

  useEffect(() => {
    if (token) {
      navigate("/woody-libros");
    }
  }, [token, navigate]);

  if (token) {
    return null;
  }

  const handleSubmit = async (event: FormEvent) => {
    const emailData = await handleSubmitEmail(event, email, setEmail);

    if (emailData) {
      setTimeout(() => {
        navigate("/woody-emailverifi");
      }, 3000);
    }
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="flex-grow">
        <Header />
      </div>
      <div className="container flex flex-col mx-auto bg-gray-900 rounded-lg pt-14 h-screen">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="ml-2 mr-2 w-full h-full flex items-center xl:p-10">
              <form onSubmit={handleSubmit} className={`mx-auto flex flex-col pb-6 text-center bg-gray-900 rounded-3xl ${windowWidth < 768 ? 'w-full' : ''}`}>
                <h3 className="mb-3 text-4xl font-extrabold text-white">Recuperación</h3>
                <p className="mb-4 text-white">Ingrese tu correo</p>
                <p
                  id="MensajeErr"
                  className=" hidden text-red-500 text-sm font-medium rounded-lg text-center"
                ></p>
                <p
                  id="MensajeAct"
                  className=" hidden text-green-500 text-sm font-medium rounded-lg text-center"
                ></p>
                <label htmlFor="email" className="mb-2 text-sm text-start text-white">
                  Correo*
                </label>
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingresa su correo"
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded"
                />
                <button type="submit"
                  className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded hover:bg-blue-700 focus:ring-4 focus:ring-purple-blue-100 bg-blue-600"
                >
                  Continuar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EmailPassword;