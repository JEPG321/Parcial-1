import { Storefront } from "@/components/store/Storefront";
import { getAllProducts } from "@/infrastructure/repositories/productRepository";

export default function Home() {
  const products = getAllProducts();

  return <Storefront products={products} />;
}
