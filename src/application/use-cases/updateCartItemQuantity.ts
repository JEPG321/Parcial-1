import type { CartItem } from "@/domain/entities/CartItem";

export function updateCartItemQuantity(
  cart: CartItem[],
  productId: number,
  delta: number,
): CartItem[] {
  return cart.reduce<CartItem[]>((accumulator, item) => {
    if (item.id !== productId) {
      accumulator.push(item);
      return accumulator;
    }

    const nextQuantity = item.quantity + delta;

    if (nextQuantity > 0) {
      accumulator.push({ ...item, quantity: nextQuantity });
    }

    return accumulator;
  }, []);
}
