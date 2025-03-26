
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '../../utils/products';

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState(products.slice(0, 3));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('featured-products');
      if (element) {
        const position = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (position.top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="featured-products" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block mb-3 px-4 py-1 bg-neobags-cream text-neobags-charcoal rounded-full text-sm font-medium">
            Nasza kolekcja
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Polecane produkty
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Odkryj nasze bestsellerowe torby, starannie wykonane z najwyższej jakości materiałów,
            które łączą elegancję z funkcjonalnością.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`transition-all duration-700 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '450ms' }}>
          <Link 
            to="/products" 
            className="inline-flex items-center text-neobags-charcoal hover:text-neobags-gold transition-colors"
          >
            <span className="mr-2 font-medium">Zobacz wszystkie produkty</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
