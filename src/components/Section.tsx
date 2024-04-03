interface Sect {
    tittle: string;
    description: string;
  }
  
  export function Section({ tittle, description }: Sect) {
    return (
      <section className="bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-48 z-10 relative">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
            {tittle}
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-gray-200">
            {description}
          </p>
        </div>
      </section>
    );
  }
  