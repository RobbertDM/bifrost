export default function Header({pageName}) {
  return (
          <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="text-xl font-bold tracking-tight text-gray-900"> {pageName} </h1>
          </div>
        </header>
  );
};

