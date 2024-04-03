import { Link } from "react-router-dom";

function RedesHome() {
    return (
        <div className="mb-10 mt-10">
            <div className="w-full p-4 text-center border rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
                <h5 className="mb-2 text-3xl font-bold text-white">
                    Mis redes sociales
                </h5>
                <p className="mb-5 text-base sm:text-lg text-gray-400">
                    "Sígueme en todas las redes sociales para mantenerte al día con las novedades y contenido exclusivo."
                </p>
                <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">

                    <Link
                        to="https://www.instagram.com/woody_jacques_/"
                        className="w-full sm:w-auto focus:ring-4 focus:outline-none text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 hover:from-purple-800 hover:via-pink-700 hover:to-red-700 focus:ring-red-700"
                        target="_blank"
                    >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" className="mr-3 w-7 h-7" />
                        <div className="text-left">
                            <div className="mb-1 text-xs">Sígueme</div>
                            <div className="-mt-1 font-sans text-sm font-semibold">
                                Instagram
                            </div>
                        </div>
                    </Link>

                    <Link
                        to="https://web.facebook.com/woody.jacques.10"
                        className="w-full text-white sm:w-auto focus:ring-4 focus:outline-none  rounded-lg inline-flex items-center justify-center px-4 py-2.5 bg-blue-700 hover:bg-blue-600 focus:ring-blue-700"
                        target="_blank"
                    >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png" alt="" className="mr-3 w-7 h-7" />
                        <div className="text-left">
                            <div className="mb-1 text-xs">Novedades</div>
                            <div className="-mt-1 font-sans text-sm font-semibold">
                                Facebook
                            </div>
                        </div>
                    </Link>

                    <Link
                        to="https://www.youtube.com/channel/UCHaIPfJ7fi_fLiIbyD7xdqA"
                        className="w-full text-white sm:w-auto focus:ring-4 focus:outline-none  rounded-lg inline-flex items-center justify-center px-4 py-2.5 bg-red-700 hover:bg-red-600 focus:ring-red-700"
                        target="_blank"
                    >
                        <img src="https://cdn.icon-icons.com/icons2/2232/PNG/512/youtube_logo_icon_134601.png" alt="" className="mr-3 w-7 h-7" />
                        <div className="text-left">
                            <div className="mb-1 text-xs">Suscríbete</div>
                            <div className="-mt-1 font-sans text-sm font-semibold">
                                Youtube
                            </div>
                        </div>
                    </Link>

                    <Link
                        to="https://www.tiktok.com/@woodyjacques"
                        className="w-full text-white sm:w-auto focus:ring-4 focus:outline-none  rounded-lg inline-flex items-center justify-center px-4 py-2.5 bg-gray-700 hover:bg-gray-600 focus:ring-gray-700"
                        target="_blank"
                    >
                        <img src="https://www.pagetraffic.com/blog/wp-content/uploads/2022/06/new-latest-tiktok-logo-png.png" alt="" className="mr-3 w-7 h-7" />
                        <div className="text-left">
                            <div className="mb-1 text-xs">Sígueme</div>
                            <div className="-mt-1 font-sans text-sm font-semibold">
                                Tiktok
                            </div>
                        </div>
                    </Link>

                    <Link
                        to="https://www.twitch.tv/woodyjacques"
                        className="w-full text-white sm:w-auto focus:ring-4 focus:outline-none  rounded-lg inline-flex items-center justify-center px-4 py-2.5 bg-violet-700 hover:bg-violet-600 focus:ring-violet-700"
                        target="_blank"
                    >
                        <img src="https://raw.githubusercontent.com/github/explore/e9b60076c672159b441c7054f765635a5a30683a/topics/twitch/twitch.png" alt="" className="mr-3 w-7 h-7" />
                        <div className="text-left">
                            <div className="mb-1 text-xs">Suscríbete</div>
                            <div className="-mt-1 font-sans text-sm font-semibold">
                                Twitch
                            </div>
                        </div>
                    </Link>



                </div>
            </div>
        </div>
    );
}

export default RedesHome;
