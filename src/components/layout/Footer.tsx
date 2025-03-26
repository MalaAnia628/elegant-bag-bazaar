
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neobags-charcoal text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif mb-4">NeoBags</h3>
            <p className="text-gray-300 mb-4">
              Wyjątkowe torby na laptopy, które łączą elegancję z funkcjonalnością. Idealne dla współczesnych biznes women.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Nawigacja</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Kolekcja
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  O nas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Obsługa klienta</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Dostawa i zwroty
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Polityka prywatności
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Zapisz się, aby otrzymywać informacje o nowościach i promocjach.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Twój email"
                className="px-4 py-2 w-full outline-none rounded-l-md bg-white/10 text-white"
              />
              <button
                type="submit"
                className="bg-neobags-gold hover:bg-neobags-gold/90 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Zapisz
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 mt-4 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; {currentYear} NeoBags. Wszelkie prawa zastrzeżone.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
