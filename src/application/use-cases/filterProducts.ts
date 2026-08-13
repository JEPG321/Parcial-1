import type { Category, Product } from "@/domain/entities/Product";

export function filterProducts(products: Product[], category: Category): Product[] {
  if (category === "Todos") {
    return products;
  }

  return products.filter((product) => product.category === category);
}
