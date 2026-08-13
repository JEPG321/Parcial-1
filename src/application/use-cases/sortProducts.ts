import type { Product } from "@/domain/entities/Product";

export type SortOption = "featured" | "price-asc" | "price-desc";

export function sortProducts(products: Product[], sortBy: SortOption): Product[] {
  const clonedProducts = [...products];

  if (sortBy === "price-asc") {
    return clonedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "price-desc") {
    return clonedProducts.sort((a, b) => b.price - a.price);
  }

  return clonedProducts;
}
