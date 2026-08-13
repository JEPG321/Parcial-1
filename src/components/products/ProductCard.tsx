"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/domain/entities/Product";

export function ProductCard({ product }: { product: Product }) {
  const { dispatch } = useCart();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-slate-800 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))] shadow-lg shadow-slate-950/25 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-950/40">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-white/6 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_50%),linear-gradient(180deg,rgba(15,23,42,0.7),rgba(15,23,42,0.95))]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
              {product.category}
            </span>
            <p className="text-lg font-bold text-white">${product.price.toFixed(2)}</p>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
              {product.name}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{product.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.specs.map((spec) => (
            <span
              key={spec}
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300"
            >
              {spec}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
          className="mt-auto rounded-2xl bg-[linear-gradient(135deg,#22d3ee,#f97316)] px-4 py-3 text-sm font-bold text-slate-950 transition hover:brightness-110"
        >
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}
