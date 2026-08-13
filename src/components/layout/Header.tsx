"use client";

import { ShoppingCart } from "@/components/ui/Icons";
import { useCart } from "@/context/CartContext";

export function Header() {
  const { totalItems, dispatch } = useCart();

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
            ByteMarket
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
            Hardware de alto rendimiento
          </h1>
        </div>

        <button
          type="button"
          onClick={() => dispatch({ type: "TOGGLE_CART" })}
          className="group relative inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-cyan-300/15"
        >
          <ShoppingCart className="h-5 w-5 text-cyan-200 transition group-hover:scale-110" />
          <span>Carrito</span>
          <span className="inline-flex min-w-7 items-center justify-center rounded-full bg-cyan-300 px-2 py-0.5 text-xs font-bold text-slate-950">
            {totalItems}
          </span>
        </button>
      </div>
    </header>
  );
}
