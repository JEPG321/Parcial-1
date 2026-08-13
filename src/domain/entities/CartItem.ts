import type { Product } from "@/domain/entities/Product";

export interface CartItem extends Product {
  quantity: number;
}
