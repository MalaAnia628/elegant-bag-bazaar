
import { Helmet } from 'react-helmet';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/ui/HeroSection';
import FeaturedProducts from '../components/ui/FeaturedProducts';
import { materials, Material } from '../utils/products';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NeoBags - Eleganckie torby na laptopy</title>
        <meta name="description" content="NeoBags - eleganckie torby na laptopy dla biznes women, łączące styl z funkcjonalnością" />
      </Helmet>

      <Navbar />
      
      <main className="page-transition">
        <HeroSection />
        
        <FeaturedProducts />
        
        <section className="py-16 md:py-24 bg-neobags-cream/60">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block mb-3 px-4 py-1 bg-white text-neobags-charcoal rounded-full text-sm font-medium">
                Nasze materiały
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
                Wyjątkowe materiały, ponadczasowy styl
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nasze torby są wykonane z starannie wyselekcjonowanych materiałów, łączących elegancję z funkcjonalnością.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {materials.slice(0, 3).map((material, index) => (
                <Link 
                  key={material.id}
                  to={`/products?material=${material.id}`}
                  className="glass-card overflow-hidden group relative p-6 transition-all duration-300 hover:shadow-md animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-serif mb-2">{material.name}</h3>
                  <p className="text-gray-600 mb-4">{material.description}</p>
                  <div className="inline-flex items-center text-neobags-charcoal group-hover:text-neobags-gold transition-colors">
                    <span className="mr-2 font-medium">Zobacz torby</span>
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link to="/products" className="btn-outline">
                Zobacz wszystkie materiały
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-neobags-charcoal opacity-90 z-0"></div>
          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <span className="inline-block mb-3 px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium animate-fade-in">
              NeoBags
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 max-w-2xl mx-auto animate-fade-up">
              Elegancja, która podkreśli Twój profesjonalizm
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Nasza marka tworzy wyjątkowe torby na laptopy, które łączą elegancję z funkcjonalnością, 
              idealnie dopasowane do potrzeb współczesnych biznes women.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center text-white border border-white/30 px-6 py-3 rounded-md hover:bg-white/10 transition-colors animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="mr-2">Poznaj naszą historię</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;
