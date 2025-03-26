
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, Color, getColorLabel } from '../utils/products';
import { toast } from "sonner";

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  color: Color;
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, color: Color) => void;
  removeItem: (productId: string, color: Color) => void;
  updateQuantity: (productId: string, color: Color, quantity: number) => void;
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
    setTotalPrice(items.reduce((sum, item) => sum + (item.price * item.quantity), 0));
  }, [items]);

  const addItem = (product: Product, color: Color) => {
    setItems(prevItems => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(
        item => item.productId === product.id && item.color === color
      );

      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        toast.success(`Zwiększono ilość ${product.name} (${getColorLabel(color)}) w koszyku`);
        return updatedItems;
      } else {
        // Item doesn't exist, add new item
        toast.success(`Dodano ${product.name} (${getColorLabel(color)}) do koszyka`);
        return [...prevItems, { 
          id: `${product.id}-${color}`,
          productId: product.id,
          name: product.name,
          price: product.price,
          color: color,
          image: product.images[0],
          quantity: 1 
        }];
      }
    });
  };

  const removeItem = (productId: string, color: Color) => {
    setItems(prevItems => {
      const updatedItems = prevItems.filter(
        item => !(item.productId === productId && item.color === color)
      );
      if (updatedItems.length < prevItems.length) {
        toast.info("Usunięto produkt z koszyka");
      }
      return updatedItems;
    });
  };

  const updateQuantity = (productId: string, color: Color, quantity: number) => {
    if (quantity < 1) return;
    
    setItems(prevItems => {
      return prevItems.map(item => {
        if (item.productId === productId && item.color === color) {
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
