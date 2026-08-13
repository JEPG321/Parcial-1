import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/domain/entities/Product";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
