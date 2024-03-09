// CartContext.tsx
import { createContext, ReactNode, useState } from "react";

type CartContextType = {
  cartData: any[];
  addToCart: (game: any) => void;
  removeFromCart: (id: number) => void;
  setCartItems: (cartData: any[]) => void;
};

export const CartContext = createContext<CartContextType>({
  cartData: [],
  addToCart: () => {},
  removeFromCart: () => {},
  setCartItems: () => {},
});

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartData, setCartItems] = useState<any[]>([]);

  const addToCart = (game: any) => {
    setCartItems((prevCartData) => [...prevCartData, game]);
  };
  const removeFromCart = (id: number) => {
    setCartItems((prevCartData) => prevCartData.filter(game => game.id !== id));
  }

  return (
    <CartContext.Provider value={{ cartData, addToCart, removeFromCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;