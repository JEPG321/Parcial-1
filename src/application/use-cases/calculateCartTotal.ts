import type { CartItem } from "@/domain/entities/CartItem";

export function calculateCartTotal(cart: CartItem[]): number {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
