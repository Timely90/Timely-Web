function Carousel() {
    return (
      <div>
        <section className=" bg-white bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
          <div className="px-8 mx-auto max-w-screen-xl text-center py-24 lg:py-56 z-10 relative">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
              Tienda de tecnología y electrodoméstico en Barahona.
            </h1>
            <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">
              Oportunidades únicas para ti, con grandes descuentos.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"></div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Carousel;
  