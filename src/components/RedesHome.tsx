import { Link } from "react-router-dom";

function RedesHome() {
  return (
    <div className="mb-10 mt-10">
      <div className="w-full p-4 text-center border rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
        <h5 className="mb-2 text-3xl font-bold text-white">Redes sociales</h5>
        <p className="mb-5 text-base sm:text-lg text-white">
          "Síguenos en todas las redes sociales para mantenerte al día con las
          novedades y contenido exclusivo."
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <Link
            to={`https://api.whatsapp.com/send?phone=18096760675&text=Quiero contactarme con Timely.`}
            className=" w-full text-white sm:w-auto focus:ring-4 focus:outline-none  rounded-lg inline-flex items-center justify-center px-4 py-2.5 bg-green-700 hover:bg-green-600 focus:ring-green-700"
            target="_blank"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png"
              alt=""
              className="mr-3 w-7 h-7"
            />
            <div className="text-left">
              <div className=" mb-1 text-xs">Novedades</div>
              <div className=" -mt-1 font-sans text-sm font-semibold">
                Whats App
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RedesHome;
