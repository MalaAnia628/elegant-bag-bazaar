
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Filter } from "lucide-react";
import { products, materials, Product, Material } from "../utils/products";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/ui/ProductCard";
import MaterialFilter from "../components/ui/MaterialFilter";

const Products = () => {
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Parse URL query parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const materialParam = searchParams.get("material") as Material | null;
    
    if (materialParam && materials.some(m => m.id === materialParam)) {
      setSelectedMaterial(materialParam);
    } else {
      setSelectedMaterial(null);
    }
    
    setIsLoading(false);
  }, [location.search]);

  // Filter products when material selection changes
  useEffect(() => {
    if (selectedMaterial) {
      setFilteredProducts(products.filter(product => product.material === selectedMaterial));
    } else {
      setFilteredProducts(products);
    }
  }, [selectedMaterial]);

  const handleMaterialChange = (material: Material | null) => {
    setSelectedMaterial(material);
    
    // Update URL
    const searchParams = new URLSearchParams(location.search);
    
    if (material) {
      searchParams.set("material", material);
    } else {
      searchParams.delete("material");
    }
    
    const newUrl = `${location.pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    window.history.pushState({}, '', newUrl);
  };

  return (
    <>
      <Helmet>
        <title>Kolekcja - NeoBags</title>
        <meta
          name="description"
          content="Odkryj wyjątkowe torby na laptopy NeoBags, zaprojektowane dla nowoczesnych biznes women."
        />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16 page-transition">
        <section className="py-8 md:py-12 bg-neobags-cream/40">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">
                Nasza kolekcja
              </h1>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Odkryj nasze eleganckie torby na laptopy, wykonane z najwyższej jakości materiałów,
                łączące styl z funkcjonalnością dla współczesnych biznes women.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex lg:hidden items-center justify-between mb-6">
              <div className="flex items-center">
                <span className="font-medium">Produkty: {filteredProducts.length}</span>
              </div>
              <button
                onClick={() => setIsFilterVisible(!isFilterVisible)}
                className="flex items-center text-gray-800 hover:text-neobags-gold transition-colors"
              >
                <Filter size={18} className="mr-2" />
                <span>Filtry</span>
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters */}
              <aside className={`w-full lg:w-64 ${isFilterVisible ? 'block' : 'hidden'} lg:block`}>
                <div className="sticky top-24 bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-6 lg:hidden">
                    <h2 className="text-lg font-medium">Filtry</h2>
                    <button
                      onClick={() => setIsFilterVisible(false)}
                      className="text-gray-500 hover:text-neobags-charcoal"
                    >
                      ✕
                    </button>
                  </div>

                  <MaterialFilter
                    selectedMaterial={selectedMaterial}
                    onChange={handleMaterialChange}
                  />

                  {selectedMaterial && (
                    <button
                      onClick={() => handleMaterialChange(null)}
                      className="w-full py-2 text-sm text-neobags-charcoal border border-neobags-charcoal rounded hover:bg-neobags-charcoal hover:text-white transition-colors"
                    >
                      Wyczyść filtry
                    </button>
                  )}
                </div>
              </aside>

              {/* Products Grid */}
              <div className="flex-grow">
                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                      <div key={index} className="animate-pulse">
                        <div className="bg-gray-200 aspect-[4/5] rounded-lg mb-4"></div>
                        <div className="h-5 bg-gray-200 rounded-full w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
                      </div>
                    ))}
                  </div>
                ) : filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                    <h3 className="text-xl font-serif mb-2">Brak produktów</h3>
                    <p className="text-gray-600 mb-6">
                      Nie znaleziono produktów spełniających podane kryteria.
                    </p>
                    <button
                      onClick={() => handleMaterialChange(null)}
                      className="btn-outline"
                    >
                      Wyczyść filtry
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Products;
