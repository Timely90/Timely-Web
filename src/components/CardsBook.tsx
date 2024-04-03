import { useEffect, useState } from "react";
import { obtenerCategorias, obtenerLibros } from "../validation/getValidation";
import { ModalCard } from "./modalCard";

function CardsBook() {

  const [categories, setCategories] = useState<
    {
      id: number;
      name: string;
      description: string;
    }[]
  >([]);

  useEffect(() => {
    obtenerCategorias()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const [filter, setFilter] = useState("");

  const [books, setBooks] = useState<
    {
      id: number;
      name: string;
      categories: string;
      description: string;
      price: number;
      linkCompra: string;
      linkLeer: string;
      linkEscuchar: string;
      linkImagen: string;
    }[]
  >([]);

  useEffect(() => {
    obtenerLibros()
      .then((data) => {
        const filteredBooks = data.map((book: any) => ({
          ...book
        })).filter((book: any) =>
          book.categories.includes(selectedCategory) &&
          book.name.toLowerCase().includes(filter.toLowerCase())
        );

        setBooks(filteredBooks);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedCategory, filter]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [libros, setlibros] = useState();

  const obtener = (livre: any) => {
    setlibros(livre);
  };

  const token = localStorage.getItem("ACCESS_TOKEN");

  return (
    <div>
      <div className="flex-grow bg-gray-900 ml-4 mr-4">
        <form className="max-w-xl mx-auto">
          <div className="flex">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>

            <div className="relative">
              <select
                id="category-select"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              >
                <option value="">Categorias</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name.toString()}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative w-full">
              <input value={filter}
                onChange={handleFilterChange} type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Categorías y libros" required />
            </div>

          </div>
        </form>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-10 ml-4 mr-4">

        {books.length === 0 ? (
          <div className="flex items-center h-full">
            <p className="mr-4 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-3xl text-white">
              Cargando los libros...
            </p>
            <svg
              aria-hidden="true"
              className="mb-2 w-10 h-10 mr-2 animate-spin text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        ) : (
          books.map((book, index) => (
            <div
              key={index}
              className=" hover:bg-gray-700 w-full max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700 h-full"
            >
              <div>
                <img
                  className="rounded-t-lg h-80 w-full"
                  src={book.linkImagen}
                />
              </div>
              <div className="px-5 pb-5">
                <div>
                  <h5 className="text-xl font-semibold tracking-tight  text-white">
                    {book.name}
                  </h5>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-white">
                    ${book.price.toLocaleString()}
                  </span>

                  {token ? (
                    <div
                      className="cursor-pointer text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                      onClick={() => {
                        toggleModal();
                        obtener(book);
                      }}
                    >
                      Ver
                    </div>
                  ) : (
                    <div
                      className="cursor-pointer text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-green-800"
                    >
                      <a href="/starkbook-sesion">Ver</a>
                    </div>
                  )}


                </div>
              </div>
            </div>
          ))
        )}

        <ModalCard set={libros} isOpen={isOpen} toggleModal={toggleModal} />

      </div>

    </div>

  );
}

export default CardsBook;
