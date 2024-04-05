import { Link } from "react-router-dom";

export function Error404() {
  
  const token = localStorage.getItem("ACCESS_TOKEN");

  return (
    <div>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-black">
            Page not found
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-black">
            Lo sentimos, no pudimos encontrar la página que estas buscando.
          </p>

          {token ?  <Link to="/timely-empresas">
            <button className="text-black bottom-2.5 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 bg-purple-400 hover:bg-purple-500 focus:ring-purple-800">
              Ir a empresas
            </button>
          </Link> :  <Link to="/">
            <button className="text-black bottom-2.5 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 bg-purple-400 hover:bg-purple-500 focus:ring-purple-500">
              Ir a inicio
            </button>
          </Link>}

         

        </div>
        <div className="bg-gradient-to-b to-transparent from-purple-400 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>
    </div>
  );
}

export default Error404;
