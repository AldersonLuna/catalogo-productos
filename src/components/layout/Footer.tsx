export const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CatálogoApp</h3>
              <p className="text-gray-300">
                Tu tienda online de confianza para encontrar los mejores productos.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-300 hover:text-white">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white">
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <address className="not-italic text-gray-300">
                <p>Calle Principal, 123</p>
                <p>Ciudad, País</p>
                <p className="mt-2">Email: info@catalogoapp.com</p>
                <p>Teléfono: +1 234 567 890</p>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CatálogoApp. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  };