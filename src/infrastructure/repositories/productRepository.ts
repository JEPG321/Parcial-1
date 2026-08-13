import { getProducts } from "@/application/use-cases/getProducts";
import type { Product } from "@/domain/entities/Product";

export function getAllProducts(): Product[] {
  return getProducts();
}
