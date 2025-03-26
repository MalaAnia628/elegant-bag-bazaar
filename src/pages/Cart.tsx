
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { X, ShoppingBag, ChevronUp, ChevronDown } from "lucide-react";
import { useCart } from "../context/CartContext";
import { getColorLabel } from "../utils/products";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, calculateTotal } = useCart();
  const [showEmptyConfirm, setShowEmptyConfirm] = useState(false);

  const handleQuantityChange = (itemId: string, currentQuantity: number, increase: boolean) => {
    const newQuantity = increase ? currentQuantity + 1 : Math.max(1, currentQuantity - 1);
    updateQuantity(itemId, newQuantity);
  };

  return (
    <>
      <Helmet>
        <title>Koszyk - NeoBags</title>
        <meta
          name="description"
          content="Twój koszyk zakupowy - NeoBags, eleganckie torby na laptopy"
        />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif mb-8 text-center md:text-left">
            Twój koszyk
          </h1>

          {cartItems.length > 0 ? (
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-medium">
                      {cartItems.length} {cartItems.length === 1 ? "produkt" : "produkty"}
                    </span>
                    <button
                      onClick={() => setShowEmptyConfirm(true)}
                      className="text-sm text-gray-500 hover:text-neobags-gold transition-colors"
                    >
                      Wyczyść koszyk
                    </button>
                  </div>

                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col sm:flex-row gap-4 py-4 border-b border-gray-100 last:border-0"
                      >
                        <div className="w-full sm:w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow flex flex-col">
                          <div className="flex justify-between mb-2">
                            <Link
                              to={`/product/${item.productId}`}
                              className="text-lg font-medium hover:text-neobags-gold transition-colors"
                            >
                              {item.name}
                            </Link>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              aria-label="Usuń z koszyka"
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <X size={18} />
                            </button>
                          </div>
                          <span className="text-sm text-gray-600 mb-1">
                            {getColorLabel(item.color)}
                          </span>
                          <div className="mt-auto flex justify-between items-center">
                            <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
                              <button
                                onClick={() =>
                                  handleQuantityChange(item.id, item.quantity, false)
                                }
                                className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                              >
                                <ChevronDown size={16} />
                              </button>
                              <span className="px-3 py-1">{item.quantity}</span>
                              <button
                                onClick={() =>
                                  handleQuantityChange(item.id, item.quantity, true)
                                }
                                className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                              >
                                <ChevronUp size={16} />
                              </button>
                            </div>
                            <span className="font-medium">{item.price * item.quantity} zł</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                  <h2 className="text-xl font-serif mb-4">Podsumowanie</h2>
                  <div className="space-y-3 border-b border-gray-100 pb-4 mb-4">
                    <div className="flex justify-between">
                      <span>Wartość produktów</span>
                      <span>{calculateTotal()} zł</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dostawa</span>
                      <span>0.00 zł</span>
                    </div>
                  </div>
                  <div className="flex justify-between font-medium text-lg mb-6">
                    <span>Razem</span>
                    <span>{calculateTotal()} zł</span>
                  </div>
                  <button className="w-full btn-primary py-3 rounded-md mb-3">
                    Przejdź do kasy
                  </button>
                  <Link
                    to="/products"
                    className="w-full flex items-center justify-center text-neobags-charcoal hover:text-neobags-gold transition-colors"
                  >
                    <ShoppingBag size={16} className="mr-2" />
                    <span>Kontynuuj zakupy</span>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm">
              <div className="inline-flex justify-center items-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                <ShoppingBag size={32} className="text-gray-400" />
              </div>
              <h2 className="text-2xl font-serif mb-2">Twój koszyk jest pusty</h2>
              <p className="text-gray-600 mb-8">
                Nie masz jeszcze żadnych produktów w koszyku.
              </p>
              <Link to="/products" className="btn-primary py-3 px-8 rounded-md">
                Przejdź do sklepu
              </Link>
            </div>
          )}
        </div>

        {/* Empty Cart Confirmation */}
        {showEmptyConfirm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-xl font-serif mb-4">Wyczyść koszyk</h3>
              <p className="text-gray-600 mb-6">
                Czy na pewno chcesz usunąć wszystkie produkty z koszyka?
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowEmptyConfirm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Anuluj
                </button>
                <button
                  onClick={() => {
                    clearCart();
                    setShowEmptyConfirm(false);
                  }}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                  Wyczyść
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Cart;
