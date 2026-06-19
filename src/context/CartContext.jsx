import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getProductBySlug } from "../data/products.js";
import {
  addCartItem,
  decreaseCartItemQuantity,
  getCartSubtotal,
  increaseCartItemQuantity,
  removeCartItem,
} from "../utils/cart.js";

const CartContext = createContext(null);
const CART_STORAGE_KEY = "origin-house-cart";

function loadStoredCartItems() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedItems = JSON.parse(window.localStorage.getItem(CART_STORAGE_KEY) || "[]");

    return storedItems
      .map((item) => {
        const product = getProductBySlug(item.slug);

        if (!product) {
          return null;
        }

        return {
          product,
          weight: item.weight,
          quantity: Math.max(1, Number(item.quantity) || 1),
        };
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(loadStoredCartItems);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const storedItems = cartItems.map((item) => ({
      slug: item.product.slug,
      weight: item.weight,
      quantity: item.quantity,
    }));

    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(storedItems));
    } catch {
      // Storage can be unavailable in private or restricted browser contexts.
    }
  }, [cartItems]);

  function addToCart(product, options = {}) {
    setCartItems((currentItems) => addCartItem(currentItems, product, options));
    setIsCartOpen(true);
  }

  function increaseQuantity(productSlug, weight) {
    setCartItems((currentItems) => increaseCartItemQuantity(currentItems, productSlug, weight));
  }

  function decreaseQuantity(productSlug, weight) {
    setCartItems((currentItems) => decreaseCartItemQuantity(currentItems, productSlug, weight));
  }

  function removeFromCart(productSlug, weight) {
    setCartItems((currentItems) => removeCartItem(currentItems, productSlug, weight));
  }

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  );
  const subtotal = useMemo(() => getCartSubtotal(cartItems), [cartItems]);

  const value = useMemo(
    () => ({
      cartItems,
      cartCount,
      subtotal,
      isCartOpen,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }),
    [cartItems, cartCount, isCartOpen, subtotal],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
