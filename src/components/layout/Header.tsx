import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          CatálogoApp
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/#categories" className="text-gray-600 hover:text-blue-600">
                Categorías
              </Link>
            </li>
            <li>
              <Link href="/#ofertas" className="text-gray-600 hover:text-blue-600">
                Ofertas
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
