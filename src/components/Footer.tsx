import { NavLink, Link } from "react-router-dom";

function Footer() {

    return (
        <footer className="rounded-lg shadow bg-gray-900 ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <NavLink to="/" className="flex items-center mb-4 sm:mb-0">
                        <img src="https://res.cloudinary.com/dwc8h9wfn/image/upload/v1712153542/logo_tezv2v.png" className="h-8 mr-3 rounded-full" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                            Timely
                        </span>
                    </NavLink>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
                        <li>
                            <Link target="_blank"
                                to="https://www.instagram.com/woody_jacques_/"
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank"
                                to="https://web.facebook.com/woody.jacques.10"
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                Facebook
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank"
                                to="https://www.youtube.com/channel/UCHaIPfJ7fi_fLiIbyD7xdqA"
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                Youtube
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank"
                                to="https://www.tiktok.com/@woodyjacques"
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                Tiktok
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank"
                                to="https://www.twitch.tv/woodyjacques"
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                Twitch
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank"
                                to="https://api.whatsapp.com/send?phone=18098820434"
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                Whats App
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <span className="block text-sm sm:text-center text-gray-400">
                    © 2024{" "}
                    <Link
                        to="https://www.tiktok.com/@woodyjacques"
                        className="hover:underline"
                        target="_blank"
                    >
                        Woody Jacques™
                    </Link>
                    . Todos los derechos reservados.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
