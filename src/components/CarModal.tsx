import "../css/styles.css";

function CarModal(props: any) {

    const { ...restOfOffers } = props.setOfertas;

    return (
        <div>
            {Object.keys(restOfOffers).map((key) => (
                <div key={key}></div>
            ))}
            <div id="controls-carousel" className="relative w-full"
                data-carousel="static" >
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <div className="carousel-item active">
                        <img
                            src={restOfOffers.linkImagen}
                            className="rounded-lg absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-2">
                <div className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl border-gray-700 bg-gray-800 ">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                            {restOfOffers.name}
                        </h5>
                        <p className="mb-3 font-normal text-gray-400">
                            {restOfOffers.description}
                        </p>
                        <div className="flex ">
                            <p className="flex-1 mr-2 mb-3 font-normal text-white">
                                Precio {restOfOffers.price.toLocaleString()} $
                            </p>
                        </div>

                        {restOfOffers.linkLeer && (
                            <a href={restOfOffers.linkLeer} target="_blank" className="text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                Leer
                            </a>
                        )}

                        {restOfOffers.linkEscuchar && (
                            <a href={restOfOffers.linkEscuchar} target="_blank" className="text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                Escuchar
                            </a>
                        )}

                        <div className="flex justify-between">
                            {restOfOffers.linkCompra && (
                                <a href={restOfOffers.linkCompra} target="_blank" className="text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                    Comprar
                                </a>
                            )}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarModal;

