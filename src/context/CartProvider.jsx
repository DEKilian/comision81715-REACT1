import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const isInCart = (product) => cart.some((el) => el.id === product.id);

  const addToCart = (product) => {
    if (!isInCart(product)) {
      setCart([...cart, product]);
    } else {
      const copyCart = cart.map((el) => {
        if (el.id === product.id) return { ...el, count: el.count + product.count };
        return el;
      });
      setCart(copyCart);
    }
  };

  const getCartQuantity = () => {
    return cart.reduce((acc, current) => acc + current.count, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((acc, current) => acc + current.count * current.price, 0);
  };

  const clearCart = () => setCart([]);

  const removeItem = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeItem, 
        getCartQuantity,
        getCartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;