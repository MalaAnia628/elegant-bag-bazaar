
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Helmet } from "react-helmet";
import { useCart } from "../context/CartContext";
import { getColorLabel } from "../utils/products";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Cart = () => {
  const [isOrdering, setIsOrdering] = useState(false);
  const { items, updateQuantity, removeItem, totalItems, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    setIsOrdering(true);
    setTimeout(() => {
      clearCart();
      setIsOrdering(false);
      // In a real application, this would redirect to a payment gateway
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>Koszyk - NeoBags</title>
        <meta name="description" content="Twój koszyk zakupowy NeoBags" />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16 page-transition">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-serif">Twój koszyk</h1>
            <Link
              to="/"
              className="inline-flex items-center text-gray-600 hover:text-neobags-charcoal transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              <span>Kontynuuj zakupy</span>
            </Link>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-16 animate-fade-up">
              <div className="w-16 h-16 bg-neobags-cream/60 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag size={28} className="text-neobags-charcoal" />
              </div>
              <h2 className="text-2xl font-serif mb-4">Twój koszyk jest pusty</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Wygląda na to, że nie dodałaś jeszcze żadnych produktów do koszyka.
              </p>
              <Link to="/products" className="btn-primary">
                Przeglądaj kolekcję
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-up">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6 border-b">
                    <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-500">
                      <div className="col-span-6">Produkt</div>
                      <div className="col-span-2">Cena</div>
                      <div className="col-span-2">Ilość</div>
                      <div className="col-span-2">Łącznie</div>
                    </div>
                  </div>

                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.color}`} className="p-6 border-b">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-6">
                          <div className="flex items-center">
                            <Link to={`/product/${item.product.id}`}>
                              <div className="w-16 h-16 rounded overflow-hidden mr-4">
                                <img
                                  src={item.product.images[0]}
                                  alt={item.product.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </Link>
                            <div>
                              <Link
                                to={`/product/${item.product.id}`}
                                className="font-medium hover:text-neobags-gold transition-colors"
                              >
                                {item.product.name}
                              </Link>
                              <div className="text-sm text-gray-500">
                                Kolor: {getColorLabel(item.color)}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-span-2">{item.product.price} zł</div>

                        <div className="col-span-2">
                          <div className="flex items-center">
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.color, item.quantity - 1)
                              }
                              disabled={item.quantity <= 1}
                              className="text-gray-500 hover:text-neobags-charcoal disabled:opacity-50"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.color, item.quantity + 1)
                              }
                              className="text-gray-500 hover:text-neobags-charcoal"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>

                        <div className="col-span-2">
                          <div className="flex items-center justify-between">
                            <span>{item.product.price * item.quantity} zł</span>
                            <button
                              onClick={() => removeItem(item.product.id, item.color)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                  <h2 className="text-xl font-serif mb-4">Podsumowanie</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Produkty ({totalItems}):</span>
                      <span>{totalPrice} zł</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dostawa:</span>
                      <span>0 zł</span>
                    </div>
                    <div className="border-t pt-3 mt-3 flex justify-between font-medium">
                      <span>Suma:</span>
                      <span>{totalPrice} zł</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={isOrdering}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {isOrdering ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Przetwarzanie...
                      </>
                    ) : (
                      <>
                        Zamów
                      </>
                    )}
                  </button>

                  <button
                    onClick={clearCart}
                    className="mt-4 w-full text-gray-500 hover:text-neobags-charcoal text-sm"
                  >
                    Wyczyść koszyk
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Cart;
