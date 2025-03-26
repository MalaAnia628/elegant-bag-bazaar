
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-serif font-medium tracking-wide transition-colors duration-300"
        >
          <span className={`${isScrolled ? 'text-neobags-charcoal' : 'text-neobags-charcoal'}`}>
            NeoBags
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">
            Strona główna
          </Link>
          <Link to="/products" className="nav-link">
            Kolekcja
          </Link>
          <Link to="/about" className="nav-link">
            O nas
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingBag
              size={22}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-neobags-charcoal' : 'text-neobags-charcoal'
              }`}
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-neobags-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link to="/cart" className="relative">
            <ShoppingBag
              size={22}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-neobags-charcoal' : 'text-neobags-charcoal'
              }`}
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-neobags-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`transition-colors duration-300 ${
              isScrolled ? 'text-neobags-charcoal' : 'text-neobags-charcoal'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="block py-2 text-neobags-charcoal font-medium border-b border-gray-100"
            >
              Strona główna
            </Link>
            <Link
              to="/products"
              className="block py-2 text-neobags-charcoal font-medium border-b border-gray-100"
            >
              Kolekcja
            </Link>
            <Link
              to="/about"
              className="block py-2 text-neobags-charcoal font-medium"
            >
              O nas
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
