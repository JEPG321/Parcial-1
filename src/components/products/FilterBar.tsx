"use client";

import type { SortOption } from "@/application/use-cases/sortProducts";
import type { Category } from "@/domain/entities/Product";

interface FilterBarProps {
  categories: Category[];
  selectedCategory: Category;
  selectedSort: SortOption;
  onCategoryChange: (value: Category) => void;
  onSortChange: (value: SortOption) => void;
  resultsCount: number;
}

export function FilterBar({
  categories,
  selectedCategory,
  selectedSort,
  onCategoryChange,
  onSortChange,
  resultsCount,
}: FilterBarProps) {
  return (
    <section className="grid gap-4 rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-5 shadow-lg shadow-slate-950/30 md:grid-cols-[1.1fr_1fr_auto] md:items-end">
      <div className="space-y-2">
        <label htmlFor="category" className="text-sm font-medium text-slate-300">
          Filtrar por categoria
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value as Category)}
          className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="sort" className="text-sm font-medium text-slate-300">
          Ordenar por precio
        </label>
        <select
          id="sort"
          value={selectedSort}
          onChange={(event) => onSortChange(event.target.value as SortOption)}
          className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
        >
          <option value="featured">Destacados</option>
          <option value="price-asc">Menor a mayor</option>
          <option value="price-desc">Mayor a menor</option>
        </select>
      </div>

      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-100">
        {resultsCount} productos visibles
      </div>
    </section>
  );
}
