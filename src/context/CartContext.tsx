"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react";
import { addToCart } from "@/application/use-cases/addToCart";
import { calculateCartTotal } from "@/application/use-cases/calculateCartTotal";
import { removeFromCart } from "@/application/use-cases/removeFromCart";
import { updateCartItemQuantity } from "@/application/use-cases/updateCartItemQuantity";
import type { CartItem } from "@/domain/entities/CartItem";
import type { Product } from "@/domain/entities/Product";

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "INCREMENT_ITEM"; payload: number }
  | { type: "DECREMENT_ITEM"; payload: number }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "HYDRATE_CART"; payload: CartItem[] }
  | { type: "CLEAR_CART" };

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  total: number;
  totalItems: number;
  dispatch: Dispatch<CartAction>;
}

const CartContext = createContext<CartContextValue | null>(null);

const initialState: CartState = {
  items: [],
  isOpen: false,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        isOpen: true,
        items: addToCart(state.items, action.payload),
      };
    case "INCREMENT_ITEM":
      return {
        ...state,
        items: updateCartItemQuantity(state.items, action.payload, 1),
      };
    case "DECREMENT_ITEM":
      return {
        ...state,
        items: updateCartItemQuantity(state.items, action.payload, -1),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: removeFromCart(state.items, action.payload),
      };
    case "OPEN_CART":
      return { ...state, isOpen: true };
    case "CLOSE_CART":
      return { ...state, isOpen: false };
    case "TOGGLE_CART":
      return { ...state, isOpen: !state.isOpen };
    case "HYDRATE_CART":
      return { ...state, items: action.payload };
    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const storedCart = window.localStorage.getItem("bytemarket-cart");

    if (!storedCart) {
      return;
    }

    try {
      const parsedCart = JSON.parse(storedCart) as CartItem[];
      dispatch({ type: "HYDRATE_CART", payload: parsedCart });
    } catch {
      window.localStorage.removeItem("bytemarket-cart");
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("bytemarket-cart", JSON.stringify(state.items));
  }, [state.items]);

  const value = useMemo(
    () => ({
      items: state.items,
      isOpen: state.isOpen,
      total: calculateCartTotal(state.items),
      totalItems: state.items.reduce((sum, item) => sum + item.quantity, 0),
      dispatch,
    }),
    [state],
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
