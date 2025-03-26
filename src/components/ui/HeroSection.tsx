
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neobags-cream to-neobags-sand opacity-60 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block mb-3 px-4 py-1 bg-neobags-gold/10 text-neobags-charcoal rounded-full text-sm font-medium animate-fade-in">
            Elegancja i funkcjonalność
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Wyjątkowe torby na laptopy dla współczesnych biznes women
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Odkryj kolekcję eleganckich, funkcjonalnych toreb, które podkreślą Twój profesjonalizm i unikalny styl.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/products" className="btn-primary flex items-center justify-center group">
              <span>Zobacz kolekcję</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/about" className="btn-outline">
              Poznaj naszą historię
            </Link>
          </div>
        </div>
      </div>
      
      <div className="hidden md:block absolute -right-16 top-1/2 transform -translate-y-1/2 w-96 h-96 bg-neobags-gold/10 rounded-full blur-3xl z-0"></div>
      <div className="hidden md:block absolute -left-20 bottom-0 w-80 h-80 bg-neobags-taupe/10 rounded-full blur-3xl z-0"></div>
    </section>
  );
};

export default HeroSection;
