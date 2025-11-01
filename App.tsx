import React, { useState } from 'react';

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
      clipRule="evenodd"
    />
  </svg>
);

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      return;
    }

    const baseURL = "https://i.maxthon.com/ru-ru.htm/corp/baseDados";
    // Construct the query string as specified, wrapping the search term in quotes using JSON.stringify
    const queryString = `{${JSON.stringify(searchTerm)}, "baseDados": "users", true}`;
    const encodedQuery = encodeURIComponent(queryString);
    const finalURL = `${baseURL}/?q=${encodedQuery}`;

    window.open(finalURL, "_blank");
    setSearchTerm(''); // Optional: clear input after search
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-blue-50 via-orange-50 to-pink-50 text-gray-800 p-4 font-sans">
      <main className="flex flex-col items-center justify-center text-center w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-3">
          ✨ Luz Interior ✨
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-md mb-8 px-2">
          Pesquise, reflita e encontre harmonia espiritual.
        </p>

        <form onSubmit={handleSearch} className="w-full max-w-xl px-4">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Digite sua pesquisa geral ou pentest..."
              className="w-full px-5 py-4 pr-16 text-lg border-2 border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center justify-center w-20 h-full text-white bg-indigo-600 rounded-r-full hover:bg-indigo-700 transition-colors duration-300 transform"
              aria-label="Search"
            >
              <SearchIcon className="w-6 h-6" />
            </button>
          </div>
        </form>

        <div className="mt-8 text-sm text-gray-500 max-w-xl text-center p-4 bg-white/50 rounded-lg shadow-sm">
          <p className="font-semibold">Como funciona:</p>
          <p className="mt-1">Sua pesquisa será formatada e enviada para uma base de dados específica para análise.</p>
          <p className="mt-3 font-mono bg-gray-100 p-2 rounded-md break-all text-xs">
            URL Base: https://i.maxthon.com/ru-ru.htm/corp/baseDados
          </p>
        </div>
      </main>

      <footer className="absolute bottom-5 text-sm text-gray-500">
        © 2025 Luz Interior
      </footer>
    </div>
  );
};

export default App;
