"use client";

import { useCart } from "@/context/CartContext";

export function CartSummary() {
  const { total, totalItems, items, dispatch } = useCart();

  return (
    <div className="rounded-[1.8rem] border border-cyan-400/20 bg-[linear-gradient(180deg,rgba(34,211,238,0.12),rgba(15,23,42,0.95))] p-5">
      <div className="flex items-center justify-between text-sm text-slate-300">
        <span>Productos en carrito</span>
        <span>{totalItems}</span>
      </div>
      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">Total a pagar</p>
          <p className="mt-1 text-3xl font-bold text-white">${total.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <button
          type="button"
          className="flex-1 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={items.length === 0}
        >
          Finalizar compra
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "CLEAR_CART" })}
          className="rounded-2xl border border-slate-600 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-rose-400 hover:text-rose-200 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={items.length === 0}
        >
          Vaciar
        </button>
      </div>
    </div>
  );
}
