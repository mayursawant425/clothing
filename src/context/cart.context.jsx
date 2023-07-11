import { createContext, useEffect, useState } from "react";

const addToCart = (cartItems, product) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === product.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem);
  }
  return [...cartItems, { ...product, quantity: 1 }];
}

const removeFromCart = (cartItems, product) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === product.id);
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem);
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  removeItemFromCart: () => { },
  cartCount: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const itemCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(itemCount);
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addToCart(cartItems, productToAdd));
  }

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeFromCart(cartItems, cartItemToRemove));
  }

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, cartCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}