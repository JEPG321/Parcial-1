import type { CartItem } from "@/domain/entities/CartItem";

export function removeFromCart(cart: CartItem[], productId: number): CartItem[] {
  return cart.filter((item) => item.id !== productId);
}
