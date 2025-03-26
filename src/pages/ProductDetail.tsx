
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useToast } from "@/hooks/use-toast";
import { ShoppingBag, Heart, Share2 } from "lucide-react";
import { products, getColorLabel, Product } from "../utils/products";
import { useCart } from "../context/CartContext";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [currentImage, setCurrentImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    // Simulate data fetching
    setIsLoading(true);
    
    setTimeout(() => {
      const foundProduct = products.find((p) => p.id === id);
      
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedColor(foundProduct.colors[0]);
        setCurrentImage(foundProduct.images[0]);
      }
      
      setIsLoading(false);
    }, 500);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: `${product.id}-${selectedColor}`,
        productId: product.id,
        name: product.name,
        price: product.price,
        color: selectedColor,
        image: currentImage,
        quantity: 1,
      });
      
      toast({
        title: "Produkt dodany do koszyka",
        description: `${product.name} - ${getColorLabel(selectedColor)}`,
      });
    }
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleImageChange = (image: string) => {
    setCurrentImage(image);
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-16 container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 animate-pulse">
            <div className="md:w-1/2">
              <div className="bg-gray-200 aspect-square rounded-lg"></div>
              <div className="grid grid-cols-4 gap-2 mt-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-200 aspect-square rounded-lg"></div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="h-8 bg-gray-200 rounded-full w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded-full w-1/2 mb-8"></div>
              <div className="h-6 bg-gray-200 rounded-full w-1/4 mb-8"></div>
              <div className="space-y-4 mb-8">
                <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
              </div>
              <div className="h-12 bg-gray-200 rounded-lg w-full mb-4"></div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-16 container mx-auto px-4">
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-serif mb-2">Produkt nie został znaleziony</h2>
            <p className="text-gray-600 mb-8">
              Przepraszamy, ale produkt, którego szukasz, nie istnieje lub został usunięty.
            </p>
            <Link to="/products" className="btn-primary py-3 px-8 rounded-md">
              Wróć do sklepu
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} - NeoBags</title>
        <meta
          name="description"
          content={`${product.name} - elegancka torba na laptopa NeoBags. ${product.description}`}
        />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16 page-transition">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Images */}
            <div className="md:w-1/2">
              <div className="bg-gray-50 rounded-lg overflow-hidden mb-4">
                <img
                  src={currentImage}
                  alt={product.name}
                  className="w-full h-auto object-contain aspect-square"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageChange(image)}
                    className={`bg-gray-50 rounded-lg overflow-hidden aspect-square ${
                      currentImage === image ? "ring-2 ring-neobags-gold" : ""
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
            <div className="md:w-1/2">
              <div className="mb-6">
                <h1 className="text-3xl font-serif mb-2">{product.name}</h1>
                <p className="text-sm text-gray-500 mb-2">
                  Kolekcja: {product.collection}
                </p>
                <p className="text-2xl font-medium">{product.price} zł</p>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Kolor:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleColorChange(color)}
                      className={`w-8 h-8 rounded-full border ${
                        selectedColor === color ? "ring-2 ring-offset-2 ring-neobags-gold" : ""
                      }`}
                      style={{ backgroundColor: color }}
                      title={getColorLabel(color)}
                    ></button>
                  ))}
                </div>
                <p className="text-sm mt-2">
                  Wybrany kolor: <span className="font-medium">{getColorLabel(selectedColor)}</span>
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-medium mb-2">Opis:</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full btn-primary py-3 flex items-center justify-center"
                >
                  <ShoppingBag className="mr-2" size={18} />
                  Dodaj do koszyka
                </button>

                <div className="flex gap-4">
                  <button className="flex-1 btn-outline py-3 flex items-center justify-center">
                    <Heart className="mr-2" size={18} />
                    Ulubione
                  </button>
                  <button className="flex-1 btn-outline py-3 flex items-center justify-center">
                    <Share2 className="mr-2" size={18} />
                    Udostępnij
                  </button>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <h3 className="text-sm font-medium mb-3">Szczegóły:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Materiał: {product.material}</li>
                  <li>Wymiary: 36 x 26 x 5 cm</li>
                  <li>Mieści laptopy do 15"</li>
                  <li>Wodoodporna wyściółka</li>
                  <li>Wiele kieszeni wewnętrznych</li>
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

export default ProductDetail;
