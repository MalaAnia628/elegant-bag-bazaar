
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../utils/products';
import { toast } from "sonner";

interface CartItem {
  product: Product;
  quantity: number;
  color: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, color: string) => void;
  removeItem: (productId: string, color: string) => void;
  updateQuantity: (productId: string, color: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('neobags-cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('neobags-cart', JSON.stringify(items));
    
    // Calculate totals
    setTotalItems(items.reduce((sum, item) => sum + item.quantity, 0));
    setTotalPrice(items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0));
  }, [items]);

  const addItem = (product: Product, color: string) => {
    setItems(prevItems => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(
        item => item.product.id === product.id && item.color === color
      );

      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        toast.success(`Zwiększono ilość ${product.name} (${color}) w koszyku`);
        return updatedItems;
      } else {
        // Item doesn't exist, add new item
        toast.success(`Dodano ${product.name} (${color}) do koszyka`);
        return [...prevItems, { product, quantity: 1, color }];
      }
    });
  };

  const removeItem = (productId: string, color: string) => {
    setItems(prevItems => {
      const updatedItems = prevItems.filter(
        item => !(item.product.id === productId && item.color === color)
      );
      if (updatedItems.length < prevItems.length) {
        toast.info("Usunięto produkt z koszyka");
      }
      return updatedItems;
    });
  };

  const updateQuantity = (productId: string, color: string, quantity: number) => {
    if (quantity < 1) return;
    
    setItems(prevItems => {
      return prevItems.map(item => {
        if (item.product.id === productId && item.color === color) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setItems([]);
    toast.info("Koszyk został wyczyszczony");
  };

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
