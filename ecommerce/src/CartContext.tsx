import { createContext, useState, ReactNode } from "react";

interface CartItem {
  id: number;
  product: string;
  price: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  totalAmount: number;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
