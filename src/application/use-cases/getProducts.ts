import { productsDb } from "@/data/db";
import type { Product } from "@/domain/entities/Product";

export function getProducts(): Product[] {
  return productsDb;
}
