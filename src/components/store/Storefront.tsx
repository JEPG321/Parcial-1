"use client";

import { useState } from "react";
import { filterProducts } from "@/application/use-cases/filterProducts";
import { sortProducts, type SortOption } from "@/application/use-cases/sortProducts";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/layout/Hero";
import { Header } from "@/components/layout/Header";
import { FilterBar } from "@/components/products/FilterBar";
import { ProductGrid } from "@/components/products/ProductGrid";
import type { Category, Product } from "@/domain/entities/Product";

const categories: Category[] = [
  "Todos",
  "Componentes",
  "Monitores",
  "Perifericos",
  "Almacenamiento",
];

export function Storefront({ products }: { products: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos");
  const [selectedSort, setSelectedSort] = useState<SortOption>("featured");

  const visibleProducts = sortProducts(
    filterProducts(products, selectedCategory),
    selectedSort,
  );

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#020617,#081229_40%,#0f172a_100%)] text-white">
      <Header />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <Hero />
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          selectedSort={selectedSort}
          onCategoryChange={setSelectedCategory}
          onSortChange={setSelectedSort}
          resultsCount={visibleProducts.length}
        />
        <section className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Seleccion Curada
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
              Catalogo de componentes y perifericos
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            Filtra por categoria y ordena por precio para demostrar el flujo dinamico del
            parcial en tiempo real.
          </p>
        </section>
        <ProductGrid products={visibleProducts} />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
