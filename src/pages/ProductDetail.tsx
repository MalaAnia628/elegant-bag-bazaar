
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Minus, Plus, ShoppingBag } from "lucide-react";
import { Helmet } from "react-helmet";
import { getProductById, getColorLabel, Product } from "../utils/products";
import { useCart } from "../context/CartContext";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [fadeIn, setFadeIn] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    if (id) {
      const fetchedProduct = getProductById(id);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        setSelectedColor(fetchedProduct.colors[0]); // Default to first color
      }
      setLoading(false);
      
      // Trigger animation after component mounts
      setTimeout(() => {
        setFadeIn(true);
      }, 100);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product && selectedColor) {
      addItem(product, selectedColor);
    }
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-32 flex justify-center items-center">
          <div className="loading-shimmer h-6 w-32 rounded"></div>
        </div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-serif mb-4">Produkt nie znaleziony</h2>
          <Link to="/products" className="btn-primary">
            Wróć do kolekcji
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${product.name} - NeoBags`}</title>
        <meta name="description" content={product.description.substring(0, 160)} />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16 page-transition">
        <div className="container mx-auto px-4">
          <Link 
            to="/products" 
            className="inline-flex items-center text-gray-600 hover:text-neobags-charcoal mb-8 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            <span>Powrót do kolekcji</span>
          </Link>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
            {/* Product Images */}
            <div>
              <div className="mb-4 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-auto object-cover transition-transform duration-500 transform hover:scale-105"
                />
              </div>
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-md overflow-hidden w-20 h-20 border-2 transition-all ${
                      selectedImage === index
                        ? "border-neobags-gold"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - widok ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="bg-neobags-cream/30 inline-block px-3 py-1 rounded-full text-sm mb-4">
                Kolekcja {product.collection}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-serif mb-4">{product.name}</h1>
              
              <div className="text-2xl font-medium mb-6">{product.price} zł</div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Kolor: {getColorLabel(selectedColor)}</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border transition-all ${
                        selectedColor === color
                          ? "ring-2 ring-neobags-gold ring-offset-2"
                          : "border-gray-300"
                      }`}
                      style={{
                        backgroundColor: getColorBackground(color),
                      }}
                      title={getColorLabel(color)}
                    >
                      {selectedColor === color && (
                        <span className="flex items-center justify-center h-full">
                          <Check 
                            size={14} 
                            className={color === 'black' || color === 'navy' || color === 'burgundy' ? 'text-white' : 'text-neobags-charcoal'} 
                          />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center mb-6">
                <span className="text-sm font-medium mr-4">Ilość:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={decrementQuantity}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 border-l border-r border-gray-300">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="btn-primary flex items-center justify-center"
              >
                <ShoppingBag className="mr-2" size={18} />
                <span>Dodaj do koszyka</span>
              </button>

              {/* Features */}
              <div className="mt-10">
                <h3 className="text-lg font-medium mb-4">Cechy produktu</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-neobags-gold mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

// Helper function to get background color based on color name
const getColorBackground = (color: string): string => {
  const colorMap: Record<string, string> = {
    black: '#000000',
    brown: '#795548',
    navy: '#0a192f',
    burgundy: '#800020',
    beige: '#e8e0d5',
    grey: '#9e9e9e',
  };
  return colorMap[color] || color;
};

export default ProductDetail;
